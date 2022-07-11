import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import firebase from "../../firebase/base"
const auth = firebase.auth()
const db = firebase.firestore()
const functions = firebase.functions()

export default function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const setPremiumUser = functions.httpsCallable("setPremiumUser")
  const [message, setMessage] = useState(null)
  const [userEmail, setUserEmail] = useState("")
  const [user, setUser] = useState({})
  const successRef = useRef()
  const warningRef = useRef()

  useEffect(() => {
    const checkUserEmail = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserEmail(user.email)
        } else {
          warningRef.current.style.display="block"
        }
      })
    }
    checkUserEmail()
  })
  
  useEffect(() => {
    const checkUser = async () => {
      setUser((await db.collection("users").doc(userEmail).get()).data());
    };
    if (userEmail) checkUser();
  }, [userEmail]);
  const username = user.nombre;

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!userEmail) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeded!");
          successRef.current.style.display="block"
          setPremiumUser({ email: userEmail });
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, userEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment`,
        payment_method_data: {
          billing_details: {
            email: userEmail,
            name: username,
          },
        },
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />

      {userEmail && (
        <button type="submit" disabled={!stripe || !userEmail} className="btn btn-dark btn-block mt-3">
          Pay now
        </button>
      )}

      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
      <div className="alert alert-warning mt-3" ref={warningRef} style={{display:'none'}}>
        ¡Para realizar el pago, primero debes crear una cuenta, 
        de lo contrario no podrás acceder al curso!
      </div>
      <div className="mt-2 mb-1" ref={successRef} style={{display:'none'}}>
        <span className="ml-1 mt-1 mb-2 d-block">
          Access to the course
          <Link href="/videos">
            <a style={{cursor:'pointer'}}>
              {" "}<u>here</u>
            </a>
          </Link>
        </span>
      </div>
    </form>
  )
}
import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import firebase from "../../firebase/base";
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const setPremiumUser = functions.httpsCallable("setPremiumUser");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkUserEmail = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserEmail(user.email);
        }
      });
    };
    checkUserEmail();
  });

  useEffect(() => {
    const checkUser = async () => {
      const user = (await db.collection("users").doc(userEmail).get()).data();
      setUsername(user.nombre);
    };
    if (userEmail) checkUser();
  }, [userEmail]);

  useEffect(() => {
    if (!stripe) {
      return
    }
    if (!userEmail) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          alert("Payment succeded!");
          setPremiumUser({ email: userEmail });
          break;
        case "processing":
          alert("Your payment is processing.");
          break;
        case "requires_payment_method":
          alert("Your payment was not successful, please try again.");
          break;
        default:
          alert("Something went wrong.");
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
        return_url: `${window.location.origin}/success`,
        payment_method_data: {
          billing_details: {
            email: userEmail,
            name: username,
          },
        },
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      alert(error.message);
    } else {
      alert("An unexpected error occurred.");
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      {userEmail && (
        <button
          type="submit"
          disabled={!stripe || !userEmail}
          className="btn btn-dark btn-block mt-3"
        >
          Pay now
        </button>
      )}
    </form>
  );
}

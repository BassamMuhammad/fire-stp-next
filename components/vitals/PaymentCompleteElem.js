import React, { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from "./PaymentForm"
const stripePromise = loadStripe("pk_test_51HLuLEEQnDpGECUPnl9GKoHt8ZNJH8Go4Zi9pYcijAmFxA4KZjmvN91utZo9AP6k5GOcc7qXkLSZJSJLnFcydrnV00ENOWMq0h")

export const PaymentCompleteElem = () => {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    fetch("/api/payment_intent").then(r => r.json())
    .then(data => setClientSecret(data.clientSecret))
  }, [])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance
  }
  
  return (
    <>
      {clientSecret && (
        <>
          <span>Make the payment</span>
          <hr/>
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </>
      )}
    </>
  )
}
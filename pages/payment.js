import React, { useRef, useState } from "react";
import { Header } from "../components/utils/Header";
import { Signup } from "../components/vitals/Signup";
import { Features } from "../components/utils/Features";
import { PaymentCompleteElem } from "../components/vitals/PaymentCompleteElem"

function Payment() {
  const signupRef = useRef();
  const paymentRef = useRef();
  const [step, setStep] = useState(0);

  return (
    <>
      <Header login="false" />
      <h3 style={{ padding: "15px 0 20px 12px" }}>Get into the course 😎</h3>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Features
              prodName="Master coding course"
              price="$97 USD"
              imgSrc="/images/hero.jpg"
            />
          </div>
          <div className="col-12 col-md-6">

            <div ref={signupRef} style={{ display: `${step === 0 ? "block" : "none"}` }} >
              <Signup setStep={setStep} />
            </div>

            <div ref={paymentRef} style={{ display: `${step === 1 ? "block" : "none"}` }} >
              <PaymentCompleteElem />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
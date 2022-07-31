import React, { useRef } from "react";
import { auth } from "../../firebase/base";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h2>Enter your credentials</h2>
        <input
          type="email"
          ref={emailRef}
          className="form-control mt-2"
          placeholder="Email"
        />
        <input
          type="password"
          ref={passwordRef}
          className="form-control mt-2"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={login}
          data-dismiss="modal"
          className="btn btn-dark btn-block mt-3 mb-3"
        >
          Login
        </button>
      </div>
    </div>
  );
};

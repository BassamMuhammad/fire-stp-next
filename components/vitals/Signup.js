import React, { useRef } from "react";
import firebase from "../../firebase/base";
const auth = firebase.auth();
const db = firebase.firestore();

export const Signup = ({ setStep }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const signUp = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection("users").doc(res.user.email).set({
      nombre: name,
      email: res.user.email,
      id: res.user.uid,
    });
    setStep(1);
  };

  const logOut = async () => {
    await auth.signOut();
    window.location.reload();
  };

  return (
    <>
      <span>Create an account</span>
      <input
        type="text"
        ref={nameRef}
        className="form-control mt-2"
        placeholder="Name"
      />
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
        className="btn btn-dark btn-block mt-3"
        onClick={signUp}
      >
        Sign up
      </button>
      <small className="ml-1 mt-1 mb-2 d-block">
        If you entered a wrong email, you could log out
        <span onClick={logOut} className="text-primary">
          {" "}
          <u style={{ cursor: "pointer" }}>here</u>
        </span>
      </small>
    </>
  );
};

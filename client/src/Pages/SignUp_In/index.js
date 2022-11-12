import React, { useState } from "react";
import styles from "./signupin.module.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../../api/firebase";
import { useNavigate } from "react-router";

export default function SignUpIn() {
  const [rightPanel, setRightPanel] = useState(false);
  const [loginForm, setLoginForm] = useState({});
  const [signupForm, setSignupForm] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    console.log(auth);
    await signInWithEmailAndPassword(
      auth,
      signupForm.email,
      signupForm.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    console.log(auth, signupForm);

    await createUserWithEmailAndPassword(
      auth,
      signupForm.email,
      signupForm.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div id={styles["cont"]}>
      <div
        className={`${styles["container"]} ${
          rightPanel ? styles["right-panel-active"] : ""
        }`}
        id={styles["container"]}
      >
        <div
          className={`${styles["form-container"]} ${styles["sign-up-container"]}`}
        >
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div
          className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
        >
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
              }}
            />
            {/* <a href="#">Forgot your password?</a> */}
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles["overlay"]}>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}
            >
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={styles["ghost"]}
                id={styles["signIn"]}
                onClick={() => {
                  setRightPanel(false);
                }}
              >
                Sign In
              </button>
            </div>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
            >
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className={styles["ghost"]}
                id={styles["signUp"]}
                onClick={() => {
                  setRightPanel(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

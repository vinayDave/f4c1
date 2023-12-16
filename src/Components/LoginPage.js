import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //errors
  const [emailColor, setEmailColor] = useState("input-element");
  const [passwordColor, setPasswordColor] = useState("input-element");
  const [confirmPasswordColor, setConfirmPasswordColor] =
    useState("input-element");

  function isEmailValid() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isPasswordValid() {
    return password.length >= 8;
  }

  function isConfirmPasswordValid() {
    return (
      confirmPassword === password &&
      confirmPassword !== "" &&
      confirmPassword.length >= 8
    );
  }

  function canFormSubmit(e) {
    e.preventDefault();
    isEmailValid() && isPasswordValid && isConfirmPasswordValid()
      ? alert("Form submitted successfully!")
      : alert("Form cannot be submitted!");
  }

  useEffect(() => {
    setEmailColor(
      isEmailValid() ? "success-input-element" : "error-input-element"
    );

    setPasswordColor(
      isPasswordValid() ? "success-input-element" : "error-input-element"
    );
    setConfirmPasswordColor(
      isConfirmPasswordValid() ? "success-input-element" : "error-input-element"
    );
  }, [email, password, confirmPassword]);

  return (
    <div className="input">
      <form onSubmit={canFormSubmit}>
        <div className={emailColor}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid() && (
            <p className="invalid-field">Invalid email format</p>
          )}
        </div>

        <div className={passwordColor}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid() && (
            <p className="invalid-field">
              Password must be at least 8 characters
            </p>
          )}
        </div>

        <div className={confirmPasswordColor}>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {!isConfirmPasswordValid() && (
            <p className="invalid-field">Password do not match</p>
          )}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default LoginPage;

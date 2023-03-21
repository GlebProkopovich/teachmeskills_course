import React, { useState } from 'react';
import './SignIn.scss';

const SignIn = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <div className="SignIn-container">
      <button className="backHome">Back to home</button>
      <h2>Sign In</h2>
      <form>
        <div className="email-container">
          <h3>Email</h3>
          <input
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="password-container">
          <h3>Password</h3>
          <input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="Password"
            placeholder="Your password"
          />
        </div>
        <button className="forgotPassword">Forgot password?</button>
        <button className="signIn">Sign in</button>
        <div className="signUp-container">
          <p>Don't have an account?</p>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

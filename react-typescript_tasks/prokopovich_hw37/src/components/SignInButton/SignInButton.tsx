import React, { useState } from 'react';
import './SignInButton.css';

const SignInButton: React.FC = () => {
  const [isSigned, setIsSigned] = useState(false);
  return (
    <div
      className="SignInButton-container"
      onClick={() => setIsSigned(!isSigned)}
    >
      <h4 className={isSigned ? 'empty' : 'hide'}>AM</h4>
      <h3 className={isSigned ? 'empty' : 'bigger-fontsize'}>
        {isSigned ? 'Artem Malkin' : 'Sign in'}
      </h3>
    </div>
  );
};

export default SignInButton;

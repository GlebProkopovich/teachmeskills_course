import React, { useState } from 'react';
import './SignIn.css';

const SignIn: React.FC = () => {
  const [isSigned, setIsSigned] = useState(false);
  return (
    <div className="SignIn-container" onClick={() => setIsSigned(!isSigned)}>
      <h4 className={isSigned ? 'empty' : 'hide'}>AM</h4>
      <h3 className={isSigned ? 'empty' : 'bigger-fontsize'}>
        {isSigned ? 'Artem Malkin' : 'Sign in'}
      </h3>
    </div>
  );
};

export default SignIn;

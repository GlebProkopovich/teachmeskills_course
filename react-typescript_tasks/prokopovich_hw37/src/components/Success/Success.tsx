import React from 'react';
import './Success.scss';

const Success = () => {
  return (
    <div className="success-container">
      <button className="backHome">Back to home</button>
      <h2>Success</h2>
      <div className="confirmation">
        <p>Email confirmed. Your registration has been complited.</p>
        <button>Go to home</button>
      </div>
    </div>
  );
};

export default Success;

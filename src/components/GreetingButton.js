import React from 'react';

const GreetingButton = ({ onGreet }) => {
  return (
    <button onClick={onGreet} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Tap to Meet Your News Assistant
    </button>
  );
};

export default GreetingButton;

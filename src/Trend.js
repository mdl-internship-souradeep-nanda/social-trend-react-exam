import React from 'react';
import logo from './media/logo.svg';

function Trend() {
  const myStyle = {
    width: '80px',
  };
  return (
    <div>
      <span> DUMMY TREND </span>
      <img src={logo} alt="logo" style={myStyle} />
    </div>
  );
}

export default Trend;

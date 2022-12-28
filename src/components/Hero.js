import React from 'react';
import logo from '../images/logo.png';

export default function Hero()
{
  return (
    <div className="img-container">
      <img src={logo} alt='Profile pic'/>
    </div>
  );
}
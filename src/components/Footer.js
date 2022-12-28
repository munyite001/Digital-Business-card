import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="icon-container">
        <img src={require('../images/Twitter Icon.png')} alt="social icon" className='footer-icon'/>
      </div>
      <div className="icon-container">
        <img src={require('../images/Facebook Icon.png')} alt="social icon" className='footer-icon'/>
      </div>
      <div className="icon-container">
        <img src={require('../images/Instagram Icon.png')} alt="social icon" className='footer-icon'/>
      </div>
      <div className="icon-container">
        <img src={require('../images/GitHub Icon.png')} alt="social icon" className='footer-icon'/>
      </div>
    </footer>
  );
}
import React from "react";


export default function Intro()
{
  return (
    <div className="title">
      <h1>Emmanuel Munyite</h1>
      <h2>FrontEnd Developer</h2>
      <a href="https://github.com/munyite001" target='_blank' rel="noreferrer" className="git-link">Munyite001</a>
      <div className="btn-wrapper">
        <a className="social-btns" href="email" target='_blank'>
          <img src={require('../images/Mail.png')} alt="Email-icon" className="btn-icon"/>
          <span>Email</span>
        </a>
        <a className="social-btns" href="linkedin" target='_blank'>
          <img src={require('../images/linkedin.png')} alt="Linkedin-icon" className="btn-icon"/>
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  );
}
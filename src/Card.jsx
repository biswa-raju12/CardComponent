import React from "react";

function Card() {
  return (
    <div className="Card1">
      <h1>Welcome Back</h1>
      <p>Enter Your Credential to access your Account</p>
      <input className="input" placeholder="Input your Email"></input>
      <br />
      <input className="input" placeholder="Input Your Password"></input>
      <br />
      <button type="submit" className="btn">
        Sign in
      </button>

      <p className="footer">forget your password? Reset Your Password</p>
    </div>
  );
}

export default Card;

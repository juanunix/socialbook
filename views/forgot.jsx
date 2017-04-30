import React from 'react';

const Forgot = () => (
  <html>
    <head>
      <title>
        Socialbook | Forgot
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/styles.css" type="text/css"/>
    </head>
    <body className="login">
      <div className="container">
        <div className="heading">
          <h2>Forgot Password</h2>
        </div>
        <form className="signin" method="get" action="forgot.html">
          <div className="input">
            <input id="username"
                  type="text"
                  placeholder="Username or Email address"
                  name="username"/>
          </div>
          <div className="button">
            <button onclick="alert('Please check your email')">Send me a mail</button>
          </div>
        </form>
        <div className="or">
          <span>or</span>
        </div>
        <div className="signup-link">
          <a href="login.html">Click here to login</a>
        </div>
      </div>
    </body>
  </html>
);

export default Forgot;

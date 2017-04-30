import React from 'react';

const Login = () => (
  <html>
    <head>
      <title>
        Socialbook | Login
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/styles.css" type="text/css"/>
    </head>
    <body className="login">
      <div className="container">
        <div className="heading">
          <h2>Socialbook</h2>
        </div>
        <form className="signin" method="get" action="home.html">
          <div className="input">
            <input id="username"
              type="text"
              placeholder="Username"
              name="username"/>
          </div>
          <div className="input">
            <input id="password"
              type="password"
              placeholder="Password"
              name="password"/>
          </div>
          <div className="button">
            <button>Sign In</button>
          </div>
          <div className="forgot-link">
            <a href="forgot.html">Forgot password?</a>
          </div>
        </form>
        <div className="or">
          <span>or</span>
        </div>
        <div className="signup-link">
          <a href="register.html">Click here to register</a>
        </div>
      </div>
    </body>
  </html>
);

export default Login;

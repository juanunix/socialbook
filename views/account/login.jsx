import React from 'react';
import Layout from '../partials/layout';

const Login = ({ errorMessage }) => (
  <Layout title="Login" className="login" scripts={false}>
    <div className="container">
      <div className="heading">
        <h2>Socialbook</h2>
      </div>
      {errorMessage &&
        <div className="error-message">
          {errorMessage}
        </div>
      }
      <form className="signin" method="post" action="/login">
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
  </Layout>
);

export default Login;

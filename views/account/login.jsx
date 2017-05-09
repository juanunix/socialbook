import React from 'react';
import Layout from '../partials/layout';

const Login = ({ error }) => (
  <Layout title="Login" className="login" scripts={false}>
    <div className="container">
      <div className="heading">
        <h2>Socialbook</h2>
      </div>
      {error &&
        <div className="error-message">
          {error}
        </div>
      }
      <form className="signin" method="post" action="/login">
        <div className="input">
          <input id="username"
            type="text"
            required
            placeholder="Username"
            name="username"/>
        </div>
        <div className="input">
          <input id="password"
            type="password"
            required
            placeholder="Password"
            name="password"/>
        </div>
        <div>
          <button>Sign In</button>
        </div>
        <div className="forgot-link">
          <a href="/forgot">Forgot password?</a>
        </div>
      </form>
      <div className="or">
        <span>or</span>
      </div>
      <div className="signup-link">
        <a href="/signup">Click here to register</a>
      </div>
    </div>
  </Layout>
);

export default Login;

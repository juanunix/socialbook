import React from 'react';
import Layout from '../partials/layout';

const Forgot = () => (
  <Layout title="Forgot" className="login" scripts={false}>
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
        <div>
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
  </Layout>
);

export default Forgot;

import React from 'react';
import Layout from '../partials/layout';

const Signup = ({ error }) => (
  <Layout title="Create new account" className="login" scripts={false}>
    <div className="container">
      <div className="heading">
        <h2>Socialbook</h2>
      </div>
      {error &&
        <div className="error-message">
          {error}
        </div>
      }
      <form className="signin" method="post" action="/signup">
        <div className="input">
          <input id="email"
          type="text"
          required
          placeholder="Email"
          name="email"/>
        </div>
        <div className="input">
          <input id="name"
          type="text"
          required
          placeholder="Name"
          name="name"/>
        </div>
        <div className="input">
          <input id="username"
          type="text"
          required
          placeholder="Choose a Username"
          name="username"/>
        </div>
        <div className="input">
          <input id="password"
          type="password"
          required
          placeholder="Choose a Password"
          name="password"/>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  </Layout>
);

export default Signup;

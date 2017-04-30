import React from 'react';
import Layout from './partials/layout';

const Signup = () => (
  <Layout title="Create new account" className="login" scripts={false}>
    <div className="container">
      <div className="heading">
        <h2>Socialbook</h2>
      </div>
      <form className="signin" method="get">
        <div className="input">
          <input id="email"
          type="text"
          placeholder="Email"
          name="email"/>
        </div>
        <div className="input">
          <input id="name"
          type="text"
          placeholder="Name"
          name="name"/>
        </div>
        <div className="input">
          <input id="username"
          type="text"
          placeholder="Choose a Username"
          name="username"/>
        </div>
        <div className="input">
          <input id="password"
          type="password"
          placeholder="Choose a Password"
          name="password"/>
        </div>
        <div className="button">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  </Layout>
);

export default Signup;

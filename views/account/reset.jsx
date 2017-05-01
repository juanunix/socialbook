import React from 'react';
import Layout from '../partials/layout';

const ResetPassword = () => (
  <Layout title="Recover Password" className="login" scripts={false}>
    <div className="container">
      <div className="heading">
        <h2>Socialbook</h2>
      </div>
      <form className="signin" method="get">
        <div className="input">
          <input id="email"
          type="text"
          placeholder="Email"
          disabled
          value="priyanshujindal1995@gmail.com"
          name="email"/>
        </div>
        <div className="input">
          <input id="username"
          type="text"
          disabled
          value="prijindal"
          placeholder="Choose a Username"
          name="username"/>
        </div>
        <div className="input">
          <input id="password"
          type="password"
          placeholder="Choose a Password"
          name="password"/>
        </div>
        <div>
          <button>Save Password</button>
        </div>
      </form>
    </div>
  </Layout>
);

export default ResetPassword;

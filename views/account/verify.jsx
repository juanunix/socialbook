import React from 'react';
import Layout from '../partials/layout';

const ResetPassword = ({ error }) => (
  <Layout title="Verify Account" className="login" scripts={false}>
    <div className="container">
      <div className="heading">
        <h2>Socialbook</h2>
      </div>
      {error &&
        <div className="error-message">
          {error}
        </div>
      }
      <form className="signin" method="post" action="/verify">
        <div className="input">
          <input id="verify_code"
          type="text"
          placeholder="Verify Code"
          name="verify_code"/>
        </div>
        <div>
          <button>Verify</button>
        </div>
      </form>
    </div>
  </Layout>
);

export default ResetPassword;

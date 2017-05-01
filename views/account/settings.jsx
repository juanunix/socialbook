import React from 'react';
import Layout from '../partials/layout';
import Navbar from '../partials/navbar';

const Settings = () => (
  <Layout title="Account Settings">
    <Navbar />
    <div className="settings main">
      <form action="settings.html" className="profile-edit">
        <div className="field avatar-field">
          <img src="https://avatars0.githubusercontent.com/u/10034872?v=3&u=c267179bdce8ef8d2bcb303ae7ae20167e247972&s=400" alt="Profile image" />
          <button id="avatar-button">
            Change Avatar
          </button>
          <input id="avatar" type="file" name="Change Avatar" hidden/>
        </div>
        <div className="field">
          <span className="key">Name</span>
          <input type="text" name="name" placeholder="Enter your name" value="Priyanshu Jindal"/>
        </div>
        <div className="field">
          <span className="key">Bio</span>
          <input type="text" name="bio" placeholder="Enter a bio" value="This is just something about myself"/>
        </div>
        <div className="field">
          <button>Save</button>
        </div>
      </form>
      <div className="field">
        <button onclick="window.location='recover.html'">Change Password</button>
      </div>
    </div>
    <script src="/js/settings.js"></script>
  </Layout>
);

export default Settings;

import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';

const Message = () => (
  <Layout title="Messages">
    <Navbar />
    <div className="message main">
      <a href="user.html" className="user-details">
        <img className="avatar" src="https://api.adorable.io/avatars/48/q" alt="" />
        <div className="user-info">
          <span className="user-name">Priyanshu Jindal</span>
          <span className="user-friendship">Friends since 2 years</span>
        </div>
      </a>
      <section className="messages-list">
        <div className="right message">
          <img className="avatar"
          src="https://avatars0.githubusercontent.com/u/10034872?v=3&u=c267179bdce8ef8d2bcb303ae7ae20167e247972&s=400"
          alt="Profile image"
          onclick="window.location='user.html';"
          />
          <div className="text-container">
            <span className="message-text">Hi buddy</span>
            <span className="message-time">Feb 13</span>
          </div>
        </div>
        <div className="left message">
          <img className="avatar"
              src="https://api.adorable.io/avatars/48/q"
              alt="Profile image"
              onclick="window.location='user.html';"
          />
          <div className="text-container">
            <span className="message-text">What's Happening?</span>
            <span className="message-time">Feb 14</span>
          </div>
        </div>
        <div className="right message">
          <img className="avatar"
            src="https://avatars0.githubusercontent.com/u/10034872?v=3&u=c267179bdce8ef8d2bcb303ae7ae20167e247972&s=400"
            alt="Profile image"
            onclick="window.location='user.html';"
          />
          <div className="text-container">
            <span className="message-text">Cool man</span>
            <span className="message-time">Feb 15</span>
          </div>
        </div>
      </section>
      <form className="message-input" action="message.html">
        <input id="message-input-text" type="text" placeholder="Type a message"/>
        <button>
          <img src="icons/ic_send_black_36px.svg"/>
        </button>
      </form>
    </div>
    <script src="/js/message.js"></script>
  </Layout>
);

export default Message;

import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';

const Messages = () => (
  <Layout title="Messages">
    <Navbar />
    <div className="messages main">
      <section className="receipents-search">
        <input type="text" placeholder="Search Receipents"/>
      </section>
      <section className="receipents-list">
        <a href="message.html" className="receipents-item">
          <div className="receipents-header">
            <div className="user-info">
              <img className="avatar" src="https://api.adorable.io/avatars/48/q.png" />
              <span>Priyanshu Jindal</span>
            </div>
            <div className="user-time">
              <span>15 Feb</span>
            </div>
          </div>
          <div className="receipents-body">
            <span>Dude. That party was lorem ipsum</span>
          </div>
        </a>
        <a href="message.html" className="receipents-item">
          <div className="receipents-header">
            <div className="user-info">
              <img className="avatar" src="https://api.adorable.io/avatars/48/w.png" />
              <span>Random Person</span>
            </div>
            <div className="user-time">
              <span>13 Feb</span>
            </div>
          </div>
          <div className="receipents-body">
            <span>You: Bye bye</span>
          </div>
        </a>
      </section>
    </div>
  </Layout>
);

export default Messages;

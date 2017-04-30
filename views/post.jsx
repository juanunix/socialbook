import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';

const Post = () => (
  <Layout title="Messages">
    <Navbar />
    <div className="post-page main">
      <section className="post">
        <div className="post-user">
          <a href="user.html">
            <img className="avatar" src="https://api.adorable.io/avatars/48/abott@adorable.io.png" alt="User profile image" />
          </a>
          <div className="user-info">
            <a href="user.html" className="user-name">Priyanshu Jindal</a>
            <span className="user-time">5 hours ago</span>
          </div>
        </div>
        <div className="post-content">
          <span className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          </span>
          <div className="content-image">
            <img src="http://lorempixel.com/600/600/" />
          </div>
        </div>
      </section>
      <section className="comments-list">
        <div className="comment-item post">
          <div className="post-user">
            <a href="user.html">
              <img className="avatar" src="https://api.adorable.io/avatars/48/abott@adorable.io.png" alt="User profile image" />
            </a>
            <div className="user-info">
              <a href="user.html" className="user-name">Priyanshu Jindal</a>
              <span className="user-time">Commented 4 hours ago</span>
            </div>
          </div>
          <div className="post-content">
            <span className="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </span>
          </div>
        </div>
      </section>
      <section className="comment-new">
        <input id="comment-input-text" type="text" placeholder="Write a comment"/>
        <button>
          <img src="/icons/ic_comment_white_36px.svg"/>
        </button>
      </section>
    </div>
    <script src="/js/post.js"></script>
  </Layout>
);

export default Post;

import React, { Component } from 'react';
import moment from 'moment';
import Layout from './partials/layout';
import Navbar from './partials/navbar';

const User = ({ user, profile, friendship }) => (
  <Layout title="Account Settings">
    <Navbar user={user}/>
    <div className="user main">
      <section className="profile-info" id="profile-info">
        <div className="pic">
          <img src={`/image/${profile.avatar_id}`} />
        </div>
        <div className="user-container">
          <div className="user-info-container">
            <div className="user-info" id="user-info">
              <div className="user-details">
                <span className="user-name">{profile.name}</span>
                {friendship &&
                  <span className="user-friendship">Friends from {moment(friendship.created_at).fromNow()}</span>
                }
              </div>
              <div className="user-actions">
                <a className="button" disabled={!user || user.id === profile.id} href="/message">
                  <img src="/icons/ic_message_white_36px.svg" />
                </a>
                {user && user.id !== profile.id && !friendship &&
                  <form>
                    <button>
                      <img src="/icons/ic_add_white_36px.svg" />
                    </button>
                  </form>
                }
              </div>
            </div>
          </div>
          <div className="user-actions-hidden">
            <a className="button" disabled={!user || user.id === profile.id} href="/message">
              Message
            </a>
            {user && user.id !== profile.id && !friendship &&
              <form>
                <button onclick="window.location='user.html';">
                  Add Friend
                </button>
              </form>
            }
          </div>
          <div className="user-info-hidden">
            <div className="about info">
              <p className="field">About</p>
              <p className="value">Email: <a href={'mailto:' + profile.email}>{profile.email}</a></p>
              <p className="value">Username: {profile.username}</p>
            </div>
            <div className="bio info">
              <p className="field">Bio</p>
              <p className="value">{profile.bio || profile.name}</p>
            </div>
            <div className="friends info">
              <p className="field">Friends</p>
              <div className="friends-list">
                <div className="friends-images">
                  <img className="avatar" src="https://api.adorable.io/avatars/48/q" alt="" />
                  <img className="avatar" src="https://api.adorable.io/avatars/48/w" alt="" />
                  <img className="avatar" src="https://api.adorable.io/avatars/48/e" alt="" />
                  <img className="avatar" src="https://api.adorable.io/avatars/48/r" alt="" />
                  <img className="avatar" src="https://api.adorable.io/avatars/48/t" alt="" />
                  <img className="avatar" src="https://api.adorable.io/avatars/48/y" alt="" />
                  <img className="avatar" src="https://api.adorable.io/avatars/48/u" alt="" />
                </div>
                <div className="friends-list-more">
                  <img src="/icons/ic_keyboard_arrow_right_black_36px.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="posts-list">
        <div className="post">
          <div className="post-user">
            <img className="avatar" src="https://avatars0.githubusercontent.com/u/10034872?v=3&u=c267179bdce8ef8d2bcb303ae7ae20167e247972&s=400" alt="User profile image" />
            <div className="user-info">
              <span className="user-name">Priyanshu Jindal</span>
              <span className="user-time">5 hours ago</span>
            </div>
          </div>
          <div className="post-content">
            <span className="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </span>
          </div>
        </div>


        <div className="post">
          <div className="post-user">
            <img className="avatar" src="https://avatars0.githubusercontent.com/u/10034872?v=3&u=c267179bdce8ef8d2bcb303ae7ae20167e247972&s=400" alt="User profile image" />
            <div className="user-info">
              <span className="user-name">Priyanshu Jindal</span>
              <span className="user-time">2 days ago</span>
            </div>
          </div>

          <div className="post-content">
            <div className="content-image">
              <img src="http://lorempixel.com/600/400/" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <script src="/js/user.js"></script>
  </Layout>
);

export default User;

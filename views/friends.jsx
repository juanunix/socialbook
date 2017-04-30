import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';
import Friend from './partials/friend';

const Friends = ({ friends }) => (
  <Layout title="Friends" className="friends">
    <Navbar />
    <div className="friends main">
      <section className="user-info">
        <span className="user-name">Priyanshu Jindal</span>
        <span className="user-friends-key">Friends List</span>
      </section>
      <section className="friends-list">
        {friends.map(friend => (
          <Friend key={friend.id} friend={friend}/>
        ))}
      </section>
    </div>
  </Layout>
);

export default Friends;

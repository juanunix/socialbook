import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';
import Friend from './partials/friend';

const friends = [
  {
    id: 1,
    avatar: 'https://api.adorable.io/avatars/48/q',
    name: 'Random Person 1'
  },
  {
    id: 2,
    avatar: 'https://api.adorable.io/avatars/48/w',
    name: 'Random Person 2'
  },
  {
    id: 3,
    avatar: 'https://api.adorable.io/avatars/48/e',
    name: 'Random Person 3'
  },
]

const Friends = () => (
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

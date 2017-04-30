import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';
import Friend from './partials/friend';

const SearchResult = ({ results }) => (
  <Layout title="Friends" className="friends">
    <Navbar />
    <div className="friends main">
      <section className="friends-list">
        {results.map(friend => (
          <Friend key={friend.id} friend={friend}/>
        ))}
      </section>
    </div>
  </Layout>
);

export default SearchResult;

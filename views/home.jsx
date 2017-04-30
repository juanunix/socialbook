import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';
import Post from './partials/post';

const Home = ({ posts }) => (
  <Layout title="Home" className="home">
    <Navbar />
    <div className="home main">
      <form className="post-new" action="post.html">
        <div className="post-input">
          <input type="text" placeholder="What you thinking?"/>
          <img id="photo-camera-icon" src="icons/ic_photo_camera_black_36px.svg" alt="Photo camera icon" className="photo-camera-icon" />
          <input id="post-input-photo" type="file" accept="image/*" hidden />
        </div>
        <div className="post-button">
          <button>
            Post
          </button>
        </div>
      </form>
      <section className="posts-list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </div>
    <script src="js/home.js"></script>
  </Layout>
);

export default Home;

import React from 'react';
import Layout from './partials/layout';
import Navbar from './partials/navbar';
import Post from './partials/post';

const POSTS = [
  {
    id: 1,
    user: {
      avatar: 'https://api.adorable.io/avatars/48/abott@adorable.io.png',
      name: 'Priyanshu Jindal',
    },
    created_at: '5 hours ago',
    content:{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
    },
  },
  {
    id: 2,
    user: {
      avatar: 'https://api.adorable.io/avatars/48/abott@adorable.png',
      name: 'Random User',
    },
    created_at: '9 Hours ago',
    content: {
      image: 'http://lorempixel.com/600/400/'
    }
  },
  {
    id: 3,
    user: {
      avatar: 'https://api.adorable.io/avatars/48/xwxwxwxwxw',
      name: 'Another user'
    },
    created_at: 'Yesterday at 22:00',
    content: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
      image: 'http://lorempixel.com/600/600/'
    }
  }
]

const Home = ({ posts=POSTS }) => (
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
  </Layout>
);

export default Home;

import React from 'react';

const Post = ({ post }) => (
  <div className="post" onclick="window.location='post.html';">
    <div className="post-user">
      <a href="user.html">
        <img className="avatar" src={post.user.avatar} alt="User profile image" />
      </a>
      <div className="user-info">
        <a href="user.html" className="user-name">{post.user.name}</a>
        <span className="user-time">{post.created_at}</span>
      </div>
    </div>
    <div className="post-content">
      {post.content.text &&
        <span className="content-text">
          {post.content.text}
        </span>
      }
      {post.content.image &&
        <div className="content-image">
          <img src={post.content.image} />
        </div>
      }
    </div>
  </div>
);

export default Post;

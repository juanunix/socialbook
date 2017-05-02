import React from 'react';
import moment from 'moment';

const Post = ({ post }) => (
  <div className="post" onclick="window.location='post.html';">
    <div className="post-user">
      <a href={`user/${post.user.username}`}>
        {post.user.avatar_id &&
          <img className="avatar" src={`/image/${post.user.avatar_id}`} alt="User profile image" />
        }
      </a>
      <div className="user-info">
        <a href={`user/${post.user.username}`} className="user-name">{post.user.name}</a>
        <span className="user-time">{moment(post.created_at).fromNow()}</span>
      </div>
    </div>
    <a href={`/post/${post.id}`} className="post-content">
      {post.content &&
        <span className="content-text">
          {post.content}
        </span>
      }
      {post.image_id &&
        <div className="content-image">
          <img src={`/image/${post.image_id}`} />
        </div>
      }
    </a>
  </div>
);

export default Post;

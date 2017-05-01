import React from 'react';

const Friend = ({ friend }) => (
  <div className="friend-item">
    <div className="friend-info">
      <img className="avatar" src={friend.avatar} alt="" />
      <span className="user-name">{friend.name}</span>
    </div>
    <div className="friend-actions">
      <button>
        <img src="/icons/ic_message_white_36px.svg" />
      </button>
      <form method="post" action="/user/1/friends/2">
        <button>
          <img src="/icons/ic_add_white_36px.svg" />
        </button>
      </form>
    </div>
  </div>
);

export default Friend;

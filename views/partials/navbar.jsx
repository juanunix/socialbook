import React from 'react';

const Navbar = () => (
  <div className="header" id="header">
    <nav>
      <div className="nav-links">
        <a href="/" className="nav-link active home-link">
          Home
        </a>
        <a href="/messages" className="nav-link">
          Messages
        </a>
        <a href="/" className="home-icon home-link logo icon">
          <img src="https://placeholdit.imgix.net/~text?txtsize=6&txt=50%C3%9750&w=50&h=50" alt="Socialbook logo" />
        </a>
      </div>
      <div className="right-icons">
        <form className="search-input" action="search.html" method="get">
          <input type="text" placeholder="Search" id="search-input" name="search"/>
          <div className="search-icon icon">
            <img src="/icons/ic_search_white_36px.svg" alt="Search icon" id="search-icon-white" />
            <img src="/icons/ic_search_black_36px.svg" alt="Search icon" id="search-icon-black" />
            <img src="/icons/ic_close_black_36px.svg" alt="Search icon" id="search-icon-close" />
          </div>
        </form>
        <div className="profile-links">
          <div className="profile-icon logo icon" id="profile-icon">
            <img src="https://avatars0.githubusercontent.com/u/10034872?v=3&u=c267179bdce8ef8d2bcb303ae7ae20167e247972&s=400" alt="Profile image" />
          </div>
          <div className="profile-expandable">
            <div id="profile-overlay"></div>
            <div className="profile-expanded">
              <a href="profile.html" className="profile-info">
                <img className="avatar" src="https://avatars0.githubusercontent.com/u/10034872?v=3&u=c267179bdce8ef8d2bcb303ae7ae20167e247972&s=400" alt="Profile image" />
                <span>Priyanshu Jindal</span>
              </a>
              {['Messages', 'Friends', 'Settings', 'Logout', 'Requests'].map(link => (
                <div key={link} className="profile-actions">
                  <a href={'/' + link.toLowerCase()}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;

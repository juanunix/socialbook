import React from 'react';

const Friends = () => (
    <html>
    <head>
        <title>
            Socialbook | Friends
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/styles.css" type="text/css"/>
    </head>
    <body>
    <div className="header" id="header">
        <nav>
            <div className="nav-links">
                <a href="home.html" className="nav-link home-link">
                    Home
                </a>
                <a href="messages.html" className="nav-link active">
                    Messages
                </a>
                <a href="home.html" className="home-icon home-link logo icon">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=6&txt=50%C3%9750&w=50&h=50" alt="Socialbook logo" />
                </a>
            </div>
            <div className="right-icons">
                <form className="search-input" action="search.html" method="get">
                    <input type="text" placeholder="Search" id="search-input" name="search"/>
                    <div className="search-icon icon">
                        <img src="icons/ic_search_white_36px.svg" alt="Search icon" id="search-icon-white" />
                        <img src="icons/ic_search_black_36px.svg" alt="Search icon" id="search-icon-black" />
                        <img src="icons/ic_close_black_36px.svg" alt="Search icon" id="search-icon-close" />
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
                            <div className="profile-actions">
                                <a href="messages.html">Messages</a>
                            </div>
                            <div className="profile-actions">
                                <a href="friends.html">Friends</a>
                            </div>
                            <div className="profile-actions">
                                <a href="settings.html">Settings</a>
                            </div>
                            <div className="profile-actions">
                                <a href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div className="friends main">
        <section className="user-info">
            <span className="user-name">Priyanshu Jindal</span>
            <span className="user-friends-key">Friends List</span>
        </section>
        <section className="friends-list">
            <div className="friend-item">
                <div className="friend-info">
                    <img className="avatar" src="https://api.adorable.io/avatars/48/q" alt="" />
                    <span className="user-name">Random Person 1</span>
                </div>
                <div className="friend-actions">
                    <button>
                        <img src="icons/ic_message_white_36px.svg" />
                    </button>
                    <button>
                        <img src="icons/ic_add_white_36px.svg" />
                    </button>
                </div>
            </div>
            <div className="friend-item">
                <div className="friend-info">
                    <img className="avatar" src="https://api.adorable.io/avatars/48/w" alt="" />
                    <span className="user-name">Random Person 2</span>
                </div>
                <div className="friend-actions">
                    <button>
                        <img src="icons/ic_message_white_36px.svg" />
                    </button>
                    <button>
                        <img src="icons/ic_add_white_36px.svg" />
                    </button>
                </div>
            </div>
            <div className="friend-item">
                <div className="friend-info">
                    <img className="avatar" src="https://api.adorable.io/avatars/48/e" alt="" />
                    <span className="user-name">Random Person 3</span>
                </div>
                <div className="friend-actions">
                    <button>
                        <img src="icons/ic_message_white_36px.svg" />
                    </button>
                    <button>
                        <img src="icons/ic_add_white_36px.svg" />
                    </button>
                </div>
            </div>
        </section>
    </div>
    <script src="js/global.js"></script>
    </body>
    </html>
);

export default Friends;

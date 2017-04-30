import React from 'react';

const Home = () => (
    <html>
    <head>
        <title>
            Socialbook | Home
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/styles.css" type="text/css"/>
    </head>
    <body>
    <div className="header" id="header">
        <nav>
            <div className="nav-links">
                <a href="home.html" className="nav-link active home-link">
                    Home
                </a>
                <a href="messages.html" className="nav-link">
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
            <div className="post" onclick="window.location='post.html';">
                <div className="post-user">
                    <a href="user.html">
                        <img className="avatar" src="https://api.adorable.io/avatars/48/abott@adorable.io.png" alt="User profile image" />
                    </a>
                    <div className="user-info">
                        <a href="user.html" className="user-name">Priyanshu Jindal</a>
                        <span className="user-time">5 hours ago</span>
                    </div>
                </div>
                <div className="post-content">
                    <span className="content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    </span>
                </div>
            </div>

            <div className="post" onclick="window.location='post.html';">
                <div className="post-user">
                    <a href="user.html">
                        <img className="avatar" src="https://api.adorable.io/avatars/48/abott@adorable.png" alt="User profile image" />
                    </a>
                    <div className="user-info">
                        <a href="user.html" className="user-name">Random User</a>
                        <span className="user-time">9 hours ago</span>
                    </div>
                </div>

                <div className="post-content">
                    <div className="content-image">
                        <img src="http://lorempixel.com/600/400/" />
                    </div>
                </div>
            </div>

            <div className="post" onclick="window.location='post.html';">
                <div className="post-user">
                    <a href="user.html">
                        <img className="avatar" src="https://api.adorable.io/avatars/48/xwxwxwxwxw" alt="User profile image" />
                    </a>
                    <div className="user-info">
                        <a href="user.html" className="user-name">Another User</a>
                        <span className="user-time">1 day ago</span>
                    </div>
                </div>

                <div className="post-content">
                    <span className="content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    </span>
                    <div className="content-image">
                        <img src="http://lorempixel.com/600/600/" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <script src="js/global.js"></script>
    <script src="js/home.js"></script>
    </body>
    </html>
);

export default Home;

import React from 'react';

const Layout = ({children, title, className}) => (
    <html>
    <head>
      <title>
          Socialbook | {title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/styles.css" type="text/css"/>
    </head>
    <body className={className}>
      {children}
    <script src="js/global.js"></script>
    <script src="js/home.js"></script>
    </body>
    </html>
);

export default Layout;

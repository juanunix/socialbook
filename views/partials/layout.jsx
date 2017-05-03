import React from 'react';

const Layout = ({children, title, className, scripts}) => (
  <html>
    <head>
      <title>
          Socialbook | {title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/styles.css" type="text/css"/>
    </head>
    <body className={className}>
      {children}
      {scripts &&
        <script src="/js/global.js"></script>
      }
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script dangerouslySetInnerHTML={{__html: `
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: ${process.env.ADSENSE_KEY || 'not found'},
          enable_page_level_ads: true
        });
      `}} />
    </body>
  </html>
);

Layout.defaultProps = {
  scripts: true,
}

export default Layout;

const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Blake Perdue – Product leader, designer and developer',
    description: 'I like to create things. This is a collection of some  of my recent projects.',
    author: '@blakeperdue',
    siteUrl: 'https://www.blakeperdue.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Blake Perdue',
        start_url: '/',
        background_color: '#FF4D47',
        theme_color: '#FF4D47',
        display: 'browser',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/colors.sass";`,
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles'),
        images: path.join(__dirname, 'src/images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    { // must go after SASS plugin!!
      resolve: 'gatsby-plugin-minify-classnames',
      // options: {
      //   dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
      //   enableOnDevelopment: false,
      // },
    },
  ],
}

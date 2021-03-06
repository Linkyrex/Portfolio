module.exports = {
  siteMetadata: {
    title: "Portfolio",
    author: "Tobias Allmendinger",
    description: ""
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Portfolio',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

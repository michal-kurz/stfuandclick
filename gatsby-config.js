module.exports = {
  siteMetadata: {
    title: 'STFU and click!',
    description: "It's really simple, you just have to click as fast as you can!",
    author: '@michal-kurz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        start_url: '/', // eslint-disable-line @typescript-eslint/camelcase
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-emotion',
    `gatsby-plugin-offline`,
  ],
}

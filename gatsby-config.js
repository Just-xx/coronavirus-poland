module.exports = {
  siteMetadata: {
    title: `Koronawirus liczba zarażonych`,
    description: `Sprawdź aktualną liczbę zarażonych koronawirusem na terenie polski.`,
    author: `kubiprod`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FF3D3D`,
        theme_color: `#FF3D3D`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}

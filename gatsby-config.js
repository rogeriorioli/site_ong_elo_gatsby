module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`membros`,
        path: `${__dirname}/src/images/members`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`parceiros`,
        path: `${__dirname}/src/images/parceiros`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`camisetas`,
        path: `${__dirname}/src/images/camisetas`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`slidehome`,
        path: `${__dirname}/src/images/slidehome`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`acaopascoa`,
        path: `${__dirname}/src/images/pascoa`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`acaoinverno`,
        path: `${__dirname}/src/images/inverno`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`acaocriancas`,
        path: `${__dirname}/src/images/diadascriancas`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`slideactions`,
        path: `${__dirname}/src/images/slideactions`
      },
    },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Quicksand\:400,500,700` 
          ],
          display: 'swap'
        }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

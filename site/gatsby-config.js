/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    description: `Blazing fast modern site generator for React`,
    longdescription: `Blazing fast modern site generator for React from the Jamstck conference 2020`,
    author: `Craig`,
    siteUrl: `https://www.gatsbyjs.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/shoe.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
  ],
};

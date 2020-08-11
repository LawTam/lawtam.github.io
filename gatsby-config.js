/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Lawrence Tam Portfolio`,
    description: `San Francisco based designer and developer`,
    author: `Lawrence Tam`,
  },
  pathPrefix: "/",
  plugins: [
    // Increasing performance
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, // compress images
    `gatsby-plugin-netlify`, // HTTP static asset caching
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://fonts.gstatic.com', 'https://fonts.googleapis.com'],
      },
    },

    // Styling
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Federant', 'Open Sans', 'Oxygen', 'Numans']
        }
      }
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Portfolio of Lawrence Tam`,
        short_name: `Law Tam Portfolio`,
        description: `contains an about, projects, and contact section`,
        lang: `en`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/2D/lawtam_logo.svg`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
}

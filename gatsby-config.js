/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  /* Your site config here */
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
      MiniCssExtractPlugin: {
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      },
    },
  ],
}

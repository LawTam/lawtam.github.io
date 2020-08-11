# Design Document 

## Table of Contents
- Set up
- Top Navigation Bar
- Home Page
- Projects Page
- About Me Page
- Contact Page
- Tricks I learned

## Set Up
### Technologies Used
- React/Node
- Gatsby, a React extension
- tons of Gatsby/React plugins. I explain a couple eseential ones later.

### Style guide: 
- accent color: #d12a2c, #DF4A47
- text color: #000000
- accent font: federant
- text font: open sans

### Gatsby/React plugins
- gatsby-sass
- Suspense (!! DOESNT WORK FOR GATSBY YET, alternative: react-loadable)
    - alternative: @uploadcare/client-suspense (also does not work)
    - https://github.com/uploadcare/client-suspense 
- gatsby-plugin-manifest (configures Gatsby to create a manifest.webmanifest file on every site build that satify PWA)
- gastby-plugin-offline
- React Helmet and gatsby-plugin-react-helmet
    - https://www.gatsbyjs.org/tutorial/part-eight/ 
- https://www.gatsbyjs.org/docs/using-gatsby-image/
- gatsby-plugin-netlify vs gatsby-plugin-s3
- gatsby preconnect


## Top Navigation Bar
__Features a logo and navigation links. The top nav will be included in each page.__
* logo
    - currently svg
    - considering changing logo to threeJS using React-Three-Fiber
* nav links
    - Projects, About, Contact
    - created with Gatsby Link API
* WIP (dynamic top nav hook)
    - top nav will change colors according to the screen currently displayed

## Home Page
* removed threeJS logo using React-Three-Fiber
    - guide: https://www.youtube.com/watch?v=1rP3nNY2hTo 
    - added plane
    - added shadows
    - blender exported glb
    - added lighting
    - added fog
* includes TopNav hook
* includes PersonalIntro hook
* includes Lawrence image
    - display only on media query for <= laptops (1440px)
* includes Line Accents
    - display only on media query for <= laptops (1440px)
* includes SocialMedia hook



## Tricks I Learned
### Styling
* use `font-display` to make sure font styling are rendered while the rest of the project is loading.

### 
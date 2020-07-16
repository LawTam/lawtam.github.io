# Design Document

## Introduction
This design document describes the design of Lawrence's online portfolio that will be built using React and Gatsby. 

## Table of Contents
0. Set up
1. Top Navigation Bar
2. Home Page
3. Projects Page
4. About Me Page
5. Contact Page

## Set Up
### Style guide: 
- accent color: #d12a2c, #DF4A47
- text color: #000000
- accent font: federant
- text font: open sans

### Gatsby/React plugins
- gatsby-sass
- Suspense



## 1. Top Navigation Bar
__Features a logo and navigation links. The top nav will be included in each page.__
* logo
    - currently svg
    - considering changing logo to threeJS using React-Three-Fiber
* nav links
    - Projects, About, Contact
    - created with Gatsby Link API
* WIP (dynamic top nav hook)
    - top nav will change colors according to the screen currently displayed

## 2. Home Page
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




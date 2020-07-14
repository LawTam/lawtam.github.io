import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import topnavStyles from "./topnav.module.css"
import lawtam_logo from "../../assets/2D/lawtam_logo.svg"

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
`;

export default function TopNav(props) {
  return (
    <>
    <div className={topnavStyles.container}>
      <Logo src={lawtam_logo}/>
      <div idName={topnavStyles.links}>
        <Link to="/about/" className={topnavStyles.link}>ABOUT</Link>
        <Link to="/projects/" className={topnavStyles.link}>PROJECTS</Link>
        <Link to="/contact/" className={topnavStyles.link}>CONTACT</Link>
      </div>
    </div>
    </>
  )
}
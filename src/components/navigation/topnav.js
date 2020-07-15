import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import topnavStyles from "./topnav.module.scss"
import lawtam_logo from "../../assets/2D/lawtam_logo.svg"

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
`;

const StyledLink = styled(props => <Link {...props} />)`
  :hover{
    color: #d12a2c;
    transition: 0.2s;
  }
`;

export default function TopNav(props) {
  return (
    <>
    <div className={topnavStyles.container}>
      <Logo src={lawtam_logo}/>
      <div idName={topnavStyles.links}>
        <StyledLink 
          to="/about/" 
          className={topnavStyles.link}>
            ABOUT
        </StyledLink>
        
        <StyledLink 
          to="/projects/" 
          className={topnavStyles.link}>
            PROJECTS
        </StyledLink>
        
        <StyledLink 
          to="/contact/" 
          className={topnavStyles.link}>
            CONTACT
        </StyledLink>
      </div>
    </div>
    </>
  )
}
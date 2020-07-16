import React, {useState} from "react"
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
  const [isHome, setHome] = useState(true);

  return (
    <>
    <div className={topnavStyles.container}>
      <Logo src={lawtam_logo}/>
      <div id={topnavStyles.links}>
        <StyledLink 
          to="/about/" 
          onClick={() => { setHome(false); console.log("about page")}}
          className={topnavStyles.link}>
            ABOUT
        </StyledLink>
        
        <StyledLink 
          to="/projects/" 
          onClick={() => { setHome(false); console.log("projects page")}}
          className={topnavStyles.link}>
            PROJECTS
        </StyledLink>
        
        <StyledLink 
          to="/contact/" 
          onClick={() => { setHome(false); console.log("contact page")}}
          className={topnavStyles.link}>
            CONTACT
        </StyledLink>
      </div>
    </div>
    </>
  )
}
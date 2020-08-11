import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../../styles/components/_sidenav.scss"

import SocialMedia from "../../components/navigation/SocialMedia"

const SideNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 20px;
  z-index: 2;
`;

const StyledLink = styled(props => <Link {...props} />)`
  font-family: Numans; 
  margin-bottom: 20px;
  padding: 10px;
  font-size: 10px;
  text-decoration: none;

  :hover{
    color: #d12a2c;
    transition: 0.2s;
  }
`;

export default function NavBar(props) {
  const [activeSlide, setSlide] = useState("introduction");
  const handleClick = slide => {
    setSlide(slide);
  };

  return (
    <>
    <div style={{position: "fixed", height: "100vh"}}>
      <SideNav>
          <StyledLink 
            to="/" 
            onClick={() => handleClick("introduction")}
            className={ activeSlide==="introduction" ? 'active' : 'inactive'}
            >
              INTRODUCTION
          </StyledLink>
          
          <StyledLink 
            to="/" 
            onClick={() => handleClick("projects")}
            className={ activeSlide==="projects" ? 'active' : 'inactive'}
            >
              PROJECTS
          </StyledLink>
          
          <StyledLink
            to="/" 
            onClick={() => handleClick("process")}
            className={ activeSlide==="process" ? 'active' : 'inactive'}
            >
              PROCESS
          </StyledLink>

          <StyledLink 
            to="/" 
            onClick={() => handleClick("about")}
            className={ activeSlide==="about" ? 'active' : 'inactive'}
            >
              ABOUT ME
          </StyledLink>

          <StyledLink 
            to="/" 
            onClick={() => handleClick("contact")}
            className={ activeSlide==="contact" ? 'active' : null}
          >
              CONTACT
          </StyledLink>
      </SideNav>

      <SocialMedia />
    </div>
    </>
  )
}
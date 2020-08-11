import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import lawtam_logo from "../../assets/2D/lawtam_logo.svg"

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  padding-bottom: 20px;
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
    <div className="container">
      <Logo src={lawtam_logo} alt="logo"/>
      <div >
        <StyledLink 
          to="/" 
          onClick={() => { setHome(false); console.log("about page")}}
          >
            ABOUT
        </StyledLink>
        
        <StyledLink 
          to="/" 
          onClick={() => { setHome(false); console.log("projects page")}}
          >
            PROJECTS
        </StyledLink>
        
        <StyledLink 
          to="/" 
          onClick={() => { setHome(false); console.log("contact page")}}
         >
            CONTACT
        </StyledLink>
      </div>
    </div>
    </>
  )
}
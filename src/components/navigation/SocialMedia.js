import React from "react"
import styled from "styled-components"

// Stylesheets
import {device} from "../../components/misc/Device"

const Social = styled.div`


  @media ${device.laptop} {
    display: initial;
  }
`;

export default function SocialMedia() {
  return(
    <>
    <Social>
      <div id="social_media" className="footer-social-links container fixed">
        <a href="https://www.linkedin.com/in/law-tam/" title="LinkedIn" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
        <a href="https://dribbble.com/lawtam" title="Dribbble" target="_blank" rel="noreferrer"><i className="fa fa-dribbble"></i></a>
        <a href="https://github.com/lawtam" title="Github" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
      </div>
    </Social>

    </>
  )
}
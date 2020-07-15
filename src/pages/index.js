import React, { useEffect } from "react"
import styled from "styled-components"
import Parallax from "parallax-js"

import TopNav from "../components/navigation/TopNav"
import Introduction from '../components/PersonalIntro'
import SocialMedia from "../components/navigation/SocialMedia"
import law_blkwht from "../assets/2D/lawrence_fullbody_blkwht.png"

const Page = styled.div`
  color: black;
  font-family: "Open Sans";
  font-size: 16px;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Lawrence = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin: 0;
  height: 100vh;
  transform: rotate(5deg);
  width: auto;
  z-index: -5;
`;

export default function Home() {
  useEffect(() => {
    var scene = document.getElementById('parallax_scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: true,
      // invertX: false,
      // invertY: false,
    });
  });

  return (
    <>
      <Page id="Home" className="noselect">
        <TopNav />
        
        <div id="parallax_scene">
          <div data-depth="0.1">
          <Introduction />
          </div>
          <div data-depth="0.2" className="fullscreen">
            <Lawrence src={law_blkwht}/>
          </div>
        </div>
        
        <SocialMedia />
      </Page>
    </>
  )
}

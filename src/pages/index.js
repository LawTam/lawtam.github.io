import React, { useRef, useState, Suspense, useEffect, } from "react"
import styled from "styled-components"
import Parallax from "parallax-js"
import Helmet from 'react-helmet'

// Stylesheets
import {device} from "../components/misc/Device"

// Components
import TopNav from "../components/navigation/TopNav"
import SideNav from "../components/navigation/SideNav"
import Introduction from '../components/PersonalIntro'


// Assets
import welcomeStamp from '../assets/models/welcome.glb'
import law_blkwht from "../assets/2D/law_blur.webp"
import lineAccent from '../assets/2D/line_accent.svg'
import lineAccentThin from '../assets/2D/line_accent_thin.svg'

const Page = styled.div`
  color: black;
  font-size: 18px;
  height: 900px;
  overflow-y: hidden;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: start;
`;

const LawrenceWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: -200px;
`;

const Lawrence = styled.img`
  display: none;

  @media ${device.laptop} {
    display: block;
    margin: 0;
    height: 100vh;
    transform: rotate(1deg);
    width: auto;
    z-index: -2;
  }
`;

const LineAccent = styled.img`
  display: none;

  @media ${device.laptop} {
    display: initial;
    position: absolute;
    top: -10vh;
    height: 150vh;
    width: auto;
    z-index: 1;
  }
`;

export default function Home() {
  useEffect(() => {
    var scene = document.getElementById('parallax_scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: true,
      invertX: false,
      invertY: false,
    });
  });

  return (
    <>
      <Helmet defer={false}>
          <meta charSet="utf-8" 
              name="description" 
              content="Lawrence is a designer and developer from San Francisco.
                        This portfolio showcases his previous experiences with
                        design and development, as well as a couple cool web tricks
                        he picked up along the way like threeJS and parallax."/>
          <title> Lawrence Tam | Home </title>
          <link rel="canonical" href="http://lawtam.github.io" />
      </Helmet>

      <Page id="Home" className="noselect">
          <SideNav />
          <Introduction/>

        <div id="parallax_scene" style={{position:'absolute', width: '100%'}}>
          <div data-depth="0.02" className="fullscreen">
            <LineAccent alt="lineaccent1" style={{right: '30vh', top: '-30vh', transform:'rotate(30deg)'}} src={lineAccent}/>
          </div>

          <div data-depth="0.02" className="fullscreen">
            <LineAccent alt="lineaccent2" style={{height:'100vh',left:'10vw', top: '35vh', transform:'rotate(-60deg)'}} src={lineAccent}/>
          </div>
          
          <div data-depth="0.05" className="fullscreen">
            <LawrenceWrapper>
              <Lawrence alt="image of the author" src={law_blkwht}/>
            </LawrenceWrapper>
            
          </div>

          <div data-depth="0.05" className="fullscreen">
            
          </div>
        </div>
      </Page>
    </>
  )
}
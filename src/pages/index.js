import React, { useRef, useState, Suspense, useEffect, } from "react"
import styled from "styled-components"
import Parallax from "parallax-js"
import Helmet from 'react-helmet'

// Stylesheets
import indexStyle from "./index.module.css"
import {device} from "../components/misc/Device"

// ThreeJS
import { Canvas, Dom} from "react-three-fiber"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls} from 'drei'

// Components
import TopNav from "../components/navigation/TopNav"
import Introduction from '../components/PersonalIntro'
import SocialMedia from "../components/navigation/SocialMedia"

// Assets
import welcomeStamp from '../assets/models/welcome.glb'
import law_blkwht from "../assets/2D/lawrence_blkwht.webp"
import lineAccent from '../assets/2D/line_accent.svg'
import lineAccentThin from '../assets/2D/line_accent_thin.svg'

const Page = styled.div`
  color: black;
  font-size: 16px;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  font-family: "Open Sans";
`;

const Lawrence = styled.img`
  display: none;

  @media ${device.laptopL} {
    display: initial;
    position: absolute;
    bottom: -30vh;
    right: -12vh;
    margin: 0;
    height: 100vh;
    transform: rotate(1deg);
    width: auto;
    z-index: 2;
  }
`;

const LineAccent = styled.img`
  display: none;

  @media ${device.laptopL} {
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
      // invertX: false,
      // invertY: false,
    });
  });

  return (
    <>
      <Helmet defer={false}>
          <meta charSet="utf-8" />
          <title> Lawrence Tam | Home </title>
          <link rel="canonical" href="http://lawtam.github.io" />
      </Helmet>

      <Page id="Home" className="noselect">
        <Suspense>
          <TopNav />
          <Introduction/>
        </Suspense>

        <div id="parallax_scene" style={{position:'absolute', top:'0', width: '100%'}}>
          <Suspense>
            <div data-depth="0.05" className="fullscreen">
              <LineAccent alt="lineaccent" style={{right: '12vh', transform:'rotate(5deg)'}} src={lineAccent}/>
            </div>

            <div data-depth="0.05" className="fullscreen">
              <LineAccent alt="lineaccent" style={{left: '12vh', transform:'rotate(-40deg)'}} src={lineAccent}/>
            </div>
          </Suspense>

          
          <div data-depth="0.1" className="fullscreen">
            <Lawrence alt="image of the author" src={law_blkwht}/>
          </div>

          <div data-depth="0.05" className="fullscreen">
            
          </div>
        </div>
        
        <SocialMedia />

      </Page>
    </>
  )
}

// https://github.com/react-spring/react-three-fiber/blob/master/examples/src/demos/GltfPlanet.js
const WelcomeLogo = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load(welcomeStamp, setModel);
  }, [])
  //console.log(model);
  return null;
}

const Plane = () => (
  <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100,100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
)

const Box = props => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  //useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  )
}
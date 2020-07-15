import React, { useRef, useState, Suspense, useEffect  } from "react"
import styled from "styled-components"
import Parallax from "parallax-js"

// ThreeJS
import { Canvas, Dom} from "react-three-fiber"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls} from 'drei'
import welcomeStamp from '../assets/models/welcome.glb'

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
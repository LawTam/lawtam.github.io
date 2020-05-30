import React, { useRef, useState } from "react"
import { Canvas, useLoader, useFrame, useThree, extend} from "react-three-fiber"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import welcomeStamp from '../assets/welcome.glb'

import Header from "../components/header"
import TopNav from "../components/navigation/topnav"

export default function Home() {
  return (
    <div style={{ color: `purple`, overflowY: 'hidden'}}>
      <TopNav />
      <Header headerText="Welcome to my portfolio!" />
      <div> This version 2 of the portfolio is still in construction. It will be a React/Gatsby App featuring three.js, a 3d graphics API. Stay tuned! </div>
      <Canvas style={{position: 'absolute', top: '0', height: '100vh', zIndex: '-1' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

const Logo = props => {
  const gltf = useLoader(GLTFLoader, welcomeLogo, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.decoderPath = '/draco-gltf/';
    loader.setDRACOLoader(dracoLoader);
  });
}

const Box = props => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  )
}


import React, { useRef, useState, Suspense, useEffect } from "react"
import { Canvas, Dom, useLoader, useFrame, useThree, extend} from "react-three-fiber"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls, draco } from 'drei'
import welcomeStamp from '../assets/models/welcome.glb'

import Header from "../components/header"
import TopNav from "../components/navigation/TopNav"

export default function ReactThreeFiberTest() {
  return (
    <div style={{ color: `purple`, overflowY: 'hidden'}}>
      <TopNav />
      <Header headerText="Welcome to my portfolio!" />
      <div> This version 2 of the portfolio is still in construction. It will be a React/Gatsby App featuring three.js, a 3d graphics API. Stay tuned! </div>
      <Canvas 
        style={{position: 'absolute', top: '0', height: '100vh', zIndex: '-1' }}
        camera= {{ position:[0, 0, 5] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
          <fog attach="fog" args={["white", 10, 20]}/>
          <spotLight position={[10, 10, 10]} castShadow/>
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Plane />
          <WelcomeLogo />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

// https://github.com/react-spring/react-three-fiber/blob/master/examples/src/demos/GltfPlanet.js
const WelcomeLogo = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load(welcomeStamp, setModel);
  })
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


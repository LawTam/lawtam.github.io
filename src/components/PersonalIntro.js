import React from "react"
import styled from "styled-components"

import logo from "../assets/2D/lawtam_logo.svg"
import diamond from "../assets/2D/diamond.svg"

const Intro = styled.div`
  position: relative;
  width: 550px;
  padding-right: 20vw;
  padding-top: 100px;
`;

const Logo = styled.img`
  height: 60px;
  padding-right: 20px;
`;

const Diamond = styled.img`
  height: 20px;
  margin-top: 100px;
  margin-right: 490px;
`;

export default function Personal_Intro() {
  return(
    <>
      <div id="personal_intro" className="container">
        <Intro>
          <div className="flex-row-container">
            <Logo src={logo} alt="author's logo"></Logo>
            <h1>Lawrence Tam.</h1>
          </div>

          <div className="media">
            <Diamond src={diamond} alt="diamond"></Diamond> 
          </div>
          
          <div className="body">
            <h2>- INTRODUCTION</h2>
            <h3> Hi, I'm Lawrence! I design and develop memorable user experiences.</h3>
            <p> I'm a Computer Science B.S. c/o 2020 from UC Santa Cruz, where I switched out of game design to focus
              on computer graphics and UI/UX design.
              <br></br><br></br>
              Welcome to my website! Here you'll find my past projects and get to learn a little bit about me and how I do things.
            </p>
          </div>
        </Intro>
      </div>
    </>
  )
}

/*
Hey, I'm Lawrence, <br></br>
          a designer and developer <br></br>
          living in San Francisco.

                    I'm a designer and developer based in San Francisco.
          Welcome to my portfolio!
          */
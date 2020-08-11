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
            <h3> Hey! I design and develop memorable user experiences.</h3>
            <p> I enjoy working with people to design solutions and actually bring them to life! I have
              experience across design and front-end dev from user interviews, to product design,
              to software development.
              <br></br><br></br>
              Welcome to my website! Click the button below to learn more about what I do.
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
import React from "react"
import styled from "styled-components"
// Stylesheets
import {device} from "../components/misc/Device"

import logo from "../assets/2D/lawtam_logo.svg"
import diamond from "../assets/2D/diamond.svg"

const Intro = styled.div`
  position: relative;
  padding-top: 10vh;

  @media ${device.laptop}{
    padding-right: 20vw;
  }
`;

const Logo = styled.img`
  height: calc(1.8rem + 4vmin);
  padding-right: 20px;
  padding-top: 5px;
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
          <div className="body">
            <h2>- INTRODUCTION</h2>
            <h3> Hi, I'm Lawrence and I create websites and web apps.</h3>
            <p> I have experience with product design, front-end dev, and entrepreneurship. Somehow, I found a way to combine my passions as a product manager!
              <br></br><br></br>
              Currently, I'm a Product Manager at INPEL, an innovative eLearning startup. I wish I could tell you more, but it's secret! However, I can tell you more about myself as you explore my site.
              <br></br><br></br>
              Update: Site under reconstruction!
            </p>
          </div>

        </Intro>
      </div>
    </>
  )
}

/*
          <div className="body">
            <h2>- INTRODUCTION</h2>
            <h3> Hi, I'm Lawrence! I design and develop awesome web apps.</h3>
            <p> I love the web! I'm into product design, UI/UX design, 
              and front-end development. For me it's hard to pick one, so I do them all!
              <br></br><br></br>
              Welcome to my website! Here you'll find my past projects and get to learn about me and how I do things.
            </p>
          </div>

          
Hey, I'm Lawrence, <br></br>
          a designer and developer <br></br>
          living in San Francisco.

                    I'm a designer and developer based in San Francisco.
          Welcome to my portfolio!
          */
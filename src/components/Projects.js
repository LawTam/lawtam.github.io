import React from "react"
import styled from "styled-components"

import HKUST_logo from "../assets/2D/HKUST/HKUST.jpg"
import diamond from "../assets/2D/diamond.svg"

const Project = styled.div`
  position: relative;
  max-width: 960px;
  padding-right: 20vw;
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

const Body = styled.div`
  position: relative;
  top: -30px;
  padding-left: 280px;
  display: flex;
  flex-direction: column;
`;

export default function Projects() {
  return(
    <>
      <div id="personal_Project" className="container">
        <Project>
          <div className="media">
            <Diamond src={diamond} alt="diamond"></Diamond> 
          </div>
          
          <Body>
            <h2>- PROJECTS</h2>
            <div className="container">
              <div className="flex-row-container">
                <div className="img-container">
                  <img src={HKUST_logo}></img>
                </div>
                <div className="project-description">
                  <h4>The Hong Kong University of Science and Technology</h4>
                  <h2>UX Design Student | August 2019 - December 2019</h2>
                  <p> Used design thinking methodology to tackle some hot topics in
                    human-computer interaction.
                  </p>
                </div>
              </div>
            </div>
          </Body>

        </Project>
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
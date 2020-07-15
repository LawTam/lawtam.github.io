import React from "react"
import styled from "styled-components"

const IntroText = styled.div`
  font-family: 'Federant', cursive;
  font-size: 64px;
  color: #d12a2c;
  word-spacing: 3px;
`;

export default function Personal_Intro() {
  return(
    <>
      <div id="personal_intro" className="container">
        <IntroText>
          Hey, I'm Lawrence ~
        </IntroText>
        <div>
          I'm a designer and developer based in San Francisco.
          Welcome to my portfolio!
        </div>
      </div>

    </>
  )
}

/*
Hey, I'm Lawrence, <br></br>
          a designer and developer <br></br>
          living in San Francisco.
          */
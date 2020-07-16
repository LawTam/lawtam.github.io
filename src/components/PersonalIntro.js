import React from "react"
import styled from "styled-components"

const IntroText = styled.div`
  font-family: 'Federant', cursive;
  font-size: 40px;
  color: #DF4A47;
  word-spacing: 3px;
  margin-top: 250px;
`;

export default function Personal_Intro() {
  return(
    <>
      <div id="personal_intro" className="container">
        <IntroText>
          Hi I'm Lawrence, <br></br>
          a designer and developer <br></br>
          living in San Francisco.
        </IntroText>
        <div>
          <br></br>
          Note: This website is still under construction!
        </div>
        <div>

        </div>
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
import React from "react"
import styled from "styled-components"
import containerStyles from "./personal_intro.module.css"

const Intro_Text = styled.div`
  font-family: 'Federant', cursive;
  font-size: 32px;
  color: #d12a2c;
  word-spacing: 3px;
`;

export default function Personal_Intro() {
  return(
    <>
      <div id="personal_intro" className="container">
        <Intro_Text>
          Hey, I'm Lawrence, a <br></br>
          visual designer and developer <br></br>
          living in San Francisco.
        </Intro_Text>
      </div>
    </>
  )
}
import React, {useState, useEffect} from "react"
import styled from "styled-components"

const CTA = styled.button`
  height: 20px;
  fill: red;
  color: white;
`;

export default function CallToActionButton(props) {
  const buttonText = props.buttonText;
  const route = props.route;

  return(
    <>
    <CTA onClick={renderNewPage}>
      {buttonText}
    </CTA>

    </>
  )
}

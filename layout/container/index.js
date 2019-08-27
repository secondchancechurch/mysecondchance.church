import React from 'react'

import styled from 'styled-components'
import { variables } from "../../styles/vars"

const Wrapper = styled.div`
  max-width: ${variables.maxWidth};
  padding: 0 10px;
  box-sizing: border-box;
  margin: ${props => props.flush ? 0 : variables.halfSpacing / 6}px auto;
  display: block;
  width: 100%;
  
  @media (min-width: 560px) and (max-width: 967px) {
    padding: 0 20px;
  }
  
  @media (min-width: 968px) {
    padding: 0 40px;
    margin: ${props => props.flush ? 0 : variables.halfSpacing}px auto;
  }
`

export const Container = (props) =>
  <Wrapper style={props.style} flush={props.flush}>
    {props.children}
  </Wrapper>

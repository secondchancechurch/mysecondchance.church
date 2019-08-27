import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styled from 'styled-components'
import { rgba } from 'polished'

import { colors } from '../../styles/vars'

export const LinkStyle = styled.a`
  font-family: 'gilroy', sans-serif;
  position: relative;
  display: inline-block;
  color: ${props => props.light ? colors.lightPrimary : colors.darkPrimary};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 900;
  border: none;
  transition: all 0.2s ease-in-out;
  letter-spacing: 1px;
  padding: 4px 0;
  appearance: none;
  margin: 0;
  text-decoration: none;
  text-align: center; 
  
  .hiddenMobile {
  
    @media (max-width: 767px) {
      display: none;
    }
  }
  
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : 0};
    background: ${props => props.light ? colors.lightPrimary : colors.primary};
    height: 2px;
    margin-bottom: -2px;
    transition: width .4s;
  }
  
  &:hover {
    cursor: pointer;
    
    .fa-external-link-alt {
      color: ${props => props.light ? colors.lightPrimary : colors.darkPrimary} !important;
    }
    &:after {
      width: 100%;
    }
  }
`

export const ButtonStyle = styled(LinkStyle)`
  padding: 0;
  //border: 1px solid #222;
  // background-color: ${props => props.filled ? '#B11E23' : 'transparent'};
  // color: ${props => props.filled ? '#fff' : '#B11E23'};
  background-color: ${props => props.outlined ? 'transparent' : colors.darkPrimary};
  color: ${props => (props.outlined && !props.light) ? colors.darkPrimary : colors.lightPrimary};
  border-radius: 8px;
  overflow: hidden;
  border-width: ${props => props.outlined ? '2px' : '0'};
  border-style: solid;
  
  &:after {
    content: none;
  }
  
  span {
    //padding: 6px 20px;
    //padding: 14px 20px 13px;
    padding: ${props => props.outlined ? '10px 18px 8px' : '12px 20px 10px'};
    display: block;
    background-image: linear-gradient(45deg, ${props => props.light ? colors.lightPrimary : colors.primary} 10%,transparent 0);
    background-size: 100%;
    transition: background-size 0.5s ease;
    
    @media (max-width: 52em) {
      padding: ${props => props.outlined ? '8px 14px 6px' : '10px 16px 8px'};
      font-size: 0.65rem; 
    }
  }
  
  .fa-external-link-alt {
    color: ${colors.lightPrimary} !important;
  }
  
  &:hover {
    color: ${props => props.light ? colors.darkPrimary : colors.lightPrimary};
    cursor: pointer;
    border-color: ${props => props.outlined && !props.light ? colors.primary : props.light ? colors.lightPrimary : 'transparent'};
    
    .fa-external-link-alt {
      color: ${props => props.outlined ? colors.darkPrimary : colors.lightPrimary} !important;
    }
    
    span {
      background-size: 2000%;
      transition: background-size 0.5s ease;
    }
  }
`

export const LinkText = (props) => {
  if (props.onClick || props.type === 'submit') {
    return (
      <LinkStyle as={"button"} type={props.type} onClick={props.onClick} light={props.light}>
        <span>
          {props.children || props.text || 'Learn More'}
        </span>
      </LinkStyle>
    )
  }

  if (props.target) {
    return (
      <LinkStyle href={props.href} target={props.target && '_blank'} light={props.light} rel="noopener noreferrer">
        <span>
          {props.children || props.text || 'Learn More'}
          <FontAwesomeIcon
            icon={"external-link-alt"}
            size="xs"
            style={{
              marginLeft: 10,
              top: '-1px',
              position: 'relative',
              color: props.light ? rgba(colors.lightPrimary, 0.65) : rgba(colors.darkPrimary, 0.65)
            }}
          />
        </span>
      </LinkStyle>
    )
  }

  return (
    <Link href={props.href}>
      <LinkStyle active={props.active} light={props.light}
       style={props.style}
      >
        <span>
          {props.children || props.text || 'Learn More'}
        </span>
      </LinkStyle>
    </Link>
  )
}

export const Button = (props) => {

  if (props.target) {
    return (
      <ButtonStyle
        light={props.light}
        outlined={props.outlined}
        href={props.href}
        target={props.target && '_blank'}
        rel="noopener noreferrer"
      >
        <span>
          {props.children || props.text || 'Learn More'}
          <FontAwesomeIcon
            icon={"external-link-alt"}
            size="xs"
            style={{
              marginLeft: 10,
              top: '-2px',
              position: 'relative',
              color: props.light ? rgba(colors.lightPrimary, 0.85) : rgba(colors.darkPrimary, 0.65)
            }}
          />
        </span>
      </ButtonStyle>
    )
  }

  if (props.onClick || props.type === 'submit') {
    return(
      <ButtonStyle as={"button"} type={props.type} onClick={props.onClick} light={props.light}>
        <span>
          {props.children || props.text || 'Learn More'}
        </span>
      </ButtonStyle>
    )
  }

  return (
    <Link href={props.href}>
      <ButtonStyle
        light={props.light}
        outlined={props.outlined}
      >
        <span>
          {props.children || props.text || 'Learn More'}
        </span>
      </ButtonStyle>
    </Link>
  )
}

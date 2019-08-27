import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import {Container} from '../container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
  fab
)

import { Logo as LogoWordmark } from '../../components/logo'

import Link from 'next/link'
import moment from 'moment-timezone'
import {colors, variables} from '../../styles/vars'

const Logo = styled(Box)`
  display: none;
  
  @media (min-width: 52em) {
    display: block;
    text-align: right;
    
    a {
      display: flex;
      
      svg {
        margin-left: auto;
      }
    }
  }
`

const Connect = styled('div')`
  z-index: 10;
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: inline-block;
      
        h4 {
          color: ${colors.lightPrimary};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottomn: 0;
        }
      
        a {
        color: ${colors.lightPrimary};
        padding: 10px;
        transition: all 0.3s ease-in-out;
        
        &:hover {
          color: ${colors.secondary};
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`

const FooterWrapper = styled.footer`
  margin-top: ${variables.halfSpacing/6}px;
  background-color: ${colors.lightSecondary};
  display: block; 
  text-align: center;
  
  @media (min-width: 52em) {
    margin-top: ${variables.halfSpacing}px;
  }
  
  @media (max-width: 52em) {
    margin-bottom: 72px;
    text-align: center;
  }
  
  h6 {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
  }
  
  h4 {
    font-size: 1rem;
    margin: 0;
  }
  
  a {
    //color: #fff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const Social = styled(Box)`

  @media (min-width: 52em) {
    text-align: right;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0;
  }
  
  a {
    padding: 10px;
    margin: 0;
    color: ${colors.darkPrimary};
    transition: color ease-in-out 0.2s;
    
    &:hover {
      color: ${colors.primary};
      transition: color ease-in-out 0.2s;
    }
  }
`

const Attribution = styled(Box)`
  @media (min-width: 52em) {
    text-align: left;
  }
`

const GET_SOCIAL = gql`{
    social {
        twitter
        facebook
        instagram
        youtube
        iTunes
    }
}`

export const Footer = () => {
  const {loading, error, data} = useQuery(GET_SOCIAL)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
      <FooterWrapper>
        <Container flush>
          <Flex flexWrap={"wrap"} alignItems={"center"} px={4} py={3}>
            <Attribution width={[1,1,1/3]}>
              <h6>
                ©{moment().format('YYYY')} Second Chance Church
              </h6>
            </Attribution>
            <Social width={[1,1,1/3]}>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {data.social.facebook &&
                  <li>
                    <a
                      href={data.social.facebook}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} size="sm"/>
                    </a>
                  </li>
                }
                {data.social.instagram &&
                  <li>
                    <a
                      href={data.social.instagram}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "instagram"]} size="sm"/>
                    </a>
                  </li>
                }
                {data.social.youtube &&
                  <li>
                    <a
                      href={data.social.youtube}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "youtube"]} size="sm"/>
                    </a>
                  </li>
                }
                {data.social.iTunes &&
                  <li>
                    <a
                      href={data.social.iTunes}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fas", "podcast"]} size="sm"/>
                    </a>
                  </li>
                }
              </ul>
            </Social>
            <Logo width={[1,1,1/3]} style={{textAlign: 'right'}}>
              <Link href={"/"}>
                <a>
                  <LogoWordmark/>
                </a>
              </Link>
            </Logo>
          </Flex>
        </Container>
      </FooterWrapper>
  )
}
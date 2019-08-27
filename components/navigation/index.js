import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Link from 'next/link'
import { StoreConsumer } from '../store'
import { LinkText } from "../buttons/linkText"

import { Logo as LogoWordmark } from '../logo'
import { LogoIcon } from '../logo/icon'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'

import styled from 'styled-components'
import { colors, variables } from '../../styles/vars'
import { Container } from '../../layout/container'

import { Flex, Box } from '@rebass/grid'

const Header = styled.div`
  @media (max-width: 52em) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: ${colors.lightPrimary};
`;

const Logo = styled(Box)`
  // width: 25%;
  //
  // @media (max-width: 768px) {
  //   width: 50%;
  // }
  text-align: center;
  
  .wordmark {
    display: none;
  }
  
  @media (min-width: 52em) {
    text-align: left;
     
    .wordmark {
      display: block;
    }
    
    .mobileIcon {
      display: none;
    }
  }

  img {
    display: block;
    height: auto;
    width: 200px;

    @media (max-width: 768px) {
      width: 150px;
    }
  }
`;

const MobileTrigger = styled(Box)`
  display: none;
  width: 50%;

  span {
    color: ${colors.lightPrimary};
  }

  @media (max-width: 52em) {
    display: flex;
    align-items: center;

    span {
      width: 100%;
      text-align: right;
    }
  }
`

const Nav = styled(Box)`
  //display: flex;
  align-items: center;
  text-align: right;
  //width: 75%;
  z-index: 10;
  position: relative;

  ul {
    list-style: none;
    width: 100%;
    padding: 0;
  }

  li {
    display: inline-block;
    vertical-align: middle;
    
    @media (min-width: 52em) {
      &:not(:last-of-type) {
        margin-right: 2rem;
      }

      &:last-child {
        a {
          margin-right: 0;
        }
      }
      
      a {
        margin-right: 1rem;
      }
    }

    a {
      color: ${props => props.dark ? colors.darkPrimary : colors.lightPrimary};
    
      &:hover {
        cursor: pointer;
      }
    }
  }


   @media (max-width: 52em) {
      text-align: left;
      display: ${props => props.navOpen ? 'flex !important' : ''};
      background-color: ${props => props.navOpen ? 'rgba(21,21,21,0.7)' : 'transparent'};
      height: ${props => props.navOpen ? '100vh' : 'auto'};
      z-index: 100;
      
      .top-level {
        text-align: center;
        margin: 0 !important;
        width: 25%;
        
        & > a,
        & > button {
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          margin: auto;
          
          & > span > svg {
            margin: 0 auto 4px !important;
            font-size: 1.25rem;
          }
        }
        
        & > button svg {
          position: relative;
          top: -2px;
        }
        
        span {
          display: flex;
          flex-wrap: wrap;
          margin: auto;
          
          span {
            display: block;
            width: 100%;
            font-size: 0.7em;
            line-height: 1;
          }
        }
      }

      ul {
        padding: 0;
        text-align: right;
      }

      li {

        a,
        button {
          color: ${colors.darkPrimary};
        }
        
        .fa-external-link-alt {
          display: none;
        }

        
      }
    }
`

const SubNav = styled.aside`
  height: ${props => props.open ? 'calc(100vh - 72px)' : '0px'};
  transition: 0.25s ease-in-out all;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 72px;
  width: 100%;
  z-index: 100;
  background-color: ${colors.primary};
  color: ${colors.lightPrimary};
  text-align: left;
  max-width: ${variables.maxWidth};
  overflow: auto;
  margin: auto;
  
  @media (min-width: 52em) {
    top: 0;
    bottom: unset;
    height: ${props => props.open ? '100vh' : '0px'};
  }
  
  a {
    svg {
      margin-left: 0 !important;
    }
  }
  
  ul {
    text-align: left;
  }
  
  li {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    
    a {
      text-align: left !important;
      font-weight: 500;
      font-size: 0.9rem;
      letter-spacing: 1.5px;
      text-transform: capitalize;
      
      .fa-external-link-alt {
        display: inline-block;
        font-size: 0.6rem;
        margin-left: 10px !important;
        top: -2px !important;
      }
      
      span {
        align-items: center;
      }
    }
  }
  
  a,
  button {
    color: ${colors.lightPrimary} !important;
  }
`

library.add(
  fas
)

const GET_NAV = gql`{
  menu {
    title
    url
    newTab
    class
    children {
      title
      url
      newTab
      children {
        title
        url
        newTab
      }
    }
  }
}`

export const Navigation = (props) => {
  const [navOpen, setNavOpen] = useState(false)
  const { loading, error, data } = useQuery(GET_NAV)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const {menu} = data

  const toggleNav = (e) => {
    e.preventDefault()
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('preventScroll')
    setNavOpen(!navOpen)
  }

  return (
    <>
      <StoreConsumer>
        {({ isLive }) => (
          <Header
            className="scroll_header_top_area light regular transparent page_header"
            offset={props.offset}
          >
            <Container className="header_inner" flush>
              <Flex flexWrap={"wrap"} alignItems={"center"} px={[0,4]} py={3}>
                <Logo width={[1/5,1/5,1/3]}>
                  <Link href={"/"}>
                    <a itemProp="url" style={{display: 'flex' }}>
                      <LogoWordmark className={'wordmark'} />
                      <LogoIcon className={'mobileIcon'} />
                    </a>
                  </Link>
                </Logo>

                <Nav
                  width={[4/5,4/5,2/3]}
                >
                  <ul style={{ margin: 0 }}>
                    {isLive &&
                      <li className="top-level">
                        <LinkText
                          light={true}
                          href={'/give'}
                          hiddenMobile={true}
                        >
                          <FontAwesomeIcon
                              icon={["fas", "play"]}
                              style={{marginRight: 10}}
                          />
                          <span>
                            Watch Live
                          </span>
                        </LinkText>
                      </li>
                    }
                    {menu.map((item) => {
                      let iconSet = "fas"
                      let iconItem

                      if (item.class) {
                        const icon = item.class.split(',')
                        iconItem = icon[0]

                        if (icon.length > 0) {
                          iconSet = icon[0]
                          iconItem = icon[1]
                        }
                      }

                      return (
                        <li className="top-level">
                          <LinkText
                            onClick={item.title === 'Menu' ? (e) => toggleNav(e)  : null}
                            href={item.title === 'Menu' ? null : item.url}
                            target={item.newTab}
                            light={true}
                          >
                            {item.class &&
                              <FontAwesomeIcon
                                icon={[iconSet, iconItem]}
                                style={{marginRight: 10}}
                              />
                            }
                            <span className={'hiddenMobile'}>
                              {item.title}
                            </span>
                          </LinkText>
                          {(item.children) &&
                            <SubNav open={navOpen}>
                              <Flex
                                flexWrap={"wrap"}
                                py={[3]}
                                px={[4,5]}
                              >
                                <Box width={1}>
                                  <Flex
                                    mb={5}
                                  >
                                    <Logo
                                      width={1/2}
                                    >
                                      <Link href={"/"}>
                                        <a itemProp="url" style={{display: 'flex' }}>
                                          <LogoWordmark
                                            light={true}
                                          />
                                        </a>
                                      </Link>
                                    </Logo>
                                    <Box width={1/2} style={{ textAlign: 'right', alignSelf: 'center' }}>
                                      <LinkText
                                       onClick={e => toggleNav(e)}
                                       light={true}
                                      >
                                        <FontAwesomeIcon
                                          icon={'far', 'times'}
                                          size={'xl'}
                                          style={{ marginRight: 10 }}
                                        />
                                        Close
                                      </LinkText>
                                    </Box>
                                  </Flex>
                                </Box>
                                {item.children.map((item, i) => {
                                  return (
                                    <Box
                                      key={i}
                                      width={[1, 1, 1 / 5]}
                                      style={{
                                        marginBottom: 30
                                      }}
                                    >
                                      <h5
                                        style={{
                                          fontWeight: 800,
                                          letterSpacing: 2.5,
                                          marginBottom: '0.5rem',
                                          textTransform: 'uppercase'
                                        }}
                                      >{item.title}</h5>
                                      {item.children ?
                                        <ul
                                          style={{
                                            paddingLeft: 0
                                          }}
                                        >
                                          {item.children.map((item, i) => (
                                            <li
                                              key={i}
                                              style={{
                                                display: 'block',
                                                marginBottom: 10
                                              }}
                                            >
                                              <LinkText
                                                href={item.url}
                                                target={item.newTab}
                                                light={true}
                                                style={{
                                                  fontWeight: 500,
                                                  letterSpacing: 1.5,
                                                  textTransform: 'capitalize'
                                                }}
                                              >
                                                {item.title}
                                              </LinkText>
                                            </li>
                                          ))}
                                        </ul> :
                                        <li>
                                          <LinkText href={item.url} target={item.newTab} light={true}>
                                            {item.title}
                                          </LinkText>
                                        </li>
                                      }
                                    </Box>
                                  )
                                })
                              }
                              </Flex>
                            </SubNav>
                          }
                        </li>
                      )
                    })}
                  </ul>
                </Nav>
              </Flex>
            </Container>
          </Header>
        )}
      </StoreConsumer>
    </>
  )
}

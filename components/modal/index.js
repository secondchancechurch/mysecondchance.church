import React, { useState } from 'react'

import { Container } from '../../layout/container'
import ReactPlayer from 'react-player'

import styled from 'styled-components'
import { colors } from '../../styles/vars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/pro-light-svg-icons'

const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
  background-color: rgba(19,19,19,0.75);
  display: flex;
  align-items: center;

  button {

    svg {
      transition: all 0.25s ease-in-out 0.25s;
    }

    &:hover {
      cursor: pointer;

      svg {
        background-color: ${colors.primary};
        border-radius: 100000px;
        transition: all 0.25s ease-in-out 0.25s;
      }
    }
  }

  div {
    max-width: 1024px;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
    margin: auto;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Modal = ({playerUrl, children}) => {
  const [modal, setModal] = useState(false)

  const toggleModal = (e) => {
    console.log('test')
    e.preventDefault()
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('preventScroll')
    setModal(!modal)
  }

  if (!modal) return <div />

  return (
    <ModalStyles>
      <Container>
        <div>
          <button
            style={{
              color: colors.lightPrimary,
              display: 'block',
              marginLeft: 'auto',
              marginBottom: 10
            }}
            onClick={toggleModal}
          >
            <FontAwesomeIcon
              icon={faTimesCircle}
              size={'lg'}
            />
          </button>
        </div>
        {playerUrl &&
          <div
            className={'player-wrapper'}
          >
            <ReactPlayer
              url={playerUrl}
              config={{
                wistia: {
                  options: {
                    playerColor: colors.primary
                  }
                }
              }}
              className={'react-player'}
              width='100%'
              height='100%'
            />
          </div>
        }
        {children}
      </Container>
    </ModalStyles>
  )
}
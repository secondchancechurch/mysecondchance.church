import React from 'react'
import BackgroundVideoPlayer from 'react-background-video-player'

export class BackgroundVideo extends React.Component {

  mouseEnter = () => {
    this.player.togglePlay()
  }

  mouseLeave = () => {
    this.player.pause()
  }

  render() {
    const { props } = this

    return(
      <div
        onMouseEnter={() => { this.mouseEnter() }}
        onMouseLeave={() => { this.mouseEnter() }}
      >
        {props.children}
        <BackgroundVideoPlayer
          ref={p => this.player = p}
          src={props.src}
          volume={0}
          // style={{ zIndex: -1, objectFit: 'cover' }}
        />
      </div>
    )
  }
}
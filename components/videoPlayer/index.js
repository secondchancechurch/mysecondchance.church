import React from 'react'
import Player from 'react-video-js-player'

export class VideoPlayer extends React.Component {
  player = {}
  state = {
    video: {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      poster: "//vjs.zencdn.net/v/oceans.webm"
    }
  }

  onPlayerReady(player){
    console.log("Player is ready: ", player);
    this.player = player;
  }

  onVideoPlay(duration){
    console.log("Video played at: ", duration);
  }

  onVideoPause(duration){
    console.log("Video paused at: ", duration);
  }

  onVideoTimeUpdate(duration){
    console.log("Time updated: ", duration);
  }

  onVideoSeeking(duration){
    console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from, to){
    console.log(`Video seeked from ${from} to ${to}`);
  }

  onVideoEnd(){
    console.log("Video ended");
  }

  render() {
    return(
      <div>
        <Player
          controls={true}
          src={this.state.video.src}
          poster={this.state.video.poster}
          width="720"
          height="420"
          hideControls={['playbackrates']}
          onReady={this.onPlayerReady.bind(this)}
          onPlay={this.onVideoPlay.bind(this)}
          onPause={this.onVideoPause.bind(this)}
          onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
          onSeeking={this.onVideoSeeking.bind(this)}
          onSeeked={this.onVideoSeeked.bind(this)}
          onEnd={this.onVideoEnd.bind(this)}
        />
      </div>
    )
  }
}
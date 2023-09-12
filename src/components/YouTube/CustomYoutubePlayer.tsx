import React, { Component } from 'react';
import YouTube from 'react-youtube';

class CustomYouTubePlayer extends Component {
  // Replace 'YOUR_VIDEO_ID' with the actual YouTube video ID
  videoId = 'vZmoK0QGD0A';

  opts: any = {
    width: '690',
    height: '390',
    playerVars: {
      autoplay: 1, // Change to 1 for autoplay
      controls: 1, // Show video controls
      rel: 1, // Hide related videos at the end
      modestbranding: 1 // Hide YouTube logo
    }
  };

  onReady(event: any) {
    // You can perform actions when the player is ready, if needed
    // For example, you can play the video using: event.target.playVideo();
  }

  render() {
    return (
      <div>
        <YouTube videoId={this.videoId} opts={this.opts} onReady={this.onReady} />
      </div>
    );
  }
}

export default CustomYouTubePlayer;
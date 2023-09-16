import YouTube, { YouTubeProps } from 'react-youtube';

export default function YouTubePlayer(props: YouTubeProps) {
  return (
    <div>
      <YouTube videoId={props.videoId} opts={props.opts} onReady={props.onReady} />
    </div>
  );
}

import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const App: React.FC = () => {
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      playlist: 'NLR3lSrqlww',
      loop: 1,
    },
  };

  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  return (
    <>
      <h1>plylisting</h1>
      <YouTube
        videoId="NLR3lSrqlww"
        // onReady={onPlayerReady}
        opts={opts}
      />
    </>
  );
};

export default App;

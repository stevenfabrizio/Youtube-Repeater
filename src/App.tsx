import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const App: React.FC = () => {
  //store the
  const [enteredURL, setEnteredURL] = React.useState('NLR3lSrqlww');
  const [submittedURL, setSubmittedURL] = React.useState('NLR3lSrqlww');

  const handleURL = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmittedURL(enteredURL);
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      modestbranding: 1,
      autoplay: 0,
      playlist: submittedURL,
      loop: 1,
    },
  };

  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  return (
    <>
      <h1>{enteredURL}</h1>
      <form onSubmit={handleURL}>
        <label>
          {' '}
          Enter the ID
          <input
            type="text"
            value={enteredURL}
            onChange={(e) => setEnteredURL(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>

      <YouTube
        className="Youtube-Player"
        videoId={submittedURL}
        // onReady={onPlayerReady}
        opts={opts}
      />
    </>
  );
};

export default App;

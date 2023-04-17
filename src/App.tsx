import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const App: React.FC = () => {
  //two regular expressions for two different link types.
  const regexAddressBar: RegExp = /^(https?\:\/\/)?((www\.)?youtube\.com)\/.+$/;
  const regexShareLink: RegExp = /^(https?\:\/\/)?((www\.)?youtu\.be)\/.+$/;

  //this will load the YT player when user searches a video. starts not loaded.
  const [toggleYTPlayer, setToggleYTPlayer] = React.useState<boolean>(false);

  //fxvHapje8DI KJ https://www.youtube.com/watch?v=fxvHapje8DI https://youtu.be/fxvHapje8DI
  //NLR3lSrqlww MC https://www.youtube.com/watch?v=NLR3lSrqlww https://youtu.be/NLR3lSrqlww
  //XU9FfG0tKV8 Spart https://www.youtube.com/watch?v=XU9FfG0tKV8 https://youtu.be/XU9FfG0tKV8
  const [enteredURL, setEnteredURL] = React.useState<string>('');
  const [submittedURL, setSubmittedURL] = React.useState<string>('');

  //when search is initated, determine which regex is being used and extract the video id.
  const handleURL = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (enteredURL.match(regexAddressBar)) {
      setSubmittedURL(enteredURL.split('v=')[1].substring(0, 11));
      setToggleYTPlayer(true);
      return;
    }
    if (enteredURL.match(regexShareLink)) {
      setSubmittedURL(enteredURL.split('.be/')[1].substring(0, 11));
      setToggleYTPlayer(true);
      return;
    }
    setToggleYTPlayer(false);
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // modestbranding: 1,
      // playlist: submittedURL,
      autoplay: 1,
      // loop: 1,
    },
  };

  return (
    <>
      <h1>
        enteredURL = {enteredURL} <br /> submittedURL = {submittedURL}
      </h1>
      <br />
      <h2> fxvHapje8DI KJ</h2>
      <h2>NLR3lSrqlww MC</h2>
      <h2>XU9FfG0tKV8 spart love theme</h2>

      <form onSubmit={handleURL}>
        <label>
          Enter the ID of the YT video
          <input
            type="text"
            value={enteredURL}
            onChange={(e) => setEnteredURL(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>

      {/* ternary operator hiding or showing YT player */}
      {toggleYTPlayer ? (
        <YouTube
          // https://developers.google.com/youtube/iframe_api_reference#onStateChange
          className="Youtube-Player"
          videoId={submittedURL}
          opts={opts}
          onReady={(e) => e.target.playVideo()}
          onEnd={(e) => e.target.playVideo()}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default App;

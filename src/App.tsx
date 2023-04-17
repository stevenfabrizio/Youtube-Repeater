import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Search from './images/search.png';
import Infinity from './images/infinity.png';

const App: React.FC = () => {
  //two regular expressions for two different link types.
  const regexAddressBar: RegExp = /^(https?\:\/\/)?((www\.)?youtube\.com)\/.+$/;
  const regexShareLink: RegExp = /^(https?\:\/\/)?((www\.)?youtu\.be)\/.+$/;

  //this will load the YT player when user searches a video. starts not loaded.
  const [toggleYTPlayer, setToggleYTPlayer] = React.useState<boolean>(false);
  const [enteredURL, setEnteredURL] = React.useState<string>('');
  const [submittedURL, setSubmittedURL] = React.useState<string>('');

  //when search is initated, determine which regex is being used and extract the video id. hide player on bad URL.
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
    toast('Bad Link!');
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
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />

      <div className="title">
        <div></div>
        <div className="logo-container">
          <img src={Infinity} alt="Website Logo" />
        </div>
        <h1>Loop YouTube videos.</h1>
        <div></div>

        {/* <h2>
          enteredURL = {enteredURL} <br /> submittedURL = {submittedURL}
        </h2>
        <br />
        <h2> fxvHapje8DI KJ</h2>
        <h2>NLR3lSrqlww MC</h2>
        <h2>XU9FfG0tKV8 spart love theme</h2> */}
      </div>
      <form onSubmit={handleURL} className="form">
        {/* <label>
          Loop any YouTube videos */}
        <input
          type="text"
          placeholder="Paste YouTube URL here"
          value={enteredURL}
          onChange={(e) => setEnteredURL(e.target.value)}
          title="'https://www.youtube.com/watch?v=...' or 'https://youtu.be/...'"
        ></input>
        <img src={Search} alt="Search Button" onClick={handleURL} />
        {/* </label> */}

        {/* <input type="submit" /> */}
      </form>
      
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
        <div className="empty"></div>
      )}
      <footer>
        Not all videos will embed. Check sfablink for examples of working links.
      </footer>
    </>
  );
};

export default App;

import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchHistory from './components/searchHistory';

import Search from './images/search.png';
import Infinity from './images/infinity.png';

const App: React.FC = () => {
  //two regular expressions for two different link types.
  const regexAddressBar: RegExp = /^(https?\:\/\/)?((www\.)?youtube\.com)\/.+$/;
  const regexShareLink: RegExp = /^(https?\:\/\/)?((www\.)?youtu\.be)\/.+$/;

  //this will load the YT player when user searches a video. store the input value and the searched link.
  const [toggleYTPlayer, setToggleYTPlayer] = React.useState<boolean>(false);
  const [enteredURL, setEnteredURL] = React.useState<string>('');
  const [submittedURL, setSubmittedURL] = React.useState<string>('');
  const [successfulURL, setSuccessfulURL] = React.useState<string>('');

  //when search is initated, determine which regex is being used and extract the video id. toast user on bad link.
  const handleURL = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (enteredURL.match(regexAddressBar)) {
      setSubmittedURL(
        enteredURL.split('youtube.com/watch?v=')[1].substring(0, 11)
      );
      setSuccessfulURL(enteredURL);
      setToggleYTPlayer(true);
      return;
    }
    if (enteredURL.match(regexShareLink)) {
      setSubmittedURL(enteredURL.split('youtu.be/')[1].substring(0, 11));
      setSuccessfulURL(enteredURL);
      setToggleYTPlayer(true);
      return;
    }

    toast('Bad link!');
    // setToggleYTPlayer(false);
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
        <h1>Repeat YouTube videos.</h1>
        <div></div>
      </div>

      <form onSubmit={handleURL} className="form">
        <input
          type="text"
          placeholder="Paste YouTube URL here"
          value={enteredURL}
          onChange={(e) => setEnteredURL(e.target.value)}
          title="'https://www.youtube.com/watch?v=...' or 'https://youtu.be/...'"
          onClick={(e) => e.currentTarget.select()}
        ></input>
        <img src={Search} alt="Search Button" onClick={handleURL} />
      </form>

      {toggleYTPlayer ? (
        <YouTube
          // https://developers.google.com/youtube/iframe_api_reference#onStateChange some useful attributes
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
        <SearchHistory successfulURL={successfulURL} />
        Not all videos will embed.&nbsp;
        <a
          href="https://github.com/stevenfabrizio/Youtube-Repeater/blob/master/src/Links.txt"
          target="_blank"
          title="A few URLs that will embed."
        >
          Click here
        </a>
        &nbsp;for examples of working links.
      </footer>
    </>
  );
};

export default App;

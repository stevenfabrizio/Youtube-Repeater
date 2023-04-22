LINK:
https://stevenfabrizio.github.io/Youtube-Repeater/

I had this idea because I wanted a simple way to loop YT videos. After I began this project, I learned Google added an integrated way to loop by right clicking the video once it starts playing! So I decided to finish this but add onto the idea by showing a list of recently viewed videos. I themed this website off of one I found that already loops videos https://looptube.io/.

I wanted to make this with only JavaScript and HTML but the addition of a simple error toast window was enticing. Then the idea of using a ternary operator to load the YT player only when a successful link was entered was another nice feature with React that I wanted to add. I was thinking about manipulating the DOM directly with appending children and removing them but this way is more elegent. Not worth styling for mobile responsiveness because you would't be using this on a mobile device.

If I wanted to expand this website idea, I would add a backend server that stores recent videos instead of using localstorage.
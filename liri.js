require("dotenv").config();

// UTILIZE REQUEST
let request = require("request");

//REQUIRE FILE SYSTEMS
const fs = require("fs");

// LINK KEY PAGE
const keys = require("./keys.js");

//INITIALIZE SPOTIFY
const Spotify = require("node-spotify-api")
const spotify = new Spotify(keys.spotify);
// console.log(spotify)


// get the user input
const input = process.argv[2];

//make a decision based on the command
switch (input) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doThis();
        break;
    default:
        console.log("I don't understand");
        break;
}
function spotifyThisSong() {
    console.log("SPOTIFY THIS SONG")
}

function concertThis() {
    console.log("CONCERT THIS");
} 
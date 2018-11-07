require("dotenv").config();

// UTILIZE REQUEST
let request = require("request");

//REQUIRE FILE SYSTEMS
const fs = require("fs");

// LINK KEY PAGE
const keys = require("./keys.js");

//INITIALIZE SPOTIFY
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
// console.log(spotify);


// get the user input
let input = process.argv[2];

// // make a decision based on the command
// switch (input) {
//     case "concert-this":
//         concertThis();
//         break;
//         // case "spotify-this-song":
//         spotifyThisSong();
//         break;
//     case "movie-this":
//         movieThis();
//         break;
//     case "do-what-it-says":
//         doThis();
//         break;
//     default:
//         console.log("I don't understand");
//         break;
// }

// function concertThis() {
//     var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
//     console.log("CONCERT THIS");

//     //request venue, location and date of event with MM/DD/YYYY formatting
//     request(queryUrl, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             console.log("Venue: " + JSON.parse(body).Year);
//         }
//     })
// }
// input.concertThis();

// function spotifyThisSong() {
//     console.log("SPOTIFY THIS SONG");
//     var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//     console.log(queryUrl);
//     console.log("MOVIE THIS");

//     // display artist, song name, preview link, and album
//     // if no is provided, program will default to Ace of Base

//     request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (err) {
//             console.error('Error occurred: ' + err);
//         });
// }

// function movieThis() {
//     var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=86fe999c";
//     console.log(queryUrl);
//     console.log("MOVIE THIS");

//     //display movie title, year of release, IMDB rating, Rotten Tomatoes rating, Country of Origin, Languange, Plt and Actors in the movie. 

//     // If no movie is given, the program will default ot 'Mr. Nobody'

//     //

//     request(queryUrl, function (error, response, body) {

//         // If the request is successful
//         if (!error && response.statusCode === 200) {
//             console.log("Release Year: " + JSON.parse(body).Year);
//         }
//     });
// }

// function doThis() {
    // utilize the fs node package
    // take the text inside of random.txt and then use it to call one of LIRI's commands
//     fs.readFile("random.txt", "utf8", function (error, data) {
//         if (error) {
//             return console.log(error);
//         }
//         var dataArr = data.split(",");
//         console.log(dataArr);

//         // it should run a "spotify-this-song" for "I Want It That Way" as follows in the text in random.txt
//         dataArr.forEach(function (song) { console.log(song) });
//         // Edit the text in random.txt to test out the feature for movie - this and concert - this
//     })
//     console.log("DO THIS");
// }
// concertThis();
// spotifyThis();
// movieThis();
// doThis();


require("dotenv").config();

// UTILIZE REQUEST
let request = require("request");

//REQUIRE FILE SYSTEMS
const fs = require("fs");

// LINK KEY PAGE
const keys = require("./keys.js");

// INITIALIZE SPOTIFY
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
// console.log(spotify);

// OMDB AND BANDS IN TOWN API'S
let omdb = (keys.omdb);
console.log(omdb);
let bandsintown = (keys.bandsintown);
console.log(bandsintown);

// get the user input
const userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

// make a decision based on the command
// switch (userInput) {
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

// userCommand(userInput, userQuery);

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
// if (!userQuery.length) {
//     userQuery = "ace of base the sing"
// };
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

function movieThis() {
    // If no movie is given, the program will default ot 'Mr. Nobody'
    if (!userQuery) {
        userQuery = "mr nobody";
    };

    request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=86fe999c", function (error, response, body) {
        // Parse the response into a JSON format
        let userMovie = JSON.parse(body);
        // console.log(userMovie);

        // If the request is successful
        if (error) {
            return console.log("Movie not found :(" + error)
        }
        else {
            console.log(`Title: ${userMovie.Title}\n Cast: ${userMovie.Actors}\n Released: ${userMovie.Year}\n IMDb Rating: ${userMovie.imdbRating}\n Rotten Tomato Rating: ${userMovie.rottentomato}\n Country: ${userMovie.Country}\n Language: ${userMovie.Language}\n Plot: ${userMovie.Plot}\n      `)
        };

    })
};
function doThis() {
    // utilize the fs node package
    // take the text inside of random.txt and then use it to call one of LIRI's commands
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        console.log(dataArr);

        // it should run a "spotify-this-song" for "I Want It That Way" as follows in the text in random.txt
        dataArr.forEach(function (song) { console.log(song) });
        // Edit the text in random.txt to test out the feature for movie - this and concert - this
    })
    console.log("DO THIS");
}
// concertThis();
// spotifyThis();
doThis();
movieThis();

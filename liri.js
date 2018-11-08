require("dotenv").config();

// REQUIRE REQUEST
let request = require("request");

// REQUIRE MOMENT
const moment = require('moment');

//REQUIRE FILE SYSTEMS
const fs = require("fs");

// LINK KEY PAGE
const keys = require("./keys.js");

// INITIALIZE SPOTIFY
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// OMDB AND BANDS IN TOWN API'S
let omdb = (keys.omdb);
// console.log(omdb);
let bandsintown = (keys.bandsintown);
// console.log(bandsintown);

// TAKE USER COMMAND AND INPUT
const userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");


// APP LOGIC
function userCommand(userInput, userQuery) {
    // make a decision based on the command
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-this":
            doThis(userQuery);
            break;
        default:
            console.log("I don't understand");
            break;
    }
}

userCommand(userInput, userQuery);

function concertThis() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    console.log("CONCERT THIS");

    //request venue, location and date of event with MM/DD/YYYY formatting
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Venue: " + JSON.parse(body).Year);
        }
    })
}

function spotifyThisSong() {
    console.log(`\n- - - - -\n\nSEARCHING FOR..."${userQuery}"`);
    //first check if unserQuery has input, if not pass in "The Sign" by Ace of Base
    if (!userQuery) {
        userQuery = "the sign ace of base"
    };

    spotify.search({ type: 'track', query: userQuery, limit: 3 }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }

        spotify.search({ type: 'track', query: userQuery, limit: 1 }, function (error, data) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
            //Give the for loop an array:
            let spotifyArr = data.tracks.items;

            for (i = 0; i < spotifyArr.length; i++) {

                console.log(`\nBA DA BOP!  That's for you...\n\nArtist: ${data.tracks.items[i].album.artists[0].name} \nSong: ${data.tracks.items[i].name}\nSpotify link: ${data.tracks.items[i].external_urls.spotify}\nAlbum: ${data.tracks.items[i].album.name}
               \n- - - - -`)
            };
        });
    }
    )
}

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
            return console.log("Movie able to be found. Error:" + error)
        }
        else {
            console.log(`\nBA DA BOP!  That's for you...\n\nTitle: ${userMovie.Title}\nCast: ${userMovie.Actors}\nReleased: ${userMovie.Year}\nIMDb Rating: ${userMovie.imdbRating}\nRotten Tomato Rating: ${userMovie.rottentomato}\nCountry: ${userMovie.Country}\nLanguage: ${userMovie.Language}\nPlot: ${userMovie.Plot}\n\n- - - - -`)
        };

    })
};

function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        let dataArr = data.split(",");
        console.log(dataArr);

        dataArr.forEach(function (song) { console.log(song) });

        // Take items from array to pass as parameters
        // userInput = dataArr[0];
        // userQuery = dataArr[1];
        // It should run spotify-this for "I Want it That Way," as follows the text in random.txt
        //Change the text in random.txt to a different command and see what happens...
        userCommand(userInput, userQuery);
    });
};


// spotifyThisSong();
// concertThis();
// doThis();
// movieThis();


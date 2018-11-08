// REQUIRE .env FILE
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
let bandsintown = (keys.bandsintown);


// TAKE USER COMMAND AND INPUT
let userInput = process.argv[2];
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
    console.log(`\n - - - - -\n\nSEARCHING FOR...${userQuery}'s next show...`);
    // USE REQUEST AS OUR QUERY URL USING OUR USER QUERY VARIABLE AS THE PARAMETERS OF OUR SEARCH
    request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=" + bandsintown, function (error, response, body) {
        // IF THERE IS NO ERROR GIVE US A 200 STATUS CODE (EVERYTHING OK!)
        if (!error && response.statusCode === 200) {
            // CAPTURE DATA AND USE JSON TO FORMAT
            let userBand = JSON.parse(body);
            // PARSE DATA AND USE FOR LOOP TO ACCESS PATHS TO DATA
            if (userBand.length > 0) {
                for (i = 0; i < 1; i++) {

                    // CONSOLE DESIRED DATA USING E6 SYNTAX
                    console.log(`\nBA DA BOP!  That's for you...\n\nArtist: ${userBand[i].lineup[0]} \nVenue: ${userBand[i].venue.name}\nVenue Location: ${userBand[i].venue.latitude},${userBand[i].venue.longitude}\nVenue City: ${userBand[i].venue.city}, ${userBand[i].venue.country}`)

                    // MOMENT.JS TO FORMAT THE DATE MM/DD/YYYY
                    let concertDate = moment(userBand[i].datetime).format("MM/DD/YYYY hh:00 A");
                    console.log(`Date and Time: ${concertDate}\n\n- - - - -`);
                };
            } else {
                console.log('Band or concert not found!');
            };
        };
    });
};

function spotifyThisSong() {
    console.log(`\n - - - - -\n\nSEARCHING FOR..."${userQuery}"`);

    // IF USER QUERY NOT FOUND, PASS VALUE OF "ACE OF BASE" 
    if (!userQuery) { userQuery = "the sign ace of base" };

    // SPOTIFY SEARCH QUERY FORMAT
    spotify.search({ type: 'track', query: userQuery, limit: 1 }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        // COLLECT SELECTED DATA IN AN ARRAY
        let spotifyArr = data.tracks.items;

        for (i = 0; i < spotifyArr.length; i++) {
            console.log(`\nBA DA BOP!  That's for you...\n\nArtist: ${data.tracks.items[i].album.artists[0].name} \nSong: ${data.tracks.items[i].name}\nSpotify link: ${data.tracks.items[i].external_urls.spotify}\nAlbum: ${data.tracks.items[i].album.name}\n\n - - - - -`)
        };
    });
}

function movieThis() {
    console.log(`\n - - - - -\n\nSEARCHING FOR..."${userQuery}"`);
    if (!userQuery) { userQuery = "mr nobody"; };
    // REQUEST USING OMDB API
    request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=86fe999c", function (error, response, body) {
        let userMovie = JSON.parse(body);

        // BECAUSE THE ROTTEN TOMATOES RATING WAS NESTED IT WAS NECESSARY TO CAPTURE ITS VALUES IN AN ARRAY TO CREATE A PATH
        let ratingsArr = userMovie.Ratings;
        if (ratingsArr.length > 2) {
            console.log("Rotten Tomatoes Rating: ", userMovie.Ratings[1].Value);
        }

        if (!error && response.statusCode === 200) {
            console.log(`\nBA DA BOP!  That's for you...\n\nTitle: ${userMovie.Title}\nCast: ${userMovie.Actors}\nReleased: ${userMovie.Year}\nIMDb Rating: ${userMovie.imdbRating}\nRotten Tomatoes Rating: ${userMovie.Ratings[1].Value}\nCountry: ${userMovie.Country}\nLanguage: ${userMovie.Language}\nPlot: ${userMovie.Plot}\n\n- - - - -`)
        } else {
            return console.log("Movie able to be found. Error:" + error)
        };
    })
};

function doThis() {
    // UTILIZE THE BUILT IN READFILE METHOD TO ACCESS RANDOM.TXT
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) { return console.log(error); }
        // CATCH DATA AND USE THE .SPLIT() METHOD TO SEPARATE OBJECTS WITHIN OUR NEW ARRAY
        let dataArr = data.split(",");

        // TAKE OBJECTS FROM RANDOM.TXT TO PASS AS PARAMETERS
        userInput = dataArr[0];
        userQuery = dataArr[1];
        // CALL OUR FUNCTION WITH OUR NEW PARAMETERS...
        userCommand(userInput, userQuery);
    });
};
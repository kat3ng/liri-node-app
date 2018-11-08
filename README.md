# Liri Bot
---
- **For:** Northwestern Coding Bootcamp
- **Developer:** Kat Eng
- **Deployment Date** 11/07/2018
- **Built With** Node.js, Javascript
- **APIs** OMDB, Spotify, Bandsintown
- **Demo**
See a full demo [here!](https://drive.google.com/file/d/1bLbCdmK31ygWx8NLqbC10ulxZCzXuh3k/view)


### Description & Requirements
---
Liri is a command line application that takes user commands and queries from the command line and returns data from API's. The following commands have been hard coded into the program to give the user the capability to look up songs, concerts and movie information:

Commands | Function
---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns that bands next concert
spotify-this | uses the **spotify** API to take a song name from the user and returns the artist, song name, spotify-link and album 
movie-this | uses the **OMDB** API to take a movie name and returns the name, cast, release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot 
do-this | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query.

**Before you get started, make sure you have these node packages installed:**
1. **Dotenv:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

     *Command Line: 'npm install dotenv'*


2. **Request:** - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

     *Command Line: 'npm install request'*

3. **Moment:** - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates. 

    *Command Line: 'npm install moment'*

4. **Fs:** - a built in node package 

    *(npm i request)*


Read more about these methods [here](https://www.npmjs.com/)



### Functionality
--- 
1. concert-this 

    *<command, artist name>*

    Function takes the userInput (command) and the userQuery(artist), and returns the next concert time and date for that artist, as well as location and city.

    ![image of concertThis](/images/concertThis.png)
    ![image of concert-this](/images/concert-this.png)
2. spotify-this

     *<command, song name>*

    Function takes the userInput (command) and the userQuery(song), and returns the artist, full track name, a preview link and the album.

    ![image of spotifyThis](/images/spotifyThis.png)
    ![image of spotify-this](/images/spotify-this.png)


3. movie-this
  *<command, movie name>*

    Function takes the userInput (command) and the userQuery(song), and returns title, cast, release date, ratings, country of origin, original language and synopsis.
    ![image of movieThis](/images/movieThis.png)
    ![image of movie-this](/images/movie-this.png)


4. do-this

      *<command>*

    This function is a wildcard that will randomly select one of the functions and produce a search. The only way to find out what it does is to try!


    ![image of doThis](/images/doThis.png)
    ![image of do-this](/images/do-this.png)



### Notes
---
This is my first back end project and I am super happy with it. If I were to go back I would probably try to implement node geocoder to translate the coordinates into an address. It might be something that I come back to after the course is finished.
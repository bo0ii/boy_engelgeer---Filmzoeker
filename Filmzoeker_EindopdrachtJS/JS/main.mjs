import { movies } from "./movies.mjs";



const addMoviesToDom = function (movieArray) {
    const movieList = document.querySelector("#movielist");
    movieList.innerHTML = "";

    movieArray.forEach(element => {
        let newLi = document.createElement("li");
        let newLink = document.createElement("a");
        let images = document.createElement("img");
        images.src = element.Poster;
        newLink.setAttribute("href", "https://www.imdb.com/title/" + element.imdbID);
        newLink.setAttribute("target", "_blank");
        newLi.append(newLink);
        newLink.append(images);
        movieList.appendChild(newLi);
    })
};
addMoviesToDom(movies);

const radioButtons = document.querySelectorAll('[name="film-filter"]');

function addEventListeners() {

    for (let counter = 0; counter < radioButtons.length; counter++) {
        radioButtons[counter].addEventListener("change", event => {
            const radioValue = event.target.value;
            addHandleToChange(radioValue);
        });

    };


};

function addHandleToChange(radioValue) {

    switch (radioValue) {
        case "nieuwste-films":
            filterLatestMovies();
            break
        case "avenger-films":
            movieFilter("Avengers");
            break
        case "xmen-films":
            movieFilter("X-Men");
            break
        case "princess-films":
            movieFilter("Princess");
            break
        case "batman-films":
            movieFilter("Batman");
    };
};

addEventListeners();



const movieFilter = (wordInTitle) => {
    const filteredMovies = movies.filter(movie => movie.Title.includes(wordInTitle));
    addMoviesToDom(filteredMovies);
};

const filterLatestMovies = () => {
    const latestMovies = movies.filter(movie => movie.Year >= "2014");
    addMoviesToDom(latestMovies);
};




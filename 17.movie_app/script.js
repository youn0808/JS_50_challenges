const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=b0aa771a9db0327adca4902257eeb4d7&sort_by=popularity.desc&page=1"
const IMG_URL ='https://image.tmdb.org/t/p/w300'
const SEARCH_URL='https://api.themoviedb.org/3/search/movie?api_key=b0aa771a9db0327adca4902257eeb4d7&page=1&query='
const main = document.querySelector('#main')
const search = document.querySelector('.search')
const form = document.querySelector('#form')
const display_movies = document.querySelector('.display-movies')
const movies = document.querySelectorAll('.movie')

getMovies(API_URL);

//get inital movies
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    
    showMovies(data.results)
}

function showMovies(movies){
    display_movies.innerHTML='';
    
    movies.forEach((movie)=>{
        const {title,vote_average,overview,poster_path } = movie
        const create_movie = document.createElement('div')
        create_movie.classList.add('movie')
        create_movie.innerHTML=
        `<img src="${IMG_URL+poster_path}" alt="${title}"/>
                <div class="movie-info">
                     <h2>${title}</h2>
                    <span class="score ${vote_average}">${vote_average}</span>
                </div>
                <div class="detail">
                    <h2>overview</h2>
                    <p>${overview}</p>
                </div>`
        display_movies.appendChild(create_movie)
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    
    if(searchTerm && searchTerm!=''){
        getMovies(SEARCH_URL+searchTerm)
    }else{
        window.location.reload();
    }
    
    

    
})
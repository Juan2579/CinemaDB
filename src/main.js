const API_KEY = "c2534f1cf35e2bef3209b3378ffd1451"

const apiAxios = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        "Content-Type": "application/json;charset=utf-8",
    },
    params: {
        "api_key": API_KEY,
    }
})

const lazyLoading = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting == true){
            const url = entry.target.getAttribute("data-img")

            if (url == "https://image.tmdb.org/t/p/w500null") {
                entry.target.setAttribute("src", "../assets/images/imageError.jpg")
            } else {
                entry.target.setAttribute("src", url)
            }
            console.log(entry.target.getAttribute("src"))
            lazyLoading.unobserve(entry.target)
        }
    })
})


//Helper functions
const createMovies = (movies, container, lazyLoad = false) => {
    movies.forEach(movie => {
        
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie_container');

        movieContainer.addEventListener('click', () => {
            location.hash = `movie=${movie?.id}`;
        })


        const movieImg = document.createElement('img');
        movieImg.setAttribute("alt", movie.title)
        movieImg.setAttribute(
            lazyLoad ? "data-img" : "src",
            `https://image.tmdb.org/t/p/w500${movie.poster_path}`);

        const movieName = document.createElement("p")
        const movieNameTitle = document.createTextNode(movie.title);
        movieName.appendChild(movieNameTitle);

        if(lazyLoad){
            lazyLoading.observe(movieImg)
        }

        movieContainer.appendChild(movieImg);
        movieContainer.appendChild(movieName);
        container.appendChild(movieContainer);
    });
}

const createCategories = (categories, container) => {

    container.innerHTML = ""

    categories.forEach(category => {
        
        const categoryContainer = document.createElement("div")
        categoryContainer.classList.add('category_container');

        const categoryLogo = document.createElement('img')
        categoryLogo.setAttribute('src',`./assets/icons/category${category.id}${category.name}.svg`)
        const categoryTitle = document.createElement("h3")
        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryLogo)
        categoryContainer.appendChild(categoryTitle);

        categoryContainer.addEventListener("click", () => {
            location.hash = `#category=${category.id}-${category.name}`
        })
        container.appendChild(categoryContainer);

    })
}

//Api calls

async function getTrendingMoviesPreview(){
    const { data } = await apiAxios(`trending/movie/day`)
    const movies = data.results

    trendingMovieList.innerHTML = ""

    createMovies(movies, trendingMovieList, true)
    trendingMovieList.scrollTo(0,0)

}

async function getCategoriesList(){
    const { data } = await apiAxios(`genre/movie/list`)
    
    const categories = data.genres

    createCategories(categories, previewCategoriesContainer)
    
}

async function getMoviesByCategory(id, name){
    const { data } = await apiAxios("discover/movie", {
        params: {
            with_genres: id
        }
    })
    const movies = data.results

    categoryMovieList.innerHTML = ""  
    categoryName.innerText = name

    createMovies(movies, categoryMovieList, true)
}

async function getMoviesBySearch(query){
    const { data } = await apiAxios("search/movie", {
        params: {
            query
        }
    })
    const movies = data.results

    
    titleSearch.innerText = query[0].toUpperCase() + query.slice(1)
    genericMoviesList.innerHTML = ""

    createMovies(movies, genericMoviesList, true)
}
async function getTrendingMovies(page = 1){
    const { data } = await apiAxios(`trending/movie/day`, {
        params: {
            page
        }
    })

    const movies = data.results
    if(page == 1){
        genericMoviesList.innerHTML = ""
    }

    titleSearch.innerText = "Trends"
    createMovies(movies, genericMoviesList, true)

    const btnLoadMore = document.createElement("button")
    btnLoadMore.innerText = "Cargar más"
    genericMoviesList.appendChild(btnLoadMore)
    
    btnLoadMore.addEventListener("click", () => {
        getTrendingMovies(page + 1)
        btnLoadMore.remove();
    })

}



async function getMovieById(id){
    const { data: movie } = await apiAxios(`movie/${id}`)

    movieDetailBackground.style.background = `
    linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%
        ),
    )`
    movieDetailBackgroundUpdated.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    movieDetailTitle.textContent = movie.title
    movieDetailRate.textContent = parseFloat(movie.vote_average.toFixed(1))
    movieDetailDescription.textContent = movie.overview

    createCategories(movie.genres, movieDetailCategories)
    getRelatedMovieById(id)
}

async function getRelatedMovieById(id){
    const { data } = await apiAxios(`movie/${id}/similar`)
    console.log(data)

    const relatedMovies = data.results
    movieDetailSimilarList.innerHTML = ""
    createMovies(relatedMovies, movieDetailSimilarList, true)
    movieDetailSimilarList.scrollTo(0,0)


}
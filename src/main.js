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

//Helper functions
const createMovies = (movies, container) => {
    movies.forEach(movie => {
        
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie_container');

        const movieImg = document.createElement('img');
        movieImg.setAttribute("alt", movie.title)
        movieImg.setAttribute("src", `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

        const movieName = document.createElement("p")
        const movieNameTitle = document.createTextNode(movie.title);
        movieName.appendChild(movieNameTitle);

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
        categoryLogo.setAttribute('src',`../assets/icons/category${category.id}${category.name}.svg`)
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

    createMovies(movies, trendingMovieList)

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

    createMovies(movies, categoryMovieList)
    
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

    createMovies(movies, genericMoviesList)
}
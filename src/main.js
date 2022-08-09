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

async function getTrendingMoviesPreview(){
    const { data } = await apiAxios(`trending/movie/day`)
    const movies = data.results

    movies.forEach(movie => {
        const trendingMovieList = document.querySelector(".main-trending_container .main-trending_movieList")
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
        trendingMovieList.appendChild(movieContainer);
    });
}

async function getCategoriesList(){
    const { data } = await apiAxios(`genre/movie/list`)
    
    const categories = data.genres
    console.log(categories)
    const previewCategoriesContainer = document.querySelector(".main-categories_container .main-categories_categoryList")
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
        previewCategoriesContainer.appendChild(categoryContainer);

    })
}


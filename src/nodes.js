//sections home
const mainContainer = document.querySelector(".main_container");
const mainContainerBackground = document.querySelector(".main_container--background");

const mainSearchContainerFull = document.querySelector(".main_header--search");
const mainSearchContainer = document.querySelector(".main_search-Form");
const mainSearchMoviesContainer = document.querySelectorAll(".main_search-Form .movie_container");


const mainTrendingContainer = document.querySelector(".main-trending_container");
const trendingMovieList = document.querySelector(".main-trending_container .main-trending_movieList")

const mainPreviewCategoriesContainer = document.querySelector(".main-categories_container");
const previewCategoriesContainer = document.querySelector(".main-categories_container .main-categories_categoryList")

// sections categories
const categoriesContainer = document.querySelector(".main_header--categories")
const categoryName = document.querySelector(".main_header--categories h2")
const categoryMovieList = document.querySelector(".main_header--categories .main_header--categoryList")


//sections movieDetail
const movieDetailBackground = document.querySelector(".main_header--movie")
const movieDetailBackgroundUpdated = document.querySelector(".main_header--movie .movie-detail_background")
const movieDetailContainer = document.querySelector(".movie-info_container")
const movieDetailCategories = document.querySelector(".movie-info_container .movie_categories")
const movieDetailSimilarMoviesContainer = document.querySelector(".movie-info_container .movie_similars")
const movieDetailSimilarList = document.querySelector(".movie-info_container .movie_similars .movie_similars--list")

//sections genericMovies

const genericMoviesContainer = document.querySelector(".main-generic_container")
const genericMoviesList = document.querySelector(".main_generic-list")

//sections favoriteMovies
const likedMoviesContainer = document.querySelector(".main-liked_container")
const likedMoviesListContainer = document.querySelector(".liked_movieList")


//elements
const backButton = document.querySelector(".main_back-button")

const titleSearch = document.querySelector(".main_search-Title")
const inputSearch = document.querySelector(".main_search-Form input")
const buttonSearch = document.querySelector(".main_search-Form button")

const buttonTrends = document.querySelector(".main-trending_header button")

const movieDetailTitle = document.querySelector(".movie-info_container h1")
const movieDetailRate = document.querySelector(".movie-info_container .movie-info_rate span")
const movieDetailDescription = document.querySelector(".movie-info_container p")
let page = 1
let maxPage;
let infiniteScroll;
buttonSearch.addEventListener("click", () => {
    location.hash = `#search=${inputSearch.value.trim()}`
})
buttonTrends.addEventListener("click", () => {
    location.hash = "#trends"
})
backButton.addEventListener("click", () => {
    history.back();
    categoryMovieList.innerHTML = ""
    categoryName.innerText = ""
})

window.addEventListener("DOMContentLoaded", navigator, false)
window.addEventListener("hashchange", navigator, false)
window.addEventListener("scroll", infiniteScroll, false)

function navigator(){
    console.log({location})
    
    if(infiniteScroll){
        window.removeEventListener("scroll", infiniteScroll, {passive: false})
        infiniteScroll = undefined
    }

    if(location.hash.startsWith("#trends")){
        trendsPage()
        titleSearch.innerText = "Trends"
    }else if(location.hash.startsWith("#search=")){
        searchPage()
    }else if(location.hash.startsWith("#movie=")){
        movieDetailsPage()
    }else if(location.hash.startsWith("#category=")){
        categoriesPage()
    }else {
        homePage();
    }

    window.scrollTo(0,0);

    if(infiniteScroll){
        window.addEventListener("scroll", infiniteScroll, {passive: false})
    }
    page = 1
}

function homePage(){
    console.log("Home")

    backButton.classList.add("inactive")
    
    mainContainerBackground.classList.remove("inactive")
    
    mainSearchContainerFull.classList.remove("inactive")
    mainSearchContainer.classList.remove("inactive");
    inputSearch.value = ""
    
    mainTrendingContainer.classList.remove("inactive")
    
    mainSearchMoviesContainer.forEach(movie => {
        movie.classList.add("movie_container--skeleton")
    })
    mainPreviewCategoriesContainer.classList.remove("inactive");
    
    titleSearch.classList.add("inactive")
    //categoriesPage
    categoriesContainer.classList.add("inactive")

    //movieDetailsPage
    movieDetailContainer.classList.add("inactive")
    movieDetailBackground.classList.add("inactive")

    //genericMoviesSection
    genericMoviesContainer.classList.add("inactive")

    //favoriteMoviesSection
    likedMoviesContainer.classList.remove("inactive")

    getTrendingMoviesPreview()
    getCategoriesList() 
    getLikedMovies()
}
function categoriesPage(){
    console.log("Categories")

    backButton.classList.remove("inactive")
    categoriesContainer.classList.remove("inactive")

    mainContainerBackground.classList.add("inactive")

    mainSearchContainer.classList.add("inactive");

    mainTrendingContainer.classList.add("inactive")
    mainSearchMoviesContainer.forEach(movie => {
        movie.classList.add("movie_container--skeleton")
    })
    mainPreviewCategoriesContainer.classList.add("inactive");

    //categoriesPage
    categoriesContainer.classList.remove("inactive")


    //movieDetailsPage
    movieDetailContainer.classList.add("inactive")
    movieDetailBackground.classList.add("inactive")

    //genericMoviesSection
    genericMoviesContainer.classList.add("inactive")

     //favoriteMoviesSection
     likedMoviesContainer.classList.add("inactive")

    //search Page
    mainSearchContainerFull.classList.add("inactive")
    titleSearch.classList.add("inactive");
    const initialId = location.hash.split("=")
    const finalId = initialId[1].split("-")

    getMoviesByCategory(finalId[0], finalId[1].replace("%20", " "))
    infiniteScroll = getPaginatedMoviesByCategory(finalId[0], finalId[1].replace("%20", " "))
}
function movieDetailsPage(){
    console.log("Movie")

    backButton.classList.remove("inactive")
    categoriesContainer.classList.add("inactive")

    mainContainerBackground.classList.add("inactive")

    mainSearchContainer.classList.add("inactive");
    mainSearchContainerFull.classList.add("inactive")

    mainTrendingContainer.classList.add("inactive")

    mainPreviewCategoriesContainer.classList.add("inactive");

    //categoriesPage
    categoriesContainer.classList.add("inactive")

    //movieDetailsPage
    movieDetailContainer.classList.remove("inactive")
    movieDetailBackground.classList.remove("inactive")

    //genericMoviesSection
    genericMoviesContainer.classList.add("inactive")

    //favoriteMoviesSection
    likedMoviesContainer.classList.add("inactive")

    const [_, movieId] = location.hash.split("=")
    console.log(movieId)
    getMovieById(movieId)
    infiniteScroll = getPaginatedSimilarMovies(movieId)
}
function searchPage(){
    console.log("Search")
    backButton.classList.remove("inactive")
    categoriesContainer.classList.add("inactive")

    mainContainerBackground.classList.add("inactive")

    mainTrendingContainer.classList.add("inactive")

    mainPreviewCategoriesContainer.classList.add("inactive");

    //categoriesPage
    categoriesContainer.classList.add("inactive")

    //movieDetailsPage
    movieDetailContainer.classList.add("inactive")
    movieDetailBackground.classList.add("inactive")

    //searchPage
    mainSearchContainerFull.classList.remove("inactive")
    mainSearchContainer.classList.remove("inactive");
    titleSearch.classList.remove("inactive");
    mainSearchMoviesContainer.forEach(movie => {
        movie.classList.add("movie_container--skeleton")
    })
    //genericMoviesSection
     genericMoviesContainer.classList.remove("inactive")

    //favoriteMoviesSection
    likedMoviesContainer.classList.add("inactive")

    const query = location.hash.split("=")
    getMoviesBySearch(query[1].replaceAll("%20", " "))

    infiniteScroll = getPaginatedMoviesBySearch(query[1].replaceAll("%20", " "))
}
function trendsPage(){
    console.log("Trends")
    backButton.classList.remove("inactive")
    categoriesContainer.classList.add("inactive")

    mainContainerBackground.classList.add("inactive")

    mainTrendingContainer.classList.add("inactive")

    mainPreviewCategoriesContainer.classList.add("inactive");


    mainSearchMoviesContainer.forEach(movie => {
        movie.classList.add("movie_container--skeleton")
    })
    //categoriesPage
    categoriesContainer.classList.add("inactive")

    //movieDetailsPage
    movieDetailContainer.classList.add("inactive")
    movieDetailBackground.classList.add("inactive")

    //searchPage
    mainSearchContainerFull.classList.remove("inactive")
    mainSearchContainer.classList.add("inactive");
    titleSearch.classList.remove("inactive");
    //genericMoviesSection
    genericMoviesContainer.classList.remove("inactive")

    //favoriteMoviesSection
    likedMoviesContainer.classList.add("inactive")

    getTrendingMovies()
    titleSearch.innerText = "Trends"
    page = 1
    infiniteScroll = getPaginatedTrendingMovies
}
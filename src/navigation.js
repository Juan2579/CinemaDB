buttonSearch.addEventListener("click", () => {
    inputSearch.value
    location.hash = "#search="
})
buttonTrends.addEventListener("click", () => {
    location.hash = "#trends"
})
backButton.addEventListener("click", () => {
    location.hash = "#home";
    categoryMovieList.innerHTML = ""
    categoryName.innerText = ""
})

window.addEventListener("DOMContentLoaded", navigator, false)
window.addEventListener("hashchange", navigator, false)

function navigator(){
    console.log({location})
    
    if(location.hash.startsWith("#trends")){
        trendsPage()
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
}

function homePage(){
    console.log("Home")

    backButton.classList.add("inactive")
    
    mainContainerBackground.classList.remove("inactive")
    
    mainSearchContainer.classList.remove("inactive");
    
    mainTrendingContainer.classList.remove("inactive")
    
    mainPreviewCategoriesContainer.classList.remove("inactive");
    
    titleSearch.classList.add("inactive")
    //categoriesPage
    categoriesContainer.classList.add("inactive")

    //movieDetailsPage
    movieDetailContainer.classList.add("inactive")
    movieDetailBackground.classList.add("inactive")

    //genericMoviesSection
    genericMoviesContainer.classList.add("inactive")

    getTrendingMoviesPreview()
    getCategoriesList() 
}
function categoriesPage(){
    console.log("Categories")

    backButton.classList.remove("inactive")
    categoriesContainer.classList.remove("inactive")

    mainContainerBackground.classList.add("inactive")

    mainSearchContainer.classList.add("inactive");

    mainTrendingContainer.classList.add("inactive")

    mainPreviewCategoriesContainer.classList.add("inactive");

    //categoriesPage
    categoriesContainer.classList.remove("inactive")


    //movieDetailsPage
    movieDetailContainer.classList.add("inactive")
    movieDetailBackground.classList.add("inactive")

    //genericMoviesSection
    genericMoviesContainer.classList.add("inactive")

    //search Page
    mainSearchContainerFull.classList.add("inactive")
    titleSearch.classList.add("inactive");
    const initialId = location.hash.split("=")
    const finalId = initialId[1].split("-")

    getMoviesByCategory(finalId[0], finalId[1].replace("%20", " "))
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
    mainSearchContainer.classList.remove("inactive");
    titleSearch.classList.remove("inactive");
    //genericMoviesSection
     genericMoviesContainer.classList.remove("inactive")
}
function trendsPage(){
    console.log("Trends")
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
    mainSearchContainer.classList.add("inactive");
    titleSearch.classList.remove("add");
    //genericMoviesSection
    genericMoviesContainer.classList.remove("inactive")
}
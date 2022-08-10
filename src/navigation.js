window.addEventListener("DOMContentLoaded", navigator, false)
window.addEventListener("hashchange", navigator, false)

function navigator(){
    console.log({location})
    
    if(location.hash.startsWith("#trends")){
        trendsPage()
    }else if(location.hash.startsWith("#search=")){
        searchPage()
    }else if(location.hash.startsWith("#movie=")){
        movieDetailsPage
    }else if(location.hash.startsWith("#category=")){
        categoriesPage()
    }else {
        homePage();
    }
}

function homePage(){
    console.log("Home")

    backButton.classList.add("inactive")

    mainContainer.classList.remove("main_container--long");
    mainContainerBackground.classList.remove("inactive")

    mainSearchContainer.classList.remove("inactive");

    mainTrendingContainer.classList.remove("inactive")

    mainPreviewCategoriesContainer.classList.remove("inactive");

    //categoriesPage
    categoriesContainer.classList.add("inactive")


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
}
function movieDetailsPage(){
    console.log("Movie")
}
function searchPage(){
    console.log("Search")
}
function trendsPage(){
    console.log("Trends")
}
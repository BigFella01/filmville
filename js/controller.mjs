import { getJSON } from "./helpers.mjs";
import * as model from "./model.mjs";
import resultsView from "./views/resultsView.mjs";
import searchView from "./views/searchView.mjs";
import searchViewMobile from "./views/searchViewMobile.mjs";
import carouselView from "./views/carouselView.mjs";
import previewView from "./views/previewView.mjs";
import resultDetailsView from "./views/moreDetailsView.mjs";
import moreDetailsView from "./views/moreDetailsView.mjs";
import watchlistView from "./views/watchlistView.mjs";

if (module.hot) {
    module.hot.accept()
}


const controlSearchResults = async function () {
    try {
        
        const query = searchView.getQuery();
        if (!query) return;
        
        resultsView.renderSpinner();
        
        const data = await model.getSearchResults(query)
        const searchData = JSON.parse(localStorage.getItem("searchData")) || [];
        searchData.push(data);
        localStorage.setItem("searchData", JSON.stringify(searchData));
        
        history.pushState(null, null, `/${query.replaceAll(' ', '')}/results`);
        
        resultsView.render(data);
        moreDetailsView.addHandlerMoreDetails(data, true);

        moreDetailsView.addHandlerChangeWatchlist(data, controlWatchlist);
        watchlistView.render(JSON.parse(localStorage.getItem("watchlist")));
    }
    
    catch (err) {
        console.error(err);
    }
}




function controlWatchlist(data, action) {
    model.changeWatchlist(data, action);

    resultsView.update(JSON.parse(localStorage.getItem("searchData")).find(data => {
        return data[0] === window.location.href.slice(22, -8);
    }));
    
    watchlistView.render(JSON.parse(localStorage.getItem("watchlist")));
}



const init = function() {
    searchView.addHandlerSearch(controlSearchResults);
    searchView.addHandlerMobileSlideDown();
    searchView.addHandlerHideMobileSlideDown();
    resultsView.addHandlerHover();
    resultsView.addHandlerHoverRemove();
    resultsView.addHandlerWatchStream();
    carouselView.toggleSlide();
    carouselView.addLazyLoad();
    watchlistView.addHandlerSeeWatchlist();
    watchlistView.render(JSON.parse(localStorage.getItem('watchlist')))

    console.log(history, history.length);
}
init();


window.addEventListener('popstate', function(e) {

    console.log(e)

    if (window.location.href === 'http://localhost:1234/') {
          window.location.reload()
    }

    else if (window.location.href.endsWith('results')) { 

        // the correct data will be synced with the query in the URL. 
        const data = JSON.parse(localStorage.getItem("searchData"));
        const syncedData = data.find(data => {
            return data[0] === window.location.href.slice(22, -8)
        });
        resultsView.render(syncedData);
        
        if (window.history.length < 4) {
            moreDetailsView.addHandlerMoreDetails(syncedData, true);
        }
        else {
            moreDetailsView.addHandlerMoreDetails(syncedData);
        }
        
        moreDetailsView.addHandlerChangeWatchlist(syncedData, controlWatchlist)
        watchlistView.render(JSON.parse(localStorage.getItem("watchlist")));
        
    }

    else if (window.location.href.endsWith('details')) {
        const data = JSON.parse(localStorage.getItem("searchData"));
        const syncedData = data.find(data => {
            return data[0] === window.location.href.slice(22, -8)
        })
        
        moreDetailsView.addHandlerMoreDetails(syncedData);
        moreDetailsView.render(syncedData);
        moreDetailsView.addHandlerChangeWatchlist(syncedData, controlWatchlist)
        watchlistView.render(JSON.parse(localStorage.getItem("watchlist")));
    }

    console.log(history, history.length);
})




// thenounproject.com for svgs

// everytime the user searches for something, that query and 
// the search data that goes along with it will be saved to
// localStorage. 





// function runs once, 
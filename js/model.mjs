import { getJSON } from "./helpers.mjs";

const state = {
    searchResults: [],
    watchlist: []
}

export const getSearchResults = async function (query) {
    try {
        const initData = await getJSON(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${query}&country=us&show_type=all&output_language=en`, {
            method: 'GET',
	        headers: {
		       'X-RapidAPI-Key': '0566b4f25amshc42c315cb197a5ep1c5429jsne8987db3c6fb',
		       'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }});
        state.searchResults.push(initData.result);
        return [query.replaceAll(' ', ''), initData.result];
    }
    
    catch (err) {
        console.error(err)
    }
}

export const changeWatchlist = function (data, action) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || state.watchlist;

    console.log(data, action)
    
    // if action is add and data is not there, push to array
    if (action === 'add' && !watchlist.some(bookmark => JSON.stringify(bookmark) === JSON.stringify(data))) {
        watchlist.push(data)
    } 
    // if action is add and data is there, do nothing
    else if (action === 'add' && watchlist.some(bookmark => JSON.stringify(bookmark) === JSON.stringify(data))) {
        console.log('duplicate')
    } 
    // if action is remove and data is there, remove it from array
    else if (action === 'remove' && watchlist.some(bookmark => JSON.stringify(bookmark) === JSON.stringify(data))) {
        watchlist = watchlist.filter(bookmark => JSON.stringify(bookmark) !== JSON.stringify(data));
    }

    watchlist = watchlist.filter(bookmarks => bookmarks !== null);

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}



import View from "./View.mjs";

class WatchlistView extends View {
    
   _parentElement = document.querySelector('.watchlist-preview__container');

   addHandlerSeeWatchlist() {
    this._parentElement.closest('.watchlist').addEventListener('mouseenter', function(e) {
        const watchlist = e.target.closest('.watchlist')
        if (!watchlist) return;
        document.querySelector('.watchlist-preview__container').classList.remove('hidden');
    })

    this._parentElement.closest('.watchlist').addEventListener('mouseleave', function(e) {
        const watchlist = e.target.closest('.watchlist')
        if (!watchlist) return;
        document.querySelector('.watchlist-preview__container').classList.add('hidden');
    })
   }

   _generateMarkup() {
       const watchlist = this._data?.length > 0 
       ? this._data.map(bookmark => {
        return `
        <div class="watchlist-preview">
           <img src="${Object.keys(bookmark.posterURLs).length > 0
            ? Object.values(bookmark.posterURLs)[Object.values(bookmark.posterURLs).length - 1]
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png'}" alt="" class="watchlist-preview__poster">
           <h3 class="watchlist-preview__title">${bookmark.title}</p>
        </div>`
       }).join('')
       : `<p class="watchlist-backuptext">No saved items! Search for movies or TV shows to add to watchlist.</p>`
       return watchlist
   }
}

export default new WatchlistView();
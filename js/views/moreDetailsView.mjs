import View from "./View.mjs";
import icons from "../../img/icons.svg";
import star from "../../img/star.svg"
import { buildTimeValue } from "@testing-library/user-event/dist/utils";


class ResultDetailsView extends View {

    _parentElement = document.querySelector('.result-details');

    addHandlerChangeWatchlist(data, controller) {
        this._parentElement.previousElementSibling.addEventListener('click', function(e) {

            e.preventDefault();

            const bookmarkBtn = e.target.closest('.modify-watchlist-btn');
            if (!bookmarkBtn) return;
            console.log(bookmarkBtn)
            const action = bookmarkBtn.dataset.action;
            
            
            const matchedInfo = data[1].find(result => {
                return result.imdbId === bookmarkBtn.dataset.id;
            });
            
            console.log(matchedInfo, action)
            controller(matchedInfo, action);
        })
    }

    addHandlerMoreDetails(data, pushState = false) {
        this._parentElement.previousElementSibling.addEventListener('click', function(e) {
            e.preventDefault();
            
            const moreInfoBtn = e.target.closest('.more-info');
            if (!moreInfoBtn) return;

            console.log(moreInfoBtn)

            Array.from(document.querySelector('.main-content').children).forEach(section => {
                return section.classList.add('hidden');
            })
            document.querySelector('.result-details').classList.remove('hidden');
            

            const matchedContent = data[1].find(result => {
                return result.imdbId === moreInfoBtn.dataset.id
            });
            console.log(matchedContent)

            const buildTrailer = function(link) {
                const trailer = document.createElement("iframe");
                trailer.classList.add('trailer')
                trailer.src = link;
                trailer.title = 'Youtube video player';
                trailer.frameborder = "0";
                trailer.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                trailer.setAttribute('allowFullScreen', '');
                return trailer;
            }
            // We build an iframe so only one history entry is added. 

            const trailer = buildTrailer(matchedContent.youtubeTrailerVideoLink.replace('watch?v=', 'embed/'))

            let streamingOptions;
        
            if (matchedContent.streamingInfo.us !== undefined) {
                streamingOptions = Object.keys(matchedContent.streamingInfo.us)
            } else return;

            

            const markup = 
            `<div class="result-details-container" data-sync="${matchedContent.imdbId}">
               <h3 class="details-title title">${matchedContent.title}</h3>
               <div class="details-title-info">
                   <p class="title-year">${matchedContent.year ? matchedContent.year : matchedContent.firstAirYear}</p>
                   <span class="middot">&middot;</span>
                   <p class="title-rating">PG-13</p>
                   <span class="middot">&middot;</span>
                   <p class="title-length">${matchedContent.runtime ? `${matchedContent.runtime} min` : `${matchedContent.seasons.length} seasons`}</p>
               </div>
               <img src="${matchedContent.backdropURLs.original}" alt="" class="detail-preview"> 
               <div class="further-details">
                   <div class="sub-photo__info">
                       <div class="genres">
                           ${matchedContent.genres.map(genre => {
                               return `
                               <p class="genre">${genre.name}</p>
                               `
                           }).join('')}
                       </div>
                       <div class="imdb-rating__container">
                           <p class="rating-label">imd<span class="lowercase">b</span> rating</p>
                           <div class="rating">
                               <img src="${star}" alt="" class="rating-star">
                               <p class="rating-text"><span class="emphasized">${matchedContent.imdbRating}</span>/100</p>
                           </div>
                       </div>
                   </div>
                   <p class="summary">
                       ${matchedContent.overview}
                   </p>
                   <div class="director-writer-stars">
                       <div class="director-info__container">
                           <p class="director">Director(s)</p>
                           ${matchedContent.directors
                            ? matchedContent.directors.map(director => {
                                return `<span class="director-writer-stars__span">${director}</span>`
                                }).join(`<span class="divider">&#8901;</span>`)
                             
                            : '<span class="director-writer-stars__span">Unknown</span>'
                            }
                       </div>
                       <div class="stars-info__container">
                           <p class="stars">Stars</p>
                           ${matchedContent.cast.slice(0, 3).map(star => {
                               return `
                               <span class="director-writer-stars__span">${star}</span>
                               `
                           }).join(`<span class="divider">&#8901;</span>`)}
                       </div>
                   </div>
                   <div class="trailer__section">
                       <h4 class="trailer__header">Trailer</h4>
                   </div>
                   <div class="streaming-options__section">
                       <p class="streaming-options__header">Streaming Options</p>
                       <div class="icon-container">
                          ${streamingOptions.map(option => {
                           if (option === 'peacock') {
                              return `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <img src="https://play-lh.googleusercontent.com/tmGaBmInLjXVZIb4lWe5-LXINRP2RiY77Vg_hOLu-rxXBsY9vKC78A_A3Pkyx9vNBE8" class="streaming-icon">
                               </a>`
                           } 
                   
                           else if (option === 'zee5') {
                               return `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <img src="https://yt3.googleusercontent.com/ytc/AOPolaR82w4X7mCcQwtdjPKKgJEFNWRRg5hQRbWIVTbj2Q=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                               </a>`
                           }

                           else if (option === 'curiosity') {
                               return `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <img src="https://yt3.googleusercontent.com/PnT6wqumsF5IXnWOq2stn6GTPccVAgvEY2aSaxTCIy8EYl1krhQqKAK41vCqeysDR8an1mP4=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                               </a>`
                           }
                   
                           else {
                               return   `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                   <svg class="streaming-icon ${option}">
                                      <use href="${icons}#${option}"></use>
                                   </svg>
                               </a>`
                            }
                           }).join('')}
                       </div>
                   </div>
               </div>
           </div>`;


           if (document.querySelector('.result-details').children) document.querySelector('.result-details').innerHTML = '';
           document.querySelector('.result-details').insertAdjacentHTML('afterbegin', markup);

           document.querySelector('.trailer__section').insertBefore(trailer, document.querySelector('.trailer__header').nextElementSibling)
           
           localStorage.setItem('detailsSync', moreInfoBtn.dataset.id)
           
           if (pushState) history.pushState(null, null, `details`);
           if (localStorage.getItem('detailsSync') !== null) history.forward();

           window.scrollTo(0, 0)
        })
    }

    
    
    
    _generateMarkup() {

        Array.from(document.querySelector('.main-content').children).forEach(section => {
            return section.classList.add('hidden');
        })
        this._parentElement.classList.remove('hidden');

        const matchedContent = this._data[1].find(result => {
            return result.imdbId === localStorage.getItem('detailsSync')
        })
        console.log(matchedContent)
        let streamingOptions;
        
        if (matchedContent.streamingInfo.us !== undefined) {
            streamingOptions = Object.keys(matchedContent.streamingInfo.us)
        } else return;


        const markup = 
        `<div class="result-details-container" data-sync="${matchedContent.imdbId}">
           <h3 class="details-title title">${matchedContent.title}</h3>
           <div class="details-title-info">
               <p class="title-year">${matchedContent.year ? matchedContent.year : matchedContent.firstAirYear}</p>
               <span class="middot">&middot;</span>
               <p class="title-rating">PG-13</p>
               <span class="middot">&middot;</span>
               <p class="title-length">${matchedContent.runtime ? `${matchedContent.runtime} min` : `${matchedContent.seasons.length} seasons`}</p>
           </div>
           <img src="${matchedContent.backdropURLs.original}" alt="" class="detail-preview"> 
           <div class="further-details">
               <div class="sub-photo__info">
                   <div class="genres">
                       ${matchedContent.genres.map(genre => {
                           return `
                           <p class="genre">${genre.name}</p>
                           `
                       }).join('')}
                   </div>
                   <div class="imdb-rating__container">
                       <p class="rating-label">imd<span class="lowercase">b</span> rating</p>
                       <div class="rating">
                           <img src="${star}" alt="" class="rating-star">
                           <p class="rating-text"><span class="emphasized">${matchedContent.imdbRating}</span>/100</p>
                       </div>
                   </div>
               </div>
               <p class="summary">
                   ${matchedContent.overview}
               </p>
               <div class="director-writer-stars">
                   <div class="director-info__container">
                       <p class="director">Director(s)</p>
                       ${matchedContent.directors
                        ? matchedContent.directors.map(director => {
                        return `<span class="director-writer-stars__span">${director}</span>`
                        }).join(`<span class="divider">&#8901;</span>`)
                        : matchedContent.creators.map(creator => {
                            return `<span class="director-writer-stars__span">${creator}</span>`
                            }).join(`<span class="divider">&#8901;</span>`)
                        }
                   </div>
                   <div class="stars-info__container">
                       <p class="stars">Stars</p>
                       ${matchedContent.cast.slice(0, 3).map(star => {
                           return `
                           <span class="director-writer-stars__span">${star}</span>
                           `
                       }).join(`<span class="divider">&#8901;</span>`)}
                   </div>
               </div>
               <div class="trailer__section">
                   <h4 class="trailer__header">Trailer</h4>
                   <iframe class="trailer" src="${matchedContent.youtubeTrailerVideoLink.replace('watch?v=', 'embed/')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <div class="streaming-options__section">
                   <p class="streaming-options__header">Streaming Options</p>
                   <div class="icon-container">
                      ${streamingOptions.map(option => {
                       if (option === 'peacock') {
                          return `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                             <img src="https://play-lh.googleusercontent.com/tmGaBmInLjXVZIb4lWe5-LXINRP2RiY77Vg_hOLu-rxXBsY9vKC78A_A3Pkyx9vNBE8" class="streaming-icon">
                           </a>`
                       } 
               
                       else if (option === 'zee5') {
                           return `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                             <img src="https://yt3.googleusercontent.com/ytc/AOPolaR82w4X7mCcQwtdjPKKgJEFNWRRg5hQRbWIVTbj2Q=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                           </a>`
                       }

                       else if (option === 'curiosity') {
                           return `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                             <img src="https://yt3.googleusercontent.com/PnT6wqumsF5IXnWOq2stn6GTPccVAgvEY2aSaxTCIy8EYl1krhQqKAK41vCqeysDR8an1mP4=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                           </a>`
                       }
               
                       else {
                           return   `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                               <svg class="streaming-icon ${option}">
                                  <use href="${icons}#${option}"></use>
                               </svg>
                           </a>`
                        }
                       }).join('')}
                   </div>
               </div>
           </div>
       </div>`
       
       return markup;

    }

}



export default new ResultDetailsView();




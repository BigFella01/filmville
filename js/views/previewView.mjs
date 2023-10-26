import View from "./View.mjs";
import icons from "../../img/icons.svg"
import { getSearchResults } from "../model.mjs";

class PreviewView extends View {
    
    _generateMarkup() { 
        let streamingOptions;
        
        if (this._data.streamingInfo.us !== undefined) {
            streamingOptions = Object.keys(this._data.streamingInfo.us)
        } else return;
        
        return ` 
            <div class="result">
              <div class="result-preview">
                <img src="${Object.keys(this._data.posterURLs).length > 0
                    ? Object.values(this._data.posterURLs)[Object.values(this._data.posterURLs).length - 1]
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png'}" alt="" class="result-poster">
                <h3 class="result-title">${this._data.title}</h3>
              </div>
              <div class="result-overlay hidden">
                <p class="overlay-title">Streaming options</p>
                <div class="icon-container">
                ${streamingOptions.map(option => {
                    
                  if (option === 'peacock') {
                      return `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                <img src="https://play-lh.googleusercontent.com/tmGaBmInLjXVZIb4lWe5-LXINRP2RiY77Vg_hOLu-rxXBsY9vKC78A_A3Pkyx9vNBE8" class="streaming-icon">
                              </a>
                    `
                  } 
                
                  else if (option === 'zee5') {
                      return `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                <img src="https://yt3.googleusercontent.com/ytc/AOPolaR82w4X7mCcQwtdjPKKgJEFNWRRg5hQRbWIVTbj2Q=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                              </a>`
                   }

                  else if (option === 'curiosity') {
                      return `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                <img src="https://yt3.googleusercontent.com/PnT6wqumsF5IXnWOq2stn6GTPccVAgvEY2aSaxTCIy8EYl1krhQqKAK41vCqeysDR8an1mP4=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                              </a>`
                  }
                
                  else {
                      return  `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <svg class="streaming-icon ${option}">
                                    <use href="${icons}#${option}"></use>
                                 </svg>
                               </a>`
                  }}).join('')}
                </div>
                <div class="overlay-options__container">
                   <button class="modify-watchlist-btn" data-id="${this._data.imdbId}" data-action="add">Add to watchlist</button>
                   <button class="modify-watchlist-btn" data-id="${this._data.imdbId}" data-action="remove">Remove from watchlist</button>
                   <a href="#" class="more-info" data-id="${this._data.imdbId}">More info...</a>
                </div>
              </div>
          </div>`


        }
           

    }

export default new PreviewView();






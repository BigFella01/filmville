import View from "./View.mjs";
import searchView from "./searchView.mjs";
import previewView from "./previewView.mjs";
import resultDetailsView from "./moreDetailsView.mjs";

class ResultsView extends View {
    
    _parentElement = document.querySelector('.results-content');
    
    _generateMarkup() {
        Array.from(document.querySelector('.main-content').children).forEach(section => {
            return section.classList.add('hidden');
        })
        this._parentElement.classList.remove('hidden');
        
        const resultPreviews = this._data[1].map(entry => previewView.render(entry, false)).join('');
        
        return resultPreviews;
    }

    
    addHandlerHover() {
        this._parentElement.addEventListener('mouseover', function(e) {
            const result = e.target.closest('.result');
            if (!result) return;
            
            result.children[0].style.opacity = '0.2';
            result.children[1].classList.remove('hidden');
            result.children[1].style.left = `${(result.offsetWidth / 2) - (result.children[1].offsetWidth / 2)}px`;
            result.children[1].style.top = `${(result.offsetHeight / 2) - (result.children[1].offsetHeight / 2)}px`;
        })
    }
    
    addHandlerHoverRemove() {
        this._parentElement.addEventListener('mouseout', function(e) {
            const result = e.target.closest('.result');
            if (!result) return;
            
            result.children[0].style.opacity = '1';
            result.children[1].classList.add('hidden');
        })
    }

    addHandlerWatchStream() {
        this._parentElement.addEventListener('click', function(e) {
            const iconLink = e.target.closest('.icon-link');
            if (!iconLink) return;
            window.open(iconLink, '_blank')
        })
    }
    
}

export default new ResultsView();


// THE ENTIRE POINT OF THE RENDER FUNCTION IS TO BUILD THE CONTENT WITH
// THE DATA IS RECEIVED. WHEN CALLING THE RENDER FUNCTION, IT IS DEFAULT
// TO PUT THE CONTENT INTO THE DOM. HOWEVER, THE RENDER FUNCTION CAN BE 
// CALLED TO SIMPLY GENERATE THE MARKUP. 
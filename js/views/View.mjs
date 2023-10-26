

export default class View {
    
    _data;
    
    render (data, render = true) {
        this._data = data;
        
        const markup = this._generateMarkup();
        
        if (!render) return markup;
        
        this._clear();
        
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        
        if (!this._parentElement === document.querySelector('.watchlist-preview__container')) window.scrollTo(0, 0)
    }

    update (data) {
        this._data = data;
          
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        
        newElements.forEach((newEl, i) => {
        // For each element in the new DOM, compare that element
        // to the corresponding element in the current DOM (or previous DOM). 
        // Also, check to see if the curEl and newEl are different. If so, 
        // mutate the text and attributes. 
            const curEl = curElements[i];

              
            if (!newEl.isEqualNode(curEl) &&
                newEl.firstChild?.nodeValue.trim() !== '') 
            {
                curEl.textContent = newEl.textContent;
            }
                
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr => {
                  curEl.setAttribute(attr.name, attr.value)
                })
            }
              
            })
    }
    
    
    _clear() {
        this._parentElement.innerHTML = '';
        document.querySelector('.spinner-container').classList.add('hidden');
        
        // if (document.querySelector('.intro-content').children.length > 0) {
        //   document.querySelector('.intro-content').innerHTML = '';
        // }
    }
    
    renderSpinner() {
       this._clear();

       document.querySelector('.spinner-container').classList.remove('hidden');
       
    }
    
    renderErrorMessage() {
        
    }
    
    renderMessage() {
        
    }
}




// MODEL BEHAVIOR: 
// The main View class will have the render method, as well as the update method.
// The render method will call the respective view's _generateMarkup method. Create
// a resultsView class as well as a previewView class. The resultsView's parent element
// should be the container that holds the results. The previewView class has no parent
// element. It only has a _generateMarkup class that returns one preview. 

// NOTE: create functions for anything that is repeated. This aligns with the DRY principle. 


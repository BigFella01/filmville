import View from "./View.mjs";

class SearchView extends View {
    _parentElement = window.innerWidth >= 570
    ? document.querySelector('.search-form')
    : document.querySelector('.search-form__slidedown');
    
    getQuery() {
        const query = this._parentElement.querySelector('#search-input').value
        this._clearInput();
        return query;
    }
    
    _clearInput() {
        this._parentElement.querySelector('#search-input').value = '';
        this._parentElement.querySelector('#search-input').blur();
    }

    addHandlerMobileSlideDown() {
        document.querySelector('.nav-right__alt .search-btn').addEventListener('click', function(e) {
            document.querySelector('.search-form__slidedown').style.transform = 'translateY(0%)';
        })
    }

    addHandlerHideMobileSlideDown() {
        window.addEventListener('resize', function() {
            if (document.querySelector('.search-form__slidedown').style.transform = 'translateY(0%)'
               && this.innerWidth >= 570) 
            {
                document.querySelector('.search-form__slidedown').style.transform = 'translateY(-100%)'
            }
        })
    }
     
    addHandlerSearch(controller) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            document.querySelector('.search-form__slidedown').style.transform = 'translateY(-100%)';
            controller();
        })
    }

}

export default new SearchView();


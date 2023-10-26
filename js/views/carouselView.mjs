import View from "./View.mjs";

class carouselView extends View {
    

    toggleSlide() {
        const slides = document.querySelectorAll(".slide");
        const slidesNav = document.querySelector('.slides-nav')
        const indicators = document.querySelectorAll(".nav-indicator");
        
        let curSlide = 0;
        let maxSlide = slides.length - 1;

        const nextSlide = document.querySelector("#slide-arrow-next");
        const prevSlide = document.querySelector("#slide-arrow-prev");

        
        nextSlide.addEventListener("click", function () {
            if (curSlide === maxSlide) {
                curSlide = 0;
            } else {
                curSlide++;
            }


            slides.forEach((slide, index) => {
               slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;

               if (index === curSlide) indicators[index].style.backgroundColor = 'white'
               else indicators[index].style.backgroundColor = 'grey';
            });

        });

        
        prevSlide.addEventListener("click", function () {
            if (curSlide === 0) {
                curSlide = maxSlide
            } else {
                curSlide--
            }


            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;

                if (index === curSlide) indicators[index].style.backgroundColor = 'white'
                else indicators[index].style.backgroundColor = 'grey';
             });
        })

        slidesNav.addEventListener("click", function(e) {
            const targetSlide = e.target.closest('.nav-indicator');
            if (!targetSlide) return;

            curSlide = +targetSlide.dataset.index;
            console.log(curSlide)

            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
 
                if (index === curSlide) indicators[index].style.backgroundColor = 'white'
                else indicators[index].style.backgroundColor = 'grey';
             });

        })
    }
  
  
    addLazyLoad() {
    
      const callback = entries => {
         return entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const element = entry.target;
                  element.style.opacity = '100'
              }
          })
      }
    
      const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.50,
      }
    
      const observer = new IntersectionObserver(callback, options)
    
      const targets = [document.querySelector('.carousel-info'), document.querySelector('.greeting-hero')];
    
      targets.forEach(target => {
          observer.observe(target)
      })
    }
  
}
  

    
    

export default new carouselView();




const slider = {
    slider: null,
    buttons: null,
    lastClickDate: null,
    
    init: function() {
        console.log('slider.js');

        slider.slider = document.querySelector('.slider-testimonials');
        slider.buttons = document.querySelectorAll('.testimonials-bullets span');

        for(let button of slider.buttons) {
            button.addEventListener('click', slider.handleClick);
        }
        
        
    },

    handleClick: function(e) {
        e.preventDefault();
        const currentDate = new Date();
        slider.lastClickDate = currentDate.getTime();

        const clickedButton = e.currentTarget;
        let slideToDisplay = clickedButton.dataset.slideNumber;

        slider.displaySlide(slideToDisplay);
        slider.setCurrentButton(clickedButton);
    },

    displaySlide: function(slideNumber) {
        let slideWidth = slider.slider.offsetWidth;
        let horizontalScroll = slideWidth * slideNumber;
        slider.slider.style.left = - horizontalScroll + 'px';
    },

    setCurrentButton: function(clickedButton) {
        const currentButton = document.querySelector('.testimonials-bullets span.active');
        currentButton.classList.remove('active');
        clickedButton.classList.add('active');
        
    }
  

     
};
document.addEventListener('DOMContentLoaded', slider.init);




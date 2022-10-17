const selector = {
   cardSelector: null,
   button: null,
   titlePremium: null,
   titleFree: null,
    
    init: function() {
        
        selector.cardSelector = document.querySelector('.card-selector');
        selector.titlePremium = document.querySelectorAll('#card-selector-txt-premium');
        selector.titleFree = document.querySelectorAll('#card-selector-txt-free');
        

        selector.button = document.querySelector('.card-selector-button');
        selector.button.style.left = '5px';
        selector.cardSelector.addEventListener('click', selector.handleClick);

      
     },

     handleClick: function() {
        if(selector.button.style.left === '5px') {
            selector.button.style.left = '145px';
        } else {
            selector.button.style.left = '5px';
        }

        selector.button.classList.toggle('card-selector-button-premium');
        selector.button.classList.toggle('card-selector-button-free');

        selector.titlePremium[0].classList.toggle('card-selector-txt-active');
        selector.titleFree[0].classList.toggle('card-selector-txt-active');
     }
     
};
document.addEventListener('DOMContentLoaded', selector.init);
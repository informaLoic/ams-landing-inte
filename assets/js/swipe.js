const swipe = {
    startingX: 0,
    startingY: 0,
    movingX: 0,
    movingY: 0,
    cardWrapper: null,
    cardWrapperContainer: null,
    cardWidth: 0,
    button: null,

    init: function() {
        swipe.cardWrapper = document.querySelector('.card-compare-wrapper');
        swipe.cardWrapper.addEventListener('touchstart', swipe.swipeStart);
        swipe.cardWrapper.addEventListener('touchmove', swipe.swipeMove);
        swipe.cardWrapper.addEventListener('touchend', swipe.swipeEnd);

        swipe.cardWrapperContainer = document.querySelector('.card-compare-wrapper-container');
        swipe.cardWidth = document.querySelector('.card-compare').offsetWidth;

        swipe.button = document.querySelector('.card-selector-button');
     },
     swipeStart: function(e){
        //console.log('touchStart');
        startingX = e.touches[0].clientX ;
		startingY = e.touches[0].clientY ;
        //console.log(swipe.startingX +', '+swipe.startingY);
     },
     swipeMove: function(e){
        //console.log('touchMove');
        movingX = e.touches[0].clientX ;
		movingY = e.touches[0].clientY ;
        //console.log('moving X-Y : ' + swipe.movingX + ', ' + swipe.movingY);
     },
     swipeEnd: function(e){
        console.log('touchEnd');
        if(startingX+20 < movingX){
            console.log('right');
            swipe.cardWrapperContainer.style.left = 0;
            swipe.animateButton();
            
        }   
        else if(startingX-20 > movingX){
            console.log('left');
            swipe.cardWrapperContainer.style.left = - swipe.cardWidth + 'px';
            swipe.animateButton();
            
        }

        if(startingY+20 < movingY){
            console.log('down');
        }   
        else if(startingY-20 > movingY){
        console.log('up');
        }
    
     },
     animateButton: function() {
        if(swipe.button.style.left === '5px') {
            swipe.button.style.left = '145px';
            swipe.cardWrapperContainer.style.left = - swipe.cardWidth + 'px';
        } else {
            swipe.button.style.left = '5px';
            swipe.cardWrapperContainer.style.left = 0;
        }


        swipe.button.classList.toggle('card-selector-button-premium');
        swipe.button.classList.toggle('card-selector-button-free');

        swipe.titlePremium[0].classList.toggle('card-selector-txt-active');
        swipe.titleFree[0].classList.toggle('card-selector-txt-active');
     },

     
};
document.addEventListener('DOMContentLoaded', swipe.init);
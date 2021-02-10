var winHeight = $(window).height()
$(window).resize(function() {
    winHeight = $(window).height()
})
var lastScrollPos = $(document).scrollTop()
var scrollPos = $(this).scrollTop()

function skewPage(formula) {
    if( formula > 45)
        $( '#page' ).css('transform', 'skew(0, ' + 45 + 'deg)')
    else if( formula < -45)
        $( '#page' ).css('transform', 'skew(0, ' + -45 + 'deg)')
    else
        $( '#page' ).css('transform', 'skew(0, ' + formula + 'deg)')
}

$(document).scroll(function() {
    scrollPos = $(this).scrollTop()
    
    parallax('.parallax', 65)
    
    function parallax(subject, division) {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + scrollPos && topPos > scrollPos - winHeight) {
                $(this).css({
                    'transform':'scale(1.2) translate(0%, ' + (((scrollPos - topPos) / division) + 5) + '%'
                })
            }
        })
    }

    parallaxUnscaled('.parallaxUnscaled', 65)

    function parallaxUnscaled(subject, division) {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + scrollPos && topPos > scrollPos - winHeight) {
                $(this).css({
                    'transform':'scale(1.1) translate(0%, ' + (((scrollPos - topPos) / division) + 5) + '%'
                })
            }
        })
    }

    // setTimeout( () => {
    //     lastScrollPos = $( document ).scrollTop()
    // }, 100)
    
    //skewPage()
    // console.log('last = ' + lastScrollPos / 100)
    // console.log('cur = ' + scrollPos / 100)
    // console.log('culc = ' + (scrollPos / 100) - (lastScrollPos / 100))
})
//setInterval( skewPage(), 300)

var checkScrollSpeed = (function(settings){
    settings = settings || {};
  
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
  
    function clear() {
      lastPos = null;
      delta = 0;
    }
  
    clear();
    
    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

// listen to "scroll" event
window.onscroll = function(){
    skewPage( checkScrollSpeed() / 20 )
};
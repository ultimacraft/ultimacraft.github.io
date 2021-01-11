
var winHeight = $(window).height()
$(window).resize(function() {
    winHeight = $(window).height()
})


$(document).scroll(function() {
    var scrollPos = $(this).scrollTop()
    
    parallax('.parallax', 65)
    
    function parallax(subject, division) {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            $(this).css({
                'transform':'scale(1.2) translate(0%, ' + (((scrollPos - topPos) / division) + 5) + '%'
            })
        })
    }

    fade('.block-light')
    fade('.block-panorama')
    fade('.block-with-image')
    fade('footer')

    function fade(subject) {
        $(subject).each( function() {
            if(scrollPos + winHeight / 1.3 >= $(this).offset().top) {
                $(this).animate({opacity: 1}, 1000)
            }
        })
    }
})



$(document).ready(function() {

    var arrowDown = '#arrowDownBox'
    var footerNavLink = '.navItem'

    var sliderBig = 'sliderBox'
    var sliderSmall = 'sliderSmallBox'
    var sliderImageBox = 'imgBox'
    var sliderIndex = 'slider'

    var fadeTime_Appearing = 1500
    var fadeTime_MenuList = 500    



    fade2('.block-light')
    fade2('.block-panorama')
    fade2('.block-with-image')
    fade2('footer')

    function fade2(subject) {
        var scrollPos = $(this).scrollTop()
        $(subject).each( function() {
            if(scrollPos + winHeight / 1.3 < $(this).offset().top) {
                $(this).animate({opacity: 0})
            }
        })
    }

    // smooth scroll
    $(arrowDown).on('click','a', function (event) {
        event.preventDefault()
        var id  = $(this).attr('href'),
            top = $(id).offset().top - $('.menuBar').height() + 5
        $('body,html').animate({scrollTop: top}, fadeTime_Appearing)
    })
    $(footerNavLink).on('click','a', function (event) {
        event.preventDefault()
        var id  = $(this).attr('href'),
            top = ($(id).offset().top) - $('.menu').height() + 5
        $('body,html').animate({scrollTop: top}, fadeTime_Appearing)
    })

    // slider big
    slider(sliderBig, sliderImageBox, 15000)

    function slider(mainSubject, subSubject, delay) {
        var slides = document.querySelectorAll(String('.' + mainSubject + ' .' + subSubject))
        var currentSlide = 0
        slides[currentSlide].className = String(subSubject + ' showing')
        setInterval(nextSlide, delay)

        $('#logoCoverBlock .logoCover').on('click', function(){
            nextSlide()
        })

        function nextSlide() {
            slides[currentSlide].className = String(subSubject)
            currentSlide = (currentSlide+1)%slides.length
            slides[currentSlide].className = String(subSubject + ' showing')
        }
    }

    // slider small
    var elemSliderSmall = document.getElementsByClassName(sliderSmall)
    for(let i = 0; i < elemSliderSmall.length; i++) {
        elemSliderSmall[i].id = sliderIndex + i
        sliderSmallForAll(sliderIndex + i, sliderImageBox, 5000)
    }
    function sliderSmallForAll(mainSubject, subSubject, delay) {
        var slides = document.querySelectorAll(String('#' + mainSubject + ' .' + subSubject))
        var currentSlide = 0
        slides[currentSlide].className = String(subSubject + ' showing')
        setInterval(nextSlide, delay)

        function nextSlide() {
            slides[currentSlide].className = String(subSubject)
            currentSlide = (currentSlide+1)%slides.length
            slides[currentSlide].className = String(subSubject + ' showing')
        }
    }

    // menu
    var menuHeight = $('.menuBar').height()
    var blockTop = $('#headerSlider').height()
    var blockTopSmall = $('#headerSmallerSlider').height()
    $(window).resize(function() {
        menuHeight = $('.menuBar').height()
        blockTop = $('#headerSlider').height()
        blockTopSmall = $('#headerSmallerSlider').height()
    })
    $(window).on('load scroll', function() {
        var top = $(window).scrollTop()
        if (top >= blockTop - menuHeight || top >= blockTopSmall - menuHeight) {
            CountDown()
        } else {
            CountUp()
        }
    })
    function CountUp() {
        $('.menuBar').css({
            'top':'-55px'
        })
        $('.menuBar .subMenu').fadeOut(fadeTime_MenuList)
    }
    function CountDown() {
        $('.menuBar').css({
            'top':'0'
        })
    }



    var subMenuFixed = '.menuBar .menuLink p'
    var subMenuStatic = '.menuBarSecond .menuLink p'

    $(subMenuFixed).on('click', function(){
        $('.menuBar .subMenu').fadeToggle(fadeTime_MenuList)
        $(this).toggleClass('activeList')
    })
    $(subMenuStatic).on('click', function(){
        $('.menuBarSecond .subMenu').fadeToggle(fadeTime_MenuList)
        $(this).toggleClass('activeList')
    })

    $(window).resize(function() {
        var subMenuWidth = $('.menuBar .menuLink .subMenu').width()
        
        $(subMenuFixed).width(subMenuWidth)
        $(subMenuStatic).width(subMenuWidth)
    })
    var subMenuWidth = $('.menuBar .menuLink .subMenu').width()
        
    $(subMenuFixed).width(subMenuWidth)
    $(subMenuStatic).width(subMenuWidth)

    //$('#closeZoom').width($('#fullScreenImg').width())
    //$('#closeZoom').height($('#fullScreenImg').height())
    //var imgTop = $('#fullScreenImg').offset().top()
    //var imgRight = $('#fullScreenImg').offset().right()

    // $(window).resize(function() {
    //     imgTop = $('#fullScreenImg').top()
    //     imgRight = $('#fullScreenImg').right()
    // })
    
    // $(document).scroll(function() {
    //     console.log(imgTop)
    //     console.log(imgRight)
    //     $('#closeZoom').css({
    //         'top':'' + imgTop + 'px',
    //         'right':'' + imgRight + 'px'
    //     })
    // })

    //$('#fullScreenBlock').fadeOut(1)

    $('img').click(function(event){

        var imgSrc = $(this).attr('src')

        console.log(imgSrc)
        //$("html,body").css("overflow-y","hidden")
        $('#fullScreenBlock').fadeToggle(500)
        $('#fullScreenImg')[0].src = imgSrc
        var description = $(this).siblings(".desc")
        $('#fullScreenText').text($(description).text())

    })

    // $('#closeZoom').click(function(){

    //     $("html,body").css("overflow-y","auto")
    //     $('#fullScreenBlock').fadeToggle(500)

    // })
})
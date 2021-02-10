var theme = true

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

    var arrowDown = '#arrow_down_box'
    var footerNavLink = '.nav_item'

    var sliderBig = 'slider_box'
    var sliderSmall = 'slider_small_box'
    var sliderImageBox = 'img_box'
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

    // slider big
    slider(sliderBig, sliderImageBox, 15000)

    function slider(mainSubject, subSubject, delay) {
        var slides = document.querySelectorAll(String('.' + mainSubject + ' .' + subSubject))
        var currentSlide = 0
        slides[currentSlide].className = String(subSubject + ' showing')
        setInterval(nextSlide, delay)

        // $('#logo_cover_block .logo_cover').on('click', function(){
        //     nextSlide()
        // })

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

    //var isOn = false
    function zoomImgShow(src, desc) {
        //$("html,body").css("overflow-y","hidden")
        $('#fullScreenBlock').fadeToggle(500)
        $('#fullScreenImg')[0].src = src
        
        $('#fullScreenText').text($(desc).text())
    }
    $('.img_box img').click(function(event){
        let imgSrc = $(this).attr('src')
        let description = $(this).siblings(".desc")
        zoomImgShow(imgSrc, description)
    })
    $('#fullScreenBlock').click(function(event){
        let imgSrc = $('#fullScreenImg').attr('src')
        let description = $('#fullScreenText').siblings(".desc")
        if (event.target.id != 'fullScreenText') {
            zoomImgShow(imgSrc, description)
        }
    })

    // $('#closeZoom').click(function(){

    //     $("html,body").css("overflow-y","auto")
    //     $('#fullScreenBlock').fadeToggle(500)

    // })
    //var now = new Date();
    // var colorD = '.text h1, .text p, .columns p, .columns ul li, .block-light h1'
    // var color4 = '.textBox'
    // var color3 = '.block-light, body'

    // function lightTheme() {
    //     $(colorD).css('color', '#444444')
    //     $(color4).css('background-color', '#ffffff')
    //     $(color3).css('background-color', '#eeeeee')
    //     $('.button, .buttonBig').on('mouseenter', function(){
    //         $(this).css('color', '#fff')
    //     })
    // }
    // function darkTheme() {
    //     $(colorD).css('color', '#dddddd')
    //     $(color4).css('background-color', '#444444')
    //     $(color3).css('background-color', '#333333')
    //     $('.button, .buttonBig').on('mouseenter', function(){
    //         $(this).css('color', '#333')
    //     })
    // }
    // $('.button, .buttonBig').on('mouseout', function(){
    //     $(this).css('color', '#38A0FF')
    // })

    // if(now.getHours() >= whenDarkOutside) {
    //     theme = true
    //     darkTheme()
    // }
    // else {
    //     theme = false
    //     lightTheme()
    // }

    $('.theme').click(function(){
        if(theme == true) {
            theme = false
            lightTheme()
        }
        else {
            theme = true
            darkTheme()
        }
        console.log('Dark Theme = ' + darkTheme)
    })
    
    $('#cmp').css({
        'max-width':'' + $('.compareSlide').val() + '%'
    })
    $('.compareSlide').on('input',function() {
        //console.log($('.compareSlide').val())
        //r1.style.width = String(slider.value) + 'em'
        //$('#cmp').width() = ($('.compareSlide').value) + 'vw'
        $('#cmp').css({
            'max-width':'' + $('.compareSlide').val() + '%'
        })
    })
})
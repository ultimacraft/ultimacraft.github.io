$(document).ready(function() {

    var sliderBig = 'slider_box'
    var sliderSmall = 'slider_small_box'
    var sliderImageBox = 'img_box'
    var sliderIndex = 'slider'

    // slider big
    slider(sliderBig, sliderImageBox, 15000)

    function slider(mainSubject, subSubject, delay) {
        var slides = document.querySelectorAll(String('.' + mainSubject + ' .' + subSubject))
        var currentSlide = 0
        slides[currentSlide].className = String(subSubject + ' showing')
        setInterval( nextSlide, delay )

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
})
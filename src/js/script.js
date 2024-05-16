let slides = ['./src/assets/slide1.png', './src/assets/slide2.jpg', './src/assets/slide3.jpg', './src/assets/slide4.jpg'];
let index = 0;
let delay = 4000;

function slideshow(){
    document.getElementById("imgBanner").src=slides[index];
    index++;

    if (index == slides.length){
        index = 0;
    }
    setTimeout('slideshow()', delay);
}

slideshow();
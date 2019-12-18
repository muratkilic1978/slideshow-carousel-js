let slideIndex = 0;
    let timer;
    const myImages = [
        {
            "img": "http://localhost/slideshow-carousel-js/img/400-800x800.jpg"
            , "caption": "Hello World Image 1"
    }
        , {
            "img": "http://localhost/slideshow-carousel-js/img/429-800x800.jpg"
            , "caption": "Hello World Image 2"
    }
        , {
            "img": "http://localhost/slideshow-carousel-js/img/431-800x800.jpg"
            , "caption": "Hello World Image 3"
    }
 ];
    builder();

    function builder() {
        for (let x = 0; x < myImages.length; x++) {
            let slide = document.createElement("div");
            slide.setAttribute("class", "mySlide fade");
            let img = document.createElement("img");
            img.setAttribute("src", myImages[x].img);
            let cap = document.createElement("div");
            cap.classList.add("caption");
            cap.innerText = myImages[x].caption;
            slide.appendChild(img);
            slide.appendChild(cap);
            document.querySelector(".slideContainer").appendChild(slide);
            console.log(slide);
            let span = document.createElement("span");
            span.classList.add("dot");
            span.addEventListener("click", function () {
                moveSlide(x);
            })
            document.querySelector(".indicator").appendChild(span);
        }
        playSlides();
    }

    function playSlides() {
        const slides = document.querySelectorAll(".mySlide");
        const dots = document.querySelectorAll(".dot");
        const active = document.querySelector(".active");
        //console.log(slides);
        //console.log(dots);
        //console.log(active);
        if (slideIndex + 1 > slides.length) {
            slideIndex = 0;
        }
        slides.forEach(function (el) {
            el.style.display = "none";
        })
        slides[slideIndex].style.display = "block";
        slideIndex++;
        console.log(slideIndex);
        timer = setTimeout(playSlides, 3000);
    }

    function moveSlide(num) {
        slideIndex = num;
        clearTimeout(timer);
        playSlides();
    }
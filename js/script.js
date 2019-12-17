    let slideIndex = 0;
    let timer;
    const myImages = [
        {
            "img": "https://via.placeholder.com/250/09f?text=image1"
            , "caption": "Hello World Image 1"
    }
        , {
            "img": "https://via.placeholder.com/250/e4e?text=image2"
            , "caption": "Hello World Image 2"
    }
        , {
            "img": "https://via.placeholder.com/250/1f1?text=image3"
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
            let span = document.createElement("span");
            span.classList.add("dot");
            span.addEventListener("click",function(){
                moveSlide(x);
            })
            document.querySelector(".indicator").appendChild(span);
        }
        
    }

   
let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 20);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 20);
});
}


//for event section

let thumbnailz = document.getElementsByClassName('thumbnails');
let sliders = document.getElementById('sliders');

let buttonRights = document.getElementById('slides-right');
let buttonLefts = document.getElementById('slides-left');

buttonLefts.addEventListener('click', function(){
    sliders.scrollLeft -= 125;
})

buttonRights.addEventListener('click', function(){
    sliders.scrollLeft += 125;
})

const maxScrollLefts = sliders.scrollWidth - sliders.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + sliders.scrollLeft);

//AUTO PLAY THE sliders 
function autoPlays() {
    if (sliders.scrollLeft > (maxScrollLefts - 1)) {
        sliders.scrollLeft -= maxScrollLefts;
    } else {
        sliders.scrollLeft += 1;
    }
}
let plays = setInterval(autoPlays, 20);

// PAUSE THE SLIDE ON HOVER
for (var j=0; j < thumbnailz.length; j++){

thumbnailz[j].addEventListener('mouseover', function() {
    clearInterval(plays);
});

thumbnailz[j].addEventListener('mouseout', function() {
    return plays = setInterval(autoPlays, 20);
});
}



//for our team section



const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');

// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);

        
        storeProducts.forEach((product)=> {
                 console.log(product);
                 console.log(product.classList);
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            
        });
    });
};

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}
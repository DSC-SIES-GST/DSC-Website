// For popovers
$(function () {
    $('[data-toggle="popover"]').popover()
})


//for our team section

const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;


        storeProducts.forEach((product) => {
            if (product.classList.contains(filter)) {
                product.style.display = 'flex'
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
    productName.forEach(function (product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}

//for our events section

const Ebtns = document.querySelectorAll('.btn');
const storeEvents = document.querySelectorAll('.store-event');

for (i = 0; i < Ebtns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;


        storeEvents.forEach((event) => {
            if (event.classList.contains(filter)) {
                event.style.display = 'flex'
            } else {
                event.style.display = 'none'
            }

        });
    });
};

// SEARCH FILTER
const Esearch = document.getElementById("search");
const EproductName = document.querySelectorAll(".Event-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function (event) {
        const item = event.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            event.parentElement.parentElement.style.display = "block"
        } else {
            event.parentElement.parentElement.style.display = "none"
        }
    })
}
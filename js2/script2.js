let productsArray = [
    {
        id: 1,
        Name: 'SPORT SHOES',
        Detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima perspiciatis tempora harum illo in debitis .',
        Price: 53,
        Adress: "../images/1.png",
    },
    {
        id: 2,
        Name: 'MEN SHOES',
        Detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima perspiciatis tempora harum illo in debitis .',
        Price: 87,
        Adress: "../images/2.png",
    },
    {
        id: 3,
        Name: 'BOOTS',
        Detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima perspiciatis tempora harum illo in debitis .',
        Price: 64,
        Adress: "../images/3.png",
    },
    {
        id: 4,
        Name: 'WOMEN SHOES',
        Detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima perspiciatis tempora harum illo in debitis .',
        Price: 78,
        Adress: "../images/4.png",
    },
];

let ProductDescription = document.querySelector('.description');
let backBtn = document.querySelector('.back-button');
let locationSearch = window.location.search;
let locationSearchParams = new URLSearchParams(locationSearch);
let productID = +locationSearchParams.get('id');
let product;
let html;

backBtn.addEventListener('click', () => {
    window.history.back();
})
window.addEventListener('load', showProduct);

function showProduct() {
    let product = productsArray.find((prod) => {
        return prod.id === productID;
    })

    if (product) {
        html = '<div class="description-left">';
        html += '<h3 class="details-title">' + product.Name + '</h3>';
        html += '<p class="details-text">' + product.Detail + '</p>'
        html += '<span class="details-price">' + `$ ${product.Price}` + '</span>'
        html += '</div>';
        html += '<div class="description-right">';
        html += '<img src="' + product.Adress + '" alt="image" class="right-image">'
        html += '</div>'
        ProductDescription.insertAdjacentHTML('beforeend', html)
    }
    else {
        window.location.href = '../404/404.html'
    }

}
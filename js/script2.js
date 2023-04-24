let products = [
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
// let productId = +window.location.search.slice(4);
let locationSearch = location.search;
let locationSearchParams = new URLSearchParams(locationSearch);
let productId = +locationSearchParams.get('id');
console.log(productId);
let description = window.document.querySelector('.description')
let backButton = window.document.querySelector('.back-button');

backButton.addEventListener('click', backBtnHandler);
showSpecialProduct();

function backBtnHandler() {
    window.history.back();
}

function showSpecialProduct() {
    let product = products.find(function (item) {
        return item.id === productId;
        
    });
    if (!product) {
        // alert('Not Found');
        window.location.href = "../404/404.html"
    }
    else {
        let html = '<div class="description-left">';
        html += '<h3 class="details-title">' + product.Name + '</h3>'
        html += '<p class="details-text">' + product.Detail + '</p>'
        html += '<span class="details-price">' + '$' + product.Price + '</span>'
        html += '</div>';
        html += ' <div class="description-right">'
        html += '  <img src="' + product.Adress + '" alt="image" class="right-image">'
        html += '</div>';
        description.insertAdjacentHTML('beforeend', html);
    }

}
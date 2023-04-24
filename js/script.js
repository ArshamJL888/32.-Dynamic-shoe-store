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



let productsContent = window.document.querySelector('.products-content');

showProducts();

function showProducts() {
    productsContent.textContent = "";

    productsArray.forEach(function(product){
        let html = '<div class="product-item">';
        html += '<h3 class="product-title">' + product.Name + '</h3>';
        html += '<p class="product-details">' + product.Detail + '</p>';
        html += '<div class="product-image">';
        html += '<img src="' + product.Adress + '"class="image" alt="image">';
        html += '</div>';
        html += '<div class="product-info">';
        html += '<span class="product-price">' + '$' + product.Price + '</span>';
        html += '<a target="_blank" href="product.html?id=' + product.id +  '"class="product-link">SEE MORE</a>';
        html += '</div>' + '</div>';
        productsContent.insertAdjacentHTML('beforeend', html);
    })
}
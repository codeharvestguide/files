
function displayProductHandler() {
    
    let allProducts = document.querySelectorAll('.product');
    if (allProducts.length === 0) return;

    allProducts.forEach((product) => {
        product.addEventListener('click', function () {
            let productName = product.querySelector('.product-title');
            let productImage = product.querySelector('img').getAttribute('src');
            let productPrice = product.querySelector('.box-p').innerText.replace('Price: ', '');

            localStorage.setItem('itemName', productName.textContent);
            localStorage.setItem('itemImage', productImage);
            localStorage.setItem('itemPrice', productPrice);
        })
    })
}
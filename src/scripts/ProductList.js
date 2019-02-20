import fetchProductData from "./ProductData.js"
import productHTML from "./Product.js"

const printFullProduct = () => {
    fetchProductData()
    .then(parsedResponses => {
        parsedResponses.forEach(product => {
            document.querySelector("#product").innerHTML += productHTML(product.title, product.description, product.price, product.quantity, product.image);
    })
})}

export default printFullProduct;
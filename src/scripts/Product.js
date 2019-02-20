import printReview from "./ReviewList";


const productHTML = (name, description, price, quantity, image) => {
    // printReview();
    // console.log(printReview());
    let HTMLString = `<h1>${name}</h1><p>${description}</p><p>${price}</p><p>${quantity}</p><img url="${image}">` + printReview();
    console.log(HTMLString);
    return HTMLString;

}

export default productHTML
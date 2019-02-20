import reviewHTML from "./Review.js";
import reviewData from "./ReviewData.js";


const printReview = () => {
    reviewData.forEach(review => {
    return reviewHTML(review);
})}

export default printReview;
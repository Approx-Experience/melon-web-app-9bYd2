import './SingleProduct.css';

// Task called Item Card Component
const SingleProduct = ({ image = {
  url: "https://terrathread.com/cdn/shop/products/blackcottontshirts.jpg?v=1684794379",
  alt: "Person in a shirt",
}, productTitle, price, stylesQty, isNewArrival }) => {
  return (
    <div id="single-product-content-area">
      <img src={image.url} alt={image.alt} />
      <h5>{productTitle}</h5>
      <p id="price">{price}</p>
      <p>{stylesQty} styles</p>
      {isNewArrival && <p className="new-arrival">New Arrival</p>}
    </div>
  );
}

export default SingleProduct;

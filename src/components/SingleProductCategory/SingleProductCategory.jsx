import "./SingleProductCategory.css";

const SingleProductCategory = ({image, categoryText}) => {
  console.log({image, categoryText});
  return (
    <div className="single-product-category-container">
      <div>
        <img src={image?.url} alt={image?.alt} />
      </div>
      <div className="single-product-category-text">
        <p>{categoryText}</p>
      </div>
    </div>
  )
}

export default SingleProductCategory;
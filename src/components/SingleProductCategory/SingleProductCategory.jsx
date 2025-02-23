const SingleProductCategory = ({image, categoryText}) => {
  return (
    <div className="single-product-category-container">
      <div>
        <img src={image.url} alt={image.alt} />
      </div>
      <div className="single-product-category-text">
        <h2>{categoryText}</h2>
      </div>
    </div>
  )
}

export default SingleProductCategory;
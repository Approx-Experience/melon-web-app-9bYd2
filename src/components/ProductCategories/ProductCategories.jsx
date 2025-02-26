import SingleProductCategory from "../SingleProductCategory/SingleProductCategory";
import "./ProductCategories.css";
const ProductCategories = ({ title, subtitle, categoryLarge1, categoryLarge2, categorySmallTop, categorySmallBottom }) => {
  return (
    <div id="product-categories-container">
      <div id="product-categories-header">
        <h3>{title}</h3>
        <h6>{subtitle}</h6>
      </div>
      <div id="product-categories">
        <div id="product-categories-large">
          <SingleProductCategory {...categoryLarge1} />
          <SingleProductCategory {...categoryLarge2} />
        </div>
        <div id="product-categories-small">
          <SingleProductCategory {...categorySmallTop} />
          <SingleProductCategory {...categorySmallBottom} />
        </div>
      </div>
    </div>
  )
}

export default ProductCategories;
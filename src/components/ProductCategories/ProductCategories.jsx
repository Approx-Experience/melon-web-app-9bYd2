import SingleProductCategory from "../SingleProductCategory/SingleProductCategory";

const ProductCategories = ({categoryLarge1, categoryLarge2, categorySmallTop, categorySmallBottom}) => {
  return (
    <div className="product-categories-container">
      <SingleProductCategory {...categoryLarge1} />
      <SingleProductCategory {...categoryLarge2} />
      <SingleProductCategory {...categorySmallTop} />
      <SingleProductCategory {...categorySmallBottom} />
    </div>
  )
}

export default ProductCategories;
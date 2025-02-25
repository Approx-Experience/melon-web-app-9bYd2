import SingleProduct from "../SingleProduct/SingleProduct";
import './bestSellers.css';

const BestSellers = ({ productList, title, subtitle }) => {
  console.log({title, subtitle})
  const productListMapped = productList.map((product, index) => {
    return (
      <SingleProduct {...product} key={index} />
    )
  })
  return (
    <div id="best-sellers-container">
      <div id="product-categories-header">
        <h3>{title}</h3>
        <h6>{subtitle}</h6>
      </div>
      {productListMapped}
    </div>
  )
}

export default BestSellers;
import SingleProduct from "../SingleProduct/SingleProduct";
import './bestSellers.css';

const BestSellers = ({ productList }) => {

  const productListMapped = productList.map((product, index) => {
    return (
      <SingleProduct {...product} key={index} />
    )
  })
  return (
    <div id="best-sellers-container">
      {productListMapped}
    </div>
  )
}

export default BestSellers;
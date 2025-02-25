import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import BestSellers from "./components/BestSellers/BestSellers";
import { bannerProps, productCategoryProps, productsProps, bestSellersProps } from "./mocks/mocks"


const Root = () => {
  return (
    <div>
      <Outlet />
      <Banner {...bannerProps} />
      <ProductCategories {...productCategoryProps} />
      <BestSellers productList={productsProps} {...bestSellersProps} />
    </div>
  );
};

export default Root;

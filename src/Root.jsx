import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import BestSellers from "./components/BestSellers/BestSellers";
import {bannerProps, productCategoryProps, products} from "./mocks/mocks"


const Root = () => {
  return (
    <div>
      <Outlet />
      <Banner {...bannerProps} />
      <ProductCategories {...productCategoryProps} />
      <BestSellers productList={products} />
    </div>
  );
};

export default Root;

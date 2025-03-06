import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import BestSellers from "./components/BestSellers/BestSellers";
import Navbar from "./components/Navbar/Navbar";
import { bannerProps, productCategoryProps, productsProps, bestSellersProps } from "./mocks/mocks"


const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Banner {...bannerProps} />
      <ProductCategories {...productCategoryProps} />
      <BestSellers productList={productsProps} {...bestSellersProps} />
    </div>
  );
};

export default Root;

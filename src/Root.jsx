import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import ProductCategories from "./components/ProductCategories/ProductCategories";

const bannerProps = {
  collectionName: "Summer 2024",
  title: "new collection",
  subtitle: "shorts, tees, tanks, & more!",
  img: {
    url: "https://img.freepik.com/premium-photo/group-children-lying-green-grass-park-interaction-children_109285-199.jpg",
    alt: "Summer Collection Banner"
  },
  btnText: "Shop Now"
}

const categoryLarge1 = {
  image: {
    url: "https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_960_720.jpg 1x, https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_1280.jpg 2x",
    alt: "Person in a shirt"
  },
  categoryText: "Shirts"
};

const categoryLarge2 = {
  image: {
    url: "https://example.com/shorts.jpg",
    alt: "Person in a pair of shorts"
  },
  categoryText: "Shorts"
};

const categorySmallTop = {
  image: {
    url: "https://example.com/athleisure.jpg",
    alt: "Person in athleisure wear"
  },
  categoryText: "Athleisure"
}

const categorySmallBottom = {
  image: {
    url: "https://example.com/hats.jpg",
    alt: "Person wearing a hat"
  },
  categoryText: "Hats"
};

const productCategoryProps = {
  categoryLarge1,
  categoryLarge2,
  categorySmallTop,
  categorySmallBottom
}

const Root = () => {
  return (
    <div>
      <Outlet />
      <Banner {...bannerProps} />
      <ProductCategories {...productCategoryProps} />
    </div>
  );
};

export default Root;

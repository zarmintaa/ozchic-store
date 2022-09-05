import InspirationHome from "../components/home/InspirationHome";
import LookbookHome from "../components/home/LookbookHome";
import NewArrivalsHome from "../components/home/NewArrivalsHome";
import OzchicPeople from "../components/home/OzchicPeople";
import ShopByCategory from "../components/home/ShopByCategory";
import SliderHome from "../components/home/SliderHome";
import { Fragment, useEffect, useState } from "react";
import Seo from "../components/utils/Seo";

const getFeaturedProducts = async () => {
  const response = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/product/all/featured"
  );
  const data = await response.json();
  return data.data;
};

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getFeaturedProducts().then((data) => {
      setFeaturedProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Seo
        description={"Come to my store for great apparel!"}
        url={"https://ozchic-store.vercel.app/"}
        title={"Ozchic Store"}
      />
      <SliderHome />
      <LookbookHome />
      <NewArrivalsHome dataProducts={featuredProducts} />
      <ShopByCategory />
      <OzchicPeople />
      <InspirationHome />
    </Fragment>
  );
}

/*export async function getStaticProps(context) {
  const res = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/product/all/featured"
  );
  let data;

  if (res.ok) {
    console.log("ok");
    data = await res.json();
  } else {
    data = { data: [] };
  }

  return {
    props: {
      dataProducts: data.data,
    },
  };
}*/

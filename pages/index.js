import InspirationHome from "../components/home/InspirationHome";
import LookbookHome from "../components/home/LookbookHome";
import NewArrivalsHome from "../components/home/NewArrivalsHome";
import OzchicPeople from "../components/home/OzchicPeople";
import ShopByCategory from "../components/home/ShopByCategory";
import SliderHome from "../components/home/SliderHome";
import { Fragment } from "react";
import Seo from "../components/utils/Seo";

export default function Home({ dataProducts }) {
  return (
    <Fragment>
      <Seo
        description={"Come to my store for great apparel!"}
        url={"https://ozchic-store.vercel.app/"}
        title={"Ozchic Store"}
      />
      <SliderHome />
      <LookbookHome />
      <NewArrivalsHome dataProducts={dataProducts} />
      <ShopByCategory />
      <OzchicPeople />
      <InspirationHome />
    </Fragment>
  );
}

export async function getStaticProps(context) {
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
}

import { useState, useEffect, Fragment } from "react";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/UI/Loading";
import ProductDetail from "../../components/gallery/ProductDetail";
import Seo from "../../components/utils/Seo";
import AlertContainer from "../../components/alert/AlertContainer";

const DetailProduct = ({ dataProduct }) => {
  const [product, setProduct] = useState(dataProduct);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  return (
    <Fragment>
      {product && (
        <div>
          <Seo
            description={product.description}
            url={`https://ozchic-store.vercel.app/gallery/${product.id}`}
            title={`Ozchic Store | ${product.name}`}
          />
          <section className="text-gray-700 body-font bg-white my-5 lg:my-10">
            {isLoading && <Loading />}
            {!isLoading && <ProductDetail product={product} />}
          </section>
        </div>
      )}
      <AlertContainer />
    </Fragment>
  );
};

export default DetailProduct;

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/product/" + id
  );
  const data = await response.json();
  const dataProduct = data.data;

  return {
    props: {
      dataProduct,
    },
  };
}

export async function getStaticPaths(context) {
  const response = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/product/all"
  );

  const data = await response.json();
  const paths = data.data.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

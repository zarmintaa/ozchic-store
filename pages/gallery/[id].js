import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  isFavProductExist,
  setFavProduct,
  unsetFavProduct,
} from "../../lib/cart-product";
import Loading from "../../components/UI/Loading";

import ProductDetail from "../../components/gallery/ProductDetail";
import Seo from "../../components/utils/Seo";

const DetailProduct = ({ dataProduct }) => {
  const router = useRouter();
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
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-5 mx-auto">
              {isLoading && <Loading />}
              {!isLoading && <ProductDetail product={product} />}
            </div>
          </section>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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

import { Fragment, useCallback, useEffect, useState } from "react";
import Products from "../../components/gallery/Product";
import Loading from "../../components/UI/Loading";
import SidebarMenu from "../../components/gallery/SidebarMenu";
import Seo from "../../components/utils/Seo";

const Gallery = ({ dataProducts }) => {
  const [products, setProducts] = useState(dataProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [categoryProduct, setCategoryProduct] = useState("");

  const fetchProductHandler = useCallback(
    async (category) => {
      setIsLoading(true);
      const res = await fetch(
        `https://ozchic-store-api.herokuapp.com/api/v1/product/category/${category}`
      );
      const result = await res.json();
      setProducts(result.data);

      if (category === "") {
        setProducts(dataProducts);
      }

      setIsLoading(false);
    },
    [dataProducts]
  );

  const searchChangeHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const search = e.target.value;
    const res = await fetch(
      `https://ozchic-store-api.herokuapp.com/api/v1/product?title=${search}`
    );
    const result = await res.json();
    if (search === "") {
      setProducts(dataProducts);
    }
    setProducts(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductHandler(categoryProduct);
  }, [fetchProductHandler, categoryProduct]);

  console.log({ products, categoryProduct });
  return (
    <Fragment>
      <Seo
        description={"Come to my store for great apparel!"}
        url={"https://ozchic-next.vercel.app/"}
        title={"Ozchic Store | Gallery"}
      />
      <div className="flex">
        {!sidebarToggle && (
          <div className="relative">
            <div className="flex absolute w-32 gap-2 items-center px-2 py-2 justify-center bg-teal-500 text-white rounded-md mt-2 ml-5">
              <button
                onClick={() => setSidebarToggle(!sidebarToggle)}
                type="button"
              >
                Open Sidebar
              </button>
            </div>
          </div>
        )}
        {sidebarToggle && (
          <SidebarMenu
            searchChangeHandler={searchChangeHandler}
            setSidebarToggle={setSidebarToggle}
            setToggle={setToggle}
            sidebarToggle={sidebarToggle}
            toggle={toggle}
            setCategoryProduct={setCategoryProduct}
          />
        )}
        <div className="bg-gray-100 w-full">
          {isLoading && <Loading />}

          <div
            className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-5 gap-5  overflow-auto justify-center items-center ${
              !sidebarToggle ? "mt-8" : ""
            }`}
          >
            {products.map((item) => (
              <Products item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;

export async function getStaticProps() {
  const res = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/product/all"
  );

  let data;

  if (res.ok) {
    data = await res.json();
  } else {
    data = {
      data: [],
    };
  }

  return {
    props: {
      dataProducts: data.data,
    },
  };
}

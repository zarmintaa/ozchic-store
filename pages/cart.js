import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderForm from "../components/cart/OrderForm";
import ListCartOrder from "../components/cart/ListCartOrder";
import Order from "../components/cart/Order";
import Seo from "../components/utils/Seo";
import Loading from "../components/UI/Loading";
import {
  deleteAuthFromLocalStorage,
  getAuthFromLocalStorage,
} from "../lib/AuthHelper";
import {
  AddProductToCart,
  DeleteCartUser,
  deleteProductCartUser,
  getCartUser,
} from "../lib/CartHandler";
import AlertContainer from "../components/alert/AlertContainer";
import { set } from "mongoose";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [price, setTotalPrice] = useState(0);
  const [orderToggle, setOrderToggle] = useState(false);
  const [nameOrder, setNameOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // input form
  const nameInput = useRef();
  const addressInput = useRef();
  const phoneInput = useRef();
  const router = useRouter();

  const setInitialProducts = useCallback(async () => {
    setLoading(true);
    let allCart = await getCartUser();
    if (!allCart) {
      setProducts([]);
      setTotalItems(0);
      setTotalPrice(0);
      setLoading(false);
      return;
    }
    let totalItem = 0;
    let totalPrice = 0;
    let nameOrderTitle = "";
    allCart.map((product) => {
      totalItem += +product?.quantity;
      totalPrice += +product?.total;
      nameOrderTitle += `[${product.name} : ${product.count} pcs] `;
    });
    setTotalItems(totalItem);
    setTotalPrice(totalPrice);
    setNameOrder(nameOrderTitle);
    setProducts(allCart);
    setLoading(false);
  }, []);

  useEffect(() => {
    setInitialProducts();
  }, [setInitialProducts]);

  const deleteCart = async (id) => {
    const response = await DeleteCartUser(id);

    setInitialProducts().then(() => {
      toast.success("Sukses menghapus produk!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (products.length === 0) {
      toast.error("Maaf keranjang kosong!, tidak dapat melakukan pemesanan.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      const name = nameInput.current.value;
      const address = addressInput.current.value;
      const phone = phoneInput.current.value;
      const data = {
        name,
        address,
        phone,
        totalPaid: price,
        products,
      };
      const response = await AddProductToCart(data);

      if (response.message === "success") {
        toast.success(`${response.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        const deleteCart = await deleteProductCartUser();
        await router.push("/transaction");
      } else {
        toast.error(`${response.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      deleteAuthFromLocalStorage();
      router.reload();
    }
  };

  useEffect(() => {
    const auth = getAuthFromLocalStorage();
    const token = auth?.data?.token;

    if (token === undefined) {
      setLoading(false);
      setIsLoggedIn(true);
    } else {
      setLoading(false);
      setInitialProducts();
    }
  }, [setInitialProducts]);

  const toggleHandler = () => {
    if (products.length === 0) {
      toast.error("Maaf keranjang kosong!, tidak dapat melakukan pemesanan.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setOrderToggle(!orderToggle);
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="w-full md:w-7/12 lg:6/12 rounded p-10 grid justify-center mx-auto font-semibold gap-5 shadow my-10">
        <h1 className="text-xl">Anda harus login terlebih dahulu</h1>
        <button
          onClick={() => router.push("/login")}
          type="button"
          className="px-5 py-1.5 bg-teal-500 text-white rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <Fragment>
      <Seo
        description={"Sesuaikan produk kamu dari kami untuk kamu beli"}
        url={"https://ozchic-store.vercel.app/cart"}
        title={"Ozchic Store | Cart"}
      />
      <section className="w-full lg:w-9/12 mx-auto grid lg:grid-cols-[2fr,_1fr] gap-5  my-10">
        <ListCartOrder products={products} deleteProduct={deleteCart} />

        <Order
          toggle={orderToggle}
          orderToggle={toggleHandler}
          price={price}
          setOrderToggle={setOrderToggle}
          totalItems={totalItems}
        />

        {orderToggle && (
          <OrderForm
            addressInput={addressInput}
            nameInput={nameInput}
            phoneInput={phoneInput}
            submitFormHandler={submitFormHandler}
          />
        )}
      </section>
      <AlertContainer />
    </Fragment>
  );
};

export default Cart;

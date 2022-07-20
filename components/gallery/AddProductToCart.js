import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteAuthFromLocalStorage,
  getAuthFromLocalStorage,
} from "../../lib/AuthHelper";
import { useRouter } from "next/router";

async function createCart(
  name,
  category,
  image,
  price,
  total,
  quantity,
  productId,
  token
) {
  const response = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/cart",
    {
      method: "POST",
      body: JSON.stringify({
        name,
        category,
        image,
        price,
        quantity,
        total,
        productId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const AddProductToCart = ({ productId, category, image, name, price }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const setQuantityHandler = (action) => {
    if (quantity === 1 && action === "DELETE") {
      return;
    }

    if (action === "ADD") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth = getAuthFromLocalStorage();
    const token = auth?.data?.token;

    if (!token) {
      toast("Silahkan login terlebih dahulu!", {
        type: "error",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else {
      try {
        const total = price * quantity;
        await toast.promise(
          createCart(
            name,
            category,
            image,
            price,
            total,
            quantity,
            productId,
            token
          ),
          {
            pending: "Menyimpan...",
            success: "Berhasil menambah produk ke keranjang 👌",
            error: "Gagal menambahkan produk 🤯",
          },
          {
            autoClose: 1000,
          }
        );

        setQuantity(1);
        router.push("/cart");
      } catch (error) {
        console.log(error);
        deleteAuthFromLocalStorage();
        router.reload();
      }
    }

    setLoading(false);
  };
  return (
    <section className="w-full font-f-poppins shadow-md  p-2.5 lg:p-5 rounded-lg">
      <div className="grid gap-5">
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-2.5 ">
            <p className=" ">Total :</p>
            <input type="number" className="w-10" value={quantity} />
          </div>
          <div className="flex items-center gap-2.5 font-bold justify-end">
            <button
              type="button"
              onClick={() => setQuantityHandler("DELETE")}
              className="px-4 rounded bg-red-500 text-white"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => setQuantityHandler("ADD")}
              className="px-4 rounded bg-blue-500 text-white"
            >
              +
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <p>Price : Rp.{quantity * price}</p>
          <form onSubmit={submitHandler}>
            <button
              type="submit"
              className="flex ml-auto text-white bg-teal-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-teal-600 rounded"
            >
              {loading ? "loading" : "Add to Cart"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductToCart;

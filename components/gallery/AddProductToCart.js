import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function createUser(userId, name, image, price, quantity, productId) {
  const response = await fetch(`/api/cart`, {
    method: "POST",
    body: JSON.stringify({ productId, name, image, price, quantity, userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const AddProductToCart = ({ productId, image, name, price }) => {
  const session = useSession();
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
    const userId = session.data.user.image;

    try {
      // const result = await createUser(
      //   userId,
      //   name,
      //   image,
      //   price,
      //   quantity,
      //   productId
      // );
      //
      // if (result.error) {
      //   alert(result.error);
      // }
      await toast.promise(
        createUser(userId, name, image, price, quantity, productId),
        {
          pending: "Saving...",
          success: "Berhasil menambah produk ke cart 👌",
          error: "Gagal menambahkan produk 🤯",
        },
        {
          autoClose: 3000,
        }
      );
    } catch (error) {}
    setLoading(false);
  };
  return (
    <section className="relative font-f-poppins w-full px-5 shadow  p-5 rounded-lg">
      <div className="grid gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 ">
            <p className=" ">Total :</p>
            <input type="number" value={quantity} />
          </div>
          <div className="flex items-center gap-2.5 font-bold">
            <button
              type="button"
              onClick={() => setQuantityHandler("DELETE")}
              className="px-4  rounded bg-red-500 text-white"
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
        <div className="flex items-center justify-between">
          <p>Price : Rp.{price}</p>
          <form onSubmit={submitHandler}>
            <button
              type="submit"
              className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
            >
              {loading ? "loading" : "Add to Cart"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default AddProductToCart;
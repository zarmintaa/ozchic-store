import Image from "next/image";
import ProductRating from "../product/ProductRating";
import { useRouter } from "next/router";

const base_api = "https://ozchic-store-api.herokuapp.com/";

const ProductDetail = ({ product, addFavProductHandler, classFav }) => {
  const router = useRouter();
  return (
    <div className="lg:w-4/5 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <Image
        alt={product.name}
        className=" w-full object-cover object-center rounded border border-gray-200"
        src={base_api + product.image}
        width={400}
        height={600}
        layout="intrinsic"
      />
      <div className=" w-full lg:pl-10 lg:py-6 mt-6 mx-auto lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          OZCHIC COLLECTION
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-1">
          {product.name}
        </h1>
        <ProductRating />
        <div className="flex flex-col gap-y-2">
          <p className="leading-relaxed text-gray-600">
            Kondisi :{" "}
            <span className="text-gray-900 font-medium">
              {product.condition}
            </span>
          </p>
          <p className="leading-relaxed text-gray-600">
            Berat :{" "}
            <span className="text-gray-900 font-medium">{product.weight}</span>
          </p>
          <p className="leading-relaxed text-gray-600">
            Ukuran :{" "}
            <span className="text-gray-900 font-medium">{product.size}</span>
          </p>
          <p className="leading-relaxed text-gray-600">
            Finishing :{" "}
            <span className="text-gray-900 font-medium">
              {product.finishing}
            </span>
          </p>
          <p className="leading-relaxed text-gray-600">
            Kategori :{" "}
            <span
              className="text-gray-900 font-bold capitalize
              "
            >
              {product.category}
            </span>
          </p>
          <p className="leading-relaxed">{product.description}</p>
        </div>

        <hr className="bg-gray-200 mb-5 mt-6" />
        <div className="flex justify-center items-center flex-wrap gap-0 sm:gap-5">
          <span className="title-font font-medium text-3xl text-gray-900">
            Rp.{product.price}
          </span>
          <button
            onClick={() => router.push("/cart")}
            className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
          >
            Order Now
          </button>
          <button
            onClick={addFavProductHandler}
            className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ml-4 ${classFav}`}
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

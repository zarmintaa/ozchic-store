import Image from "next/image";
import ProductRating from "../product/ProductRating";
import { useRouter } from "next/router";
import AddProductToCart from "./AddProductToCart";

const base_api = "https://ozchic-store-api.herokuapp.com/";

const ProductDetail = ({ product }) => {
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
          <AddProductToCart
            productId={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

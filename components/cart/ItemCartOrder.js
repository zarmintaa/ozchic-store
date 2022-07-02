import Image from "next/image";
import { useRouter } from "next/router";
const base_api = "https://ozchic-store-api.herokuapp.com/";
const ItemCartOrder = ({ product, deleteProduct }) => {
  const router = useRouter();
  return (
    <div
      key={product.id}
      className="flex gap-x-5 justify-center shadow-md rounded-lg overflow-hidden "
    >
      <div className="w-32 h-32">
        <Image
          src={base_api + product.image}
          className="object-cover w-full h-full"
          width={500}
          height={750}
          layout={"responsive"}
          objectFit="cover"
          objectPosition="center"
          alt={product.name}
        />
      </div>
      <div className="w-full flex flex-col gap-y-1 py-2.5 ">
        <h1
          onClick={() => router.push(`/gallery/${product.productId}`)}
          className="text-gray-900 text-2xl title-font font-medium cursor-pointer"
        >
          {product.name}
        </h1>
        <span className="flex items-center">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-yellow-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-yellow-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            className="w-4 h-4 text-yellow-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            className="w-4 h-4 text-yellow-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4 text-yellow-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        </span>
        <span className="title-font font-medium text-2xl text-gray-900">
          Rp.{product.price}
        </span>
        <div className="flex items-center justify-between">
          <span>Jumlah : {product.quantity} pcs</span>
          <div className="px-5 flex gap-2.5">
            <button
              onClick={() => deleteProduct(product._id)}
              type="button"
              className="px-3 py-2 text-normal font-medium text-center text-white bg-red-600 rounded hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCartOrder;

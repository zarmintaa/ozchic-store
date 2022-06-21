import Products from "../gallery/Product";
import { useRouter } from "next/router";

const NewArrivalsHome = ({ dataProducts }) => {
  const router = useRouter();

  return (
    <section className="bg-gray-100 py-10 lg:py-20">
      <div className="flex items-center justify-center mb-10 lg:mb-20 ">
        <h1 className="font-f-unna text-5xl lg:text-6xl">New Arrivals</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto px-5 lg:px-0 items-center justify-center w-full lg:w-8/12 font-f-unna gap-x-5 text-white gap-y-5">
        {dataProducts.map((item) => (
          <Products item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <button
          type="button"
          onClick={() => router.push("/gallery")}
          className="bg-black text-white font-f-poppins px-10 py-2 rounded-tr-lg rounded-bl-lg text-xl "
        >
          Go To Gallery
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsHome;

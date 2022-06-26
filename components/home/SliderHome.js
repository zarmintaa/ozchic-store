import Image from "next/image";
import { useRouter } from "next/router";

const SliderHome = () => {
  const router = useRouter();
  return (
    <section className="h-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-slider-top">
        <div className="content__item--left pb-5 hidden md:block w-full">
          <Image
            src={"/images/assets/static/slider/1/slider_image_1-left.png"}
            alt="pict left"
            width={400}
            height={480}
            layout="responsive"
            loading="lazy"
            objectPosition="center"
          />
        </div>
        <div className=" flex-col justify-center items-center bg-black text-white hidden  lg:flex">
          <div className="flex flex-col w-2/4">
            <h1 className="font-f-unna text-center whitespace-nowrap inline text-10xl font-semibold">
              5%
            </h1>
            <h3 className="font-f-unna text-left text-6xl font-extralight">
              of your purchase
            </h3>
            <p className="pt-5 pb-2 text-lg mt-2 font-f-poppins">
              will be donated to the orhpanage.
            </p>
          </div>
          <div className="mt-12 font-f-poppins">
            <button
              onClick={() => router.push("/cart")}
              className="py-2 px-16 bg-white text-black font-semibold text-lg rounded-bl-lg rounded-tr-lg"
            >
              Order Now
            </button>
          </div>
        </div>
        <div className=".content__item--right">
          <div className="pt-16 px-5 lg:px-10 font-f-poppins">
            <hr className="border bg-black border-solid border-black mb-6" />
            <p className=" ">
              A well made shawls in nude shade color to make you #staychic along
              your busy day.
            </p>
          </div>

          <div className="px-5 lg:px-0 mt-8">
            <Image
              src="/images/assets/static/slider/1/slider_image_1-right.png"
              alt="pict right"
              width={400}
              height={300}
              className="object-cover w-full"
              layout="responsive"
              priority={true}
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderHome;

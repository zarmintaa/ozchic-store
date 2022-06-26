import Image from "next/image";
import { useRouter } from "next/router";

const LookbookHome = () => {
  const router = useRouter();

  return (
    <section className="my-20">
      <div className="flex items-center justify-center my-20 ">
        <h1 className="font-f-unna text-6xl">LookBook</h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 px-5 lg:px-0 mx-auto items-center justify-between w-full lg:w-8/12 font-f-unna text-white gap-5">
        <div className="relative overflow-hidden flex items-center shadow-lg">
          <div className="w-full h-full">
            <Image
              src={"/images/assets/static/lookbook/lookbook-home-1.png"}
              alt="lookbook"
              width={380}
              height={470}
              layout="responsive"
              objectPosition="center"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="backdrop-brightness-50 bg-black/30 absolute w-full h-full"></div>
          <div className="absolute w-full bottom-10">
            <div className="w-9/12 mx-auto bottom-10 flex flex-col gap-10">
              <div className="font-f-unna">
                <h1 className="text-4xl lg:text-5xl">
                  Unique style for your uniqeness.
                </h1>
              </div>
              <div className="lookbook__content--button font-f-poppins">
                <button
                  onClick={() => router.push("/lookbook")}
                  className="py-4 px-16 tracking-wider bg-black rounded-bl-lg rounded-tr-lg text-lg lg:text-xl"
                >
                  GET THE LOOK
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden flex items-center shadow-lg">
          <div className="w-full h-full">
            <Image
              src={"/images/assets/static/lookbook/lookbook-home-2.png"}
              alt="lookbook"
              width={380}
              height={470}
              layout="responsive"
              objectPosition="center"
            />
          </div>
          <div className="backdrop-brightness-50 bg-black/30 absolute w-full h-full"></div>
          <div className="absolute w-full bottom-10">
            <div className="w-9/12 mx-auto bottom-10 flex flex-col gap-10">
              <div className="font-f-unna">
                <h1 className="text-4xl lg:text-5xl">
                  After all we’ll be back to basic.
                </h1>
              </div>
              <div className=" font-f-poppins">
                <button
                  onClick={() => router.push("/lookbook")}
                  className="py-4 px-16 tracking-wider bg-black rounded-bl-lg rounded-tr-lg text-lg lg:text-xl"
                >
                  GET THE LOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookbookHome;

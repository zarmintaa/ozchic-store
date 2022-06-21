import Image from "next/image";
import Link from "next/link";
const InspirationHome = () => {
  return (
    <div className="bg-stone-100">
      <div className="flex items-center justify-center py-8 lg:py-16 ">
        <h1 className="font-f-unna text-4xl lg:text-6xl">Inspiration</h1>
      </div>
      <div className="grid lg:grid-cols-2 font-f-poppins+">
        <div className="w-full h-full px-5 lg:px-0">
          <Image
            src="/images/assets/static/woman-in-yellow-winter-jacket.png"
            className="object-cover content-center"
            width={500}
            height={500}
            alt="inspiration"
            loading="lazy"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl lg:text-4xl py-10 px-5 lg:px-20 text-center leading-normal">
            How to Improve Your Self Confidence
          </h2>
          <p className="px-5 lg:px-24 leading-loose text-justify lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo, at
            volutpat quam malesuada quis. Vivamus dictum volutpat ipsum, semper
            pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo, at
            volutpat quam malesuada quis. Vivamus dictum volutpat ipsum, semper
            pulvinar...
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <Link href={"/inspiration"} passHref>
          <button className="py-3 px-12 tracking-wider bg-white hover:bg-gray-200 rounded-bl-lg rounded-tr-lg text-xl border-gray-900 border-2 font-semibold">
            Read More Inspiration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InspirationHome;

import Image from "next/image";
import { Fragment } from "react";
import Seo from "../components/utils/Seo";

const Lookbook = () => {
  return (
    <Fragment>
      <Seo
        description={
          "Welcome to lookbook, search your favorite product from us!."
        }
        url={"https://ozchic-store.vercel.app/lookbook"}
        title={"Ozchic Store | LookBook"}
      />
      <div className="mb-10 w-full lg:w-9/12 px-5 lg:px-0 mx-auto">
        <div className="text-center py-16">
          <h1 className="font-f-unna text-5xl">LookBook</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <Image
            src="/images/assets/static/lookbook/lookbook-model.png"
            alt="lookbook"
            className="object-cover w-full h-full"
            width={700}
            height={800}
            layout="responsive"
          />
          <div className="flex flex-col py-5 relative">
            <hr className="bg-black" />
            <h1 className="text-4xl font-semibold my-3 font-f-poppins tracking-widest">
              KAMA SHAWL
            </h1>
            <div className="flex flex-col gap-5 w-10/12">
              <p>
                A well made shawl with comfortable fabrics. a neat sewed along
                the edges and a simple label to give ozchic signatured and make
                sure its ozchic quality.
              </p>
              <p>
                A super basic item each of you should have. A shawl you can
                create your own style with.
              </p>
            </div>
            <div className="w-full h-full mt-5">
              <Image
                className="object-cover w-full h-full"
                src="/images/assets/static/lookbook/havva-scarf.png"
                alt="havva scarf"
                width={500}
                height={385}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Lookbook;

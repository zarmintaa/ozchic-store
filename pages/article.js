import Seo from "../components/utils/Seo";
import Image from "next/image";
import { Fragment } from "react";

const Article = () => {
  const image1 =
    "/images/assets/static/inspiration/street-photography-of-woman-wearing-blue-coat.png";
  return (
    <Fragment>
      <Seo
        description={
          "Read article from us to get inspiration for your best outfit!"
        }
        url={"https://ozchic-store.vercel.app/article"}
        title={"Ozchic Store | Article"}
      />
      <main className="w-full lg:w-7/12 mx-2.5 lg:mx-auto">
        <div className="py-10 w-full lg:w-[40rem] mx-0 lg:mx-auto">
          <Image
            src={image1}
            height={720}
            width={720}
            alt="inspiration"
            className="object-cover w-full h-full"
            layout="responsive"
          />
        </div>
        <div className="px-5 lg:px-36">
          <h1 className="font-semibold font-f-poppins text-3xl text-slate-700 mt-20 leading-relaxed">
            Here are the tittle of the article you write for your site
          </h1>
          <div className="flex gap-2 mt-5">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_398_216)">
                <path
                  d="M17.0711 3.85164C15.1823 1.96289 12.6711 0.922699 10 0.922699C7.32891 0.922699 4.81766 1.96289 2.92891 3.85164C1.04016 5.74039 0 8.25161 0 10.9227C0 13.5938 1.04016 16.105 2.92891 17.9938C4.81766 19.8825 7.32891 20.9227 10 20.9227C12.6711 20.9227 15.1823 19.8825 17.0711 17.9938C18.9598 16.105 20 13.5938 20 10.9227C20 8.25161 18.9598 5.74036 17.0711 3.85164ZM10 18.9599C5.56824 18.9599 1.96281 15.3544 1.96281 10.9227C1.96281 10.9154 1.96305 10.9082 1.96309 10.9011C1.96309 10.8992 1.96281 10.8975 1.96281 10.8956C1.96281 10.8925 1.9632 10.8896 1.96328 10.8865C1.98277 6.50789 5.52133 2.94551 9.89078 2.88692C9.89992 2.88649 9.90898 2.88555 9.91824 2.88555C9.92379 2.88555 9.92918 2.88621 9.93469 2.88637C9.95648 2.88621 9.9782 2.88555 10 2.88555C14.4318 2.88555 18.0372 6.49102 18.0372 10.9227C18.0372 15.3545 14.4318 18.9599 10 18.9599Z"
                  fill="#A5A5A5"
                />
                <path
                  d="M16.1048 11.4055C15.778 11.4055 15.5131 11.1406 15.5131 10.8138C15.5131 10.487 15.778 10.222 16.1048 10.222H16.818C16.483 6.93782 13.8195 4.33247 10.5097 4.08786V4.70876C10.5097 5.03556 10.2448 5.30048 9.91803 5.30048C9.59123 5.30048 9.32631 5.03556 9.32631 4.70876V4.102C6.06553 4.42153 3.46814 7.03567 3.17428 10.3038H3.81303C4.13982 10.3038 4.40475 10.5687 4.40475 10.8955C4.40475 11.2223 4.13982 11.4872 3.81303 11.4872H3.16943C3.4415 14.808 6.09096 17.4656 9.4081 17.7506V17.0005C9.4081 16.6737 9.67303 16.4088 9.99982 16.4088C10.3266 16.4088 10.5915 16.6737 10.5915 17.0005V17.7506C13.9358 17.4632 16.6014 14.7642 16.8363 11.4055H16.1048ZM12.3951 9.36415L10.4183 11.3411C10.3073 11.452 10.1568 11.5144 9.99986 11.5144C9.84295 11.5144 9.6924 11.452 9.58146 11.3411L6.14033 7.89993C5.90924 7.66888 5.90924 7.29423 6.14033 7.06313C6.37139 6.83204 6.74603 6.83204 6.97713 7.06313L9.9999 10.0859L11.5584 8.52735C11.7895 8.29626 12.1641 8.29626 12.3952 8.52735C12.6262 8.75841 12.6262 9.13309 12.3951 9.36415Z"
                  fill="#A5A5A5"
                />
              </g>
              <defs>
                <clipPath id="clip0_398_216">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.922699)"
                  />
                </clipPath>
              </defs>
            </svg>
            <time>June 30 2020</time>
          </div>
          <p className="text-slate-900 mt-5 text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo,
          </p>
          <p className="text-slate-900 mt-5 text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo,
          </p>
          <p className="text-slate-900 mt-5 text-lg leading-7">
            volutpat ipsum, semper pulvinar leo venenatis non. Mauris auctor
            euismod odio posuere sodales. Etiam at lacus nec purus molestie
            elementum eget et sem. Phasellus suscipit quam id purus placerat
            ultrices. Proin eu arcu fermentum, interdum libero id, pulvinar
            nunc. Aenean varius hendrerit ipsum sed hendrerit. Vivamus ac
            dignissim turpis. Phasellus pellentesque dolor ut sapien elementum,
            nec dictum tortor sagittis. Donec venenatis laoreet tortor sed
            condimentum.
          </p>
          <button className="mt-10 bg-white hover:bg-gray-200 text-slate-900 px-10 py-2 rounded-md border-2 font-f-poppins font-semibold border-slate-900">
            Read More
          </button>
        </div>
      </main>{" "}
    </Fragment>
  );
};

export default Article;

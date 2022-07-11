import Image from "next/image";
import { useRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <div className="grid lg:grid-cols-2 w-full lg:w-10/12 px-5 lg:px-0 mx-auto py-10 font-f-poppins gap-x-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-5">
          <div className="">
            <ul className="flex flex-col leading-loose">
              <li className="font-bold">ABOUT</li>
              <li>HOW TO SHOP</li>
              <li>CAREER</li>
              <li>TERM & CONDITION</li>
              <li>RETURN, EXCHANGE, & REFOUND</li>
            </ul>

            <div className="mt-5 grid  gap-2">
              <span>SHIPPING</span>
              <div className="block gap-5 items-center">
                <Image
                  src={"/images/assets/static/footer/jne.png"}
                  width={64}
                  height={26}
                  alt="jne"
                  loading="lazy"
                  layout="intrinsic"
                />

                <Image
                  src={"/images/assets/static/footer/jnt.png"}
                  width={120}
                  height={26}
                  alt="jnt"
                  loading="lazy"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <div className="grid gap-2">
              <span>PAYMENT BANK TRANSFER</span>
              <Image
                src={"/images/assets/static/footer/Group 193.png"}
                width={180}
                height={26}
                layout="fixed"
                alt="jne"
                loading="lazy"
              />
            </div>
            <div className="mt-5 grid  gap-2">
              <span>ONLINE PAYMENT</span>
              <div>
                <Image
                  src={"/images/assets/static/footer/Group 194.png"}
                  width={180}
                  height={59}
                  layout="fixed"
                  alt="payment support"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 lg:mt-0">
          <div className="grid">
            <ul className="flex flex-col gap-2 leading-loose">
              <li>
                <span className="font-semibold">CONTACT</span>
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 737.509 740.824"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M630.056 107.658C560.727 38.271 468.525.039 370.294 0 167.891 0 3.16 164.668 3.079 367.072c-.027 64.699 16.883 127.855 49.016 183.523L0 740.824l194.666-51.047c53.634 29.244 114.022 44.656 175.481 44.682h.151c202.382 0 367.128-164.689 367.21-367.094.039-98.088-38.121-190.32-107.452-259.707m-259.758 564.8h-.125c-54.766-.021-108.483-14.729-155.343-42.529l-11.146-6.613-115.516 30.293 30.834-112.592-7.258-11.543c-30.552-48.58-46.689-104.729-46.665-162.379C65.146 198.865 202.065 62 370.419 62c81.521.031 158.154 31.81 215.779 89.482s89.342 134.332 89.311 215.859c-.07 168.242-136.987 305.117-305.211 305.117m167.415-228.514c-9.176-4.591-54.286-26.782-62.697-29.843-8.41-3.061-14.526-4.591-20.644 4.592-6.116 9.182-23.7 29.843-29.054 35.964-5.351 6.122-10.703 6.888-19.879 2.296-9.175-4.591-38.739-14.276-73.786-45.526-27.275-24.32-45.691-54.36-51.043-63.542-5.352-9.183-.569-14.148 4.024-18.72 4.127-4.11 9.175-10.713 13.763-16.07 4.587-5.356 6.116-9.182 9.174-15.303 3.059-6.122 1.53-11.479-.764-16.07-2.294-4.591-20.643-49.739-28.29-68.104-7.447-17.886-15.012-15.466-20.644-15.746-5.346-.266-11.469-.323-17.585-.323-6.117 0-16.057 2.296-24.468 11.478-8.41 9.183-32.112 31.374-32.112 76.521s32.877 88.763 37.465 94.885c4.587 6.122 64.699 98.771 156.741 138.502 21.891 9.45 38.982 15.093 52.307 19.323 21.981 6.979 41.983 5.994 57.793 3.633 17.628-2.633 54.285-22.19 61.932-43.616 7.646-21.426 7.646-39.791 5.352-43.617-2.293-3.826-8.41-6.122-17.585-10.714"
                  />
                </svg>
                082132000633
              </li>
              <li className="flex gap-2 items-center">@ hiozchic@gmail.com</li>
              <li className="flex gap-2 items-center">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  height="16"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 7600 7600"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6175 0H1425C638 0 0 638 0 1425v4750c0 787 638 1425 1425 1425h4750c787 0 1425-638 1425-1425V1425C7600 638 6962 0 6175 0zm-193 4093h-711v2632H4083V4093h-461v-887h461v-565c0-740 308-1180 1180-1180h884v883h-514c-340 0-362 127-362 363l-1 498h808l-97 887z" />
                </svg>
                Ozchic Shop
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="9.7 16.5 280 266"
                  width="16"
                  height="16"
                >
                  <path d="M288.9 113.8c-1.4 3.5-2.5 7.1-3.9 10.6-1-14.7-3.4-29.3-8.1-43.2-3.2-8.6-6.9-17.2-13.3-23.9.9 8.2 3 16.2 2.8 24.5-1.8-6.3-3.9-12.7-7.7-18.1-8.2-12.7-21.5-21.3-35.7-25.9-3.7-1.2-7.6-1.9-10.9-3.9-20.4-11.9-44.2-17.8-67.8-17.2-30.7.4-60.9 12.5-83.4 33.3-3.5 3.3-6.7 6.9-10.2 10.3-6.1-7.1-9.2-16.1-9.6-25.4-5.5 4.7-8.7 11.5-11 18.2-3.2 9.4-4.9 19.4-3.9 29.3.1 2.2.7 4.6-.8 6.5-7.8 11.4-14.1 24.4-15.6 38.3 2.5-1.7 4.9-3.5 7.4-5.2-1 5-2.4 10-3.2 15.1-3.5 24.5 1 50 12.7 71.9 12.8 23.6 32.6 43.1 55.9 56.4 26.2 14.9 57.5 20.4 87.3 15.6 26-4.3 51.2-15.7 69.8-34.6 13.2-13.4 24.7-28.5 33-45.4 13.6-26.8 19.3-57.5 16.2-87.2m-48.7 38.4c-2.7-5.5-4.1-12-9.3-15.8 1.3 13.8 1.9 27.8-1.2 41.4-1.9 9.2-6 18.1-12.7 24.8 1.2-6.6 2.3-13.3 1.9-20-9.7 13.1-21.4 25.2-36.3 32.3-12.6 6.1-27.5 5.8-40.7 1.7-12-3.9-22.4-11.3-31.6-19.7h3.2c9 .6 18.1-.7 26.7-3.2 8.6-2.5 15-8.9 22.5-13.4 3.5-2.1 7.9-1.2 11.7-2.3 2.4-1.3 3.2-4.8 1-6.7-5.6-6.1-13.7-11-22.2-10-8.2 1.2-14.9 6.8-23 8.7-5.8 1-11.7-.8-16.8-3.4-7.3-3.7-12.8-9.9-18-16l-2.3-1.9c0-.9 0-1.9.1-2.8.5-2.5 1.9-4.7 3.1-7l1.4-2.8c8.1.6 16.1 1.9 24 3.9-.1-7.5-.6-16-5.2-22.2l1.6-1.2c5.1-4 9.8-8.7 15.5-11.8 2.3-1.2 4.4-2.8 6.1-4.7l.4-3.4h-.1c.1-1.3-.1-2.7-.1-4-2.8-.3-5.6-.5-8.5-.5l-7.8-.5c-.6-.4-1.2-.8-1.8-1.1-5.3-3.3-9.9-7.7-14.9-11.4l-2-1.8.3-2.7c1.9-12.5 11.1-22.3 20.7-29.8-6.8 1-13.5 2.9-19.6 6C99.9 54 94.4 58.7 89 63.3c-10.9-2.8-22.6-1.1-33 2.9-5.1 2.3-9.7 5.7-14.7 8.3 3.2-3.2 6.9-5.7 10.5-8.5 3.2-2.4 5.6-5.7 8.4-8.5 20.8-21.4 49.9-34.3 79.6-35.8 19.7-1 40 2.1 57.8 10.8-4.8-.2-9.5-.5-14.3-.4 10.7 3.2 23.2 6.6 29.2 17-5.5.2-11.1.3-16.4 2.1 15.3 5.9 30.7 13.2 42.1 25.4 6.8 7.3 11.5 16.8 11.3 27-3.6-2.7-7.3-5.2-11.3-7.2 4.3 18.1 7 37.4 2 55.8" />
                </svg>
                Ozchic.co
              </li>
            </ul>
          </div>
          <div className="mt-5 lg:m-0">
            <Image
              src="/images/assets/static/footer/Group 108.png"
              className="w-full object-cover h-full"
              alt="ozchic"
              width={310}
              height={180}
              layout="responsive"
              loading="lazy"
            />
            <div className="flex items-center  mt-2">
              <button
                type="button"
                onClick={() => router.push("/gallery")}
                className="bg-black text-white font-f-poppins w-full py-2 rounded-tr-md rounded-bl-md text-xl "
              >
                Go To Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

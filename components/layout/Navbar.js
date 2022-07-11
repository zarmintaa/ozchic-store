import { useCallback, useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {
  faBars,
  faX,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SignOutButton from "../auth/SignOutButton";
import SignInButton from "../auth/SignInButton";
import { ToastContainer } from "react-toastify";
import { getAuthFromLocalStorage } from "../../lib/AuthHelper";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState(null);
  const [userToggle, setUserToggle] = useState(false);

  const authFetcher = useCallback(() => {
    const auth = getAuthFromLocalStorage();
    const token = auth?.data?.token;

    if (token) {
      setIsLoggedIn(true);
      setAuth(auth);
    } else {
      setIsLoggedIn(false);
      setAuth(null);
    }
  }, []);

  useEffect(() => {
    authFetcher();
  }, [authFetcher]);

  return (
    <div className="border-b border-solid">
      <header className="hidden lg:flex py-6 w-full px-6 mx-auto items-center">
        <nav className="flex w-full justify-between items-center">
          <div className="flex text-center gap-8">
            <div className="cursor-pointer">
              <ActiveLink activeClassName="font-semibold" href="/">
                <svg
                  width="125"
                  height="21"
                  viewBox="0 0 125 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M124.409 19.5339L116.443 19.6059L116.443 19.5959C113.911 19.5139 111.728 18.6066 109.896 16.8742C107.946 15.0312 106.97 12.7911 106.967 10.1539C106.964 7.51661 107.936 5.25892 109.882 3.38072C111.827 1.50265 114.171 0.551103 116.913 0.526327C117.994 0.516552 119.086 0.696432 120.186 1.06583C121.287 1.43522 122.217 1.95969 122.974 2.63923L121.301 6.502C120.181 5.10312 118.72 4.41176 116.917 4.42805C115.365 4.44207 114.04 5.00509 112.941 6.11682C111.842 7.22869 111.294 8.56126 111.295 10.1148C111.297 11.6682 111.848 12.9909 112.949 14.0829C113.934 15.0583 115.096 15.5925 116.439 15.6853L116.439 15.6842L124.405 15.6123L124.409 19.5339ZM58.4293 16.2283C60.2146 16.2122 61.6748 15.4944 62.8095 14.0752L64.4906 17.8805C63.7339 18.5738 62.8012 19.1197 61.6925 19.518C60.5836 19.9164 59.4973 20.1204 58.4333 20.1301C55.692 20.1548 53.3464 19.2456 51.3968 17.4028C49.4471 15.5598 48.4709 13.3197 48.4682 10.6825C48.4655 8.04518 49.437 5.78749 51.3829 3.90929C53.3287 2.03122 55.6723 1.07967 58.4136 1.0549C59.4957 1.04512 60.587 1.22501 61.6875 1.5944C62.788 1.9638 63.7173 2.48826 64.4755 3.1678L62.8023 7.03057C61.6826 5.63169 60.2211 4.94033 58.4177 4.95663C56.8666 4.97064 55.5416 5.53365 54.4426 6.64539C53.3437 7.75726 52.7949 9.08983 52.7965 10.6434C52.7981 12.1968 53.3496 13.5194 54.4508 14.6114C55.5521 15.7033 56.8782 16.2423 58.4293 16.2283ZM10.4349 1.48896C10.4703 1.48837 10.5058 1.48778 10.5413 1.48746C13.2285 1.46318 15.5244 2.37281 17.4289 4.21609C19.3336 6.0595 20.2873 8.29979 20.29 10.9371C20.2927 13.5743 19.3437 15.8318 17.4428 17.7096C15.5422 19.5872 13.2481 20.5383 10.561 20.5626C7.8738 20.5869 5.57797 19.6773 3.67331 17.834C1.76879 15.9906 0.8151 13.7503 0.812383 11.1131C0.810114 8.91072 1.46837 6.97323 2.78728 5.30046L0.00385657 5.32561L0 1.5827L10.4349 1.48896ZM33.8434 16.0169L41.5262 15.9475L41.5303 19.8492L26.8138 19.9822L34.9147 5.60257L27.232 5.67199L27.228 1.77027L41.9443 1.6373L33.8434 16.0169ZM99.8125 19.3226L95.4841 19.3617L95.4654 1.15371L99.7938 1.1146L99.8125 19.3226ZM75.9846 19.5379L71.6563 19.577L71.6375 1.36901L75.9658 1.3299L75.9732 8.48303L82.8986 8.42045L82.8912 1.26732L87.2195 1.22821L87.2383 19.4362L82.91 19.4753L82.9026 12.3222L75.9772 12.3848L75.9846 19.5379ZM6.71387 15.0428C7.77903 16.135 9.06001 16.6744 10.5569 16.6609C12.0539 16.6474 13.3292 16.0848 14.3832 14.9735C15.437 13.862 15.9632 12.5296 15.9616 10.9762C15.96 9.42266 15.4311 8.09982 14.375 7.00742C13.3188 5.91516 12.0422 5.37566 10.5453 5.38918C9.0484 5.40271 7.77302 5.96527 6.7192 7.0766C5.66525 8.18806 5.13907 9.52043 5.14067 11.074C5.14227 12.6274 5.66672 13.9503 6.71387 15.0428Z"
                    fill="#272727"
                  />
                </svg>
              </ActiveLink>
            </div>
            <ul className="flex items-center w-full h-full text-md font-light uppercase justify-center gap-x-8 font-f-poppins">
              <li>
                <ActiveLink href="/gallery" activeClassName="font-semibold">
                  <p className="cursor-pointer">Gallery</p>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/lookbook" activeClassName="font-semibold">
                  <p className="cursor-pointer">LookBook</p>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName="font-semibold" href="/inspiration">
                  <p className="cursor-pointer">Inspiration</p>
                </ActiveLink>
              </li>{" "}
              <li>
                <ActiveLink activeClassName="font-semibold" href="/article">
                  <p className="cursor-pointer">Article</p>
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <div className="flex justify-end items-center gap-x-5">
              <Link href="/cart" passHref>
                <div className="relative">
                  <button type="button" aria-label="Toggle Button" className="">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-2xl"
                    />
                  </button>
                </div>
              </Link>
              <div
                onClick={() => {
                  setUserToggle(!userToggle);
                  authFetcher();
                }}
                className="cursor-pointer relative rounded-xl w-10 h-10 flex items-center justify-center border border-b hover:shadow-lg"
              >
                <button type="button">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-2xl text-gray-500"
                  />
                </button>
                {userToggle && (
                  <div
                    className="absolute top-10 right-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow "
                    id="dropdown"
                  >
                    {isLoggedIn && (
                      <div className="py-3 px-4">
                        <span className="block text-sm text-gray-900 ">
                          {auth?.data?.name}
                        </span>
                        <span className="block text-sm font-medium text-gray-500 truncate ">
                          {auth?.data?.email}
                        </span>
                      </div>
                    )}
                    <ul className="py-1">
                      <li onClick={() => router.push("/transaction")}>
                        <div className="block py-2 text-sm pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">
                          Transaction
                        </div>
                      </li>
                      <li>
                        {isLoggedIn ? (
                          <SignOutButton userToggle={setUserToggle} />
                        ) : (
                          <SignInButton userToggle={setUserToggle} />
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {!sidebarToggle && (
        <header className="lg:hidden gap-10 py-6 w-full px-6 mx-auto items-center">
          <div className="flex justify-between items-center gap-10">
            <div className="flex items-center gap-x-5">
              <div className="text-2xl">
                <button
                  aria-label="Icon Toggle"
                  type="button"
                  onClick={() => setSidebarToggle(!sidebarToggle)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              <div>
                <ActiveLink activeClassName="font-semibold" href="/">
                  <svg
                    width="125"
                    height="21"
                    viewBox="0 0 125 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M124.409 19.5339L116.443 19.6059L116.443 19.5959C113.911 19.5139 111.728 18.6066 109.896 16.8742C107.946 15.0312 106.97 12.7911 106.967 10.1539C106.964 7.51661 107.936 5.25892 109.882 3.38072C111.827 1.50265 114.171 0.551103 116.913 0.526327C117.994 0.516552 119.086 0.696432 120.186 1.06583C121.287 1.43522 122.217 1.95969 122.974 2.63923L121.301 6.502C120.181 5.10312 118.72 4.41176 116.917 4.42805C115.365 4.44207 114.04 5.00509 112.941 6.11682C111.842 7.22869 111.294 8.56126 111.295 10.1148C111.297 11.6682 111.848 12.9909 112.949 14.0829C113.934 15.0583 115.096 15.5925 116.439 15.6853L116.439 15.6842L124.405 15.6123L124.409 19.5339ZM58.4293 16.2283C60.2146 16.2122 61.6748 15.4944 62.8095 14.0752L64.4906 17.8805C63.7339 18.5738 62.8012 19.1197 61.6925 19.518C60.5836 19.9164 59.4973 20.1204 58.4333 20.1301C55.692 20.1548 53.3464 19.2456 51.3968 17.4028C49.4471 15.5598 48.4709 13.3197 48.4682 10.6825C48.4655 8.04518 49.437 5.78749 51.3829 3.90929C53.3287 2.03122 55.6723 1.07967 58.4136 1.0549C59.4957 1.04512 60.587 1.22501 61.6875 1.5944C62.788 1.9638 63.7173 2.48826 64.4755 3.1678L62.8023 7.03057C61.6826 5.63169 60.2211 4.94033 58.4177 4.95663C56.8666 4.97064 55.5416 5.53365 54.4426 6.64539C53.3437 7.75726 52.7949 9.08983 52.7965 10.6434C52.7981 12.1968 53.3496 13.5194 54.4508 14.6114C55.5521 15.7033 56.8782 16.2423 58.4293 16.2283ZM10.4349 1.48896C10.4703 1.48837 10.5058 1.48778 10.5413 1.48746C13.2285 1.46318 15.5244 2.37281 17.4289 4.21609C19.3336 6.0595 20.2873 8.29979 20.29 10.9371C20.2927 13.5743 19.3437 15.8318 17.4428 17.7096C15.5422 19.5872 13.2481 20.5383 10.561 20.5626C7.8738 20.5869 5.57797 19.6773 3.67331 17.834C1.76879 15.9906 0.8151 13.7503 0.812383 11.1131C0.810114 8.91072 1.46837 6.97323 2.78728 5.30046L0.00385657 5.32561L0 1.5827L10.4349 1.48896ZM33.8434 16.0169L41.5262 15.9475L41.5303 19.8492L26.8138 19.9822L34.9147 5.60257L27.232 5.67199L27.228 1.77027L41.9443 1.6373L33.8434 16.0169ZM99.8125 19.3226L95.4841 19.3617L95.4654 1.15371L99.7938 1.1146L99.8125 19.3226ZM75.9846 19.5379L71.6563 19.577L71.6375 1.36901L75.9658 1.3299L75.9732 8.48303L82.8986 8.42045L82.8912 1.26732L87.2195 1.22821L87.2383 19.4362L82.91 19.4753L82.9026 12.3222L75.9772 12.3848L75.9846 19.5379ZM6.71387 15.0428C7.77903 16.135 9.06001 16.6744 10.5569 16.6609C12.0539 16.6474 13.3292 16.0848 14.3832 14.9735C15.437 13.862 15.9632 12.5296 15.9616 10.9762C15.96 9.42266 15.4311 8.09982 14.375 7.00742C13.3188 5.91516 12.0422 5.37566 10.5453 5.38918C9.0484 5.40271 7.77302 5.96527 6.7192 7.0766C5.66525 8.18806 5.13907 9.52043 5.14067 11.074C5.14227 12.6274 5.66672 13.9503 6.71387 15.0428Z"
                      fill="#272727"
                    />
                  </svg>
                </ActiveLink>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center justify-end gap-x-4">
                <Link href="/cart" passHref>
                  <div className="relative">
                    <button type="button" aria-label="Cart Button" className="">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-2xl"
                      />
                      <i className="fa-solid fa-cart-shopping text-2xl"></i>
                    </button>
                  </div>
                </Link>
                <div
                  onClick={() => {
                    setUserToggle(!userToggle);
                    authFetcher();
                  }}
                  className="cursor-pointer relative rounded-xl w-10 h-10 flex items-center justify-center border border-b hover:shadow-lg"
                >
                  <button type="button">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-2xl text-gray-500"
                    />
                  </button>
                  {userToggle && (
                    <div
                      className="absolute top-10 right-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow "
                      id="dropdown"
                    >
                      {isLoggedIn && (
                        <div className="py-3 px-4">
                          <span className="block text-sm text-gray-900 ">
                            {auth?.data?.name}
                          </span>
                          <span className="block text-sm font-medium text-gray-500 truncate ">
                            {auth?.data?.email}
                          </span>
                        </div>
                      )}
                      <ul className="py-1">
                        <li onClick={() => router.push("/transaction")}>
                          <div className="block py-2 text-sm pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">
                            Transaction
                          </div>
                        </li>
                        <li>
                          {isLoggedIn ? (
                            <SignOutButton userToggle={setUserToggle} />
                          ) : (
                            <SignInButton userToggle={setUserToggle} />
                          )}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
      {sidebarToggle && (
        <header className="lg:hidden  py-6 w-full px-6 mx-auto items-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-5">
              <div className="text-2xl">
                <button
                  type="button"
                  aria-label="X Button"
                  onClick={() => setSidebarToggle(!sidebarToggle)}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
              <ActiveLink activeClassName="font-semibold" href="/">
                <svg
                  width="125"
                  height="21"
                  viewBox="0 0 125 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M124.409 19.5339L116.443 19.6059L116.443 19.5959C113.911 19.5139 111.728 18.6066 109.896 16.8742C107.946 15.0312 106.97 12.7911 106.967 10.1539C106.964 7.51661 107.936 5.25892 109.882 3.38072C111.827 1.50265 114.171 0.551103 116.913 0.526327C117.994 0.516552 119.086 0.696432 120.186 1.06583C121.287 1.43522 122.217 1.95969 122.974 2.63923L121.301 6.502C120.181 5.10312 118.72 4.41176 116.917 4.42805C115.365 4.44207 114.04 5.00509 112.941 6.11682C111.842 7.22869 111.294 8.56126 111.295 10.1148C111.297 11.6682 111.848 12.9909 112.949 14.0829C113.934 15.0583 115.096 15.5925 116.439 15.6853L116.439 15.6842L124.405 15.6123L124.409 19.5339ZM58.4293 16.2283C60.2146 16.2122 61.6748 15.4944 62.8095 14.0752L64.4906 17.8805C63.7339 18.5738 62.8012 19.1197 61.6925 19.518C60.5836 19.9164 59.4973 20.1204 58.4333 20.1301C55.692 20.1548 53.3464 19.2456 51.3968 17.4028C49.4471 15.5598 48.4709 13.3197 48.4682 10.6825C48.4655 8.04518 49.437 5.78749 51.3829 3.90929C53.3287 2.03122 55.6723 1.07967 58.4136 1.0549C59.4957 1.04512 60.587 1.22501 61.6875 1.5944C62.788 1.9638 63.7173 2.48826 64.4755 3.1678L62.8023 7.03057C61.6826 5.63169 60.2211 4.94033 58.4177 4.95663C56.8666 4.97064 55.5416 5.53365 54.4426 6.64539C53.3437 7.75726 52.7949 9.08983 52.7965 10.6434C52.7981 12.1968 53.3496 13.5194 54.4508 14.6114C55.5521 15.7033 56.8782 16.2423 58.4293 16.2283ZM10.4349 1.48896C10.4703 1.48837 10.5058 1.48778 10.5413 1.48746C13.2285 1.46318 15.5244 2.37281 17.4289 4.21609C19.3336 6.0595 20.2873 8.29979 20.29 10.9371C20.2927 13.5743 19.3437 15.8318 17.4428 17.7096C15.5422 19.5872 13.2481 20.5383 10.561 20.5626C7.8738 20.5869 5.57797 19.6773 3.67331 17.834C1.76879 15.9906 0.8151 13.7503 0.812383 11.1131C0.810114 8.91072 1.46837 6.97323 2.78728 5.30046L0.00385657 5.32561L0 1.5827L10.4349 1.48896ZM33.8434 16.0169L41.5262 15.9475L41.5303 19.8492L26.8138 19.9822L34.9147 5.60257L27.232 5.67199L27.228 1.77027L41.9443 1.6373L33.8434 16.0169ZM99.8125 19.3226L95.4841 19.3617L95.4654 1.15371L99.7938 1.1146L99.8125 19.3226ZM75.9846 19.5379L71.6563 19.577L71.6375 1.36901L75.9658 1.3299L75.9732 8.48303L82.8986 8.42045L82.8912 1.26732L87.2195 1.22821L87.2383 19.4362L82.91 19.4753L82.9026 12.3222L75.9772 12.3848L75.9846 19.5379ZM6.71387 15.0428C7.77903 16.135 9.06001 16.6744 10.5569 16.6609C12.0539 16.6474 13.3292 16.0848 14.3832 14.9735C15.437 13.862 15.9632 12.5296 15.9616 10.9762C15.96 9.42266 15.4311 8.09982 14.375 7.00742C13.3188 5.91516 12.0422 5.37566 10.5453 5.38918C9.0484 5.40271 7.77302 5.96527 6.7192 7.0766C5.66525 8.18806 5.13907 9.52043 5.14067 11.074C5.14227 12.6274 5.66672 13.9503 6.71387 15.0428Z"
                    fill="#272727"
                  />
                </svg>
              </ActiveLink>
            </div>
            <div className="flex gap-2">
              <div className="flex justify-end gap-x-4">
                <Link href="/cart" passHref>
                  <div className="relative">
                    <button type="button" aria-label="Cart button">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-2xl"
                      />
                      <i className="fa-solid fa-cart-shopping text-2xl"></i>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <ul className="grid items-center w-full w-full h-full text-md font-light uppercase gap-2 font-f-poppins">
              <li>
                <ActiveLink href="/gallery" activeClassName="font-semibold">
                  <p>Gallery</p>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/lookbook" activeClassName="font-semibold">
                  <p>LookBook</p>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName="font-semibold" href="/inspiration">
                  <p>Inspiration</p>
                </ActiveLink>
              </li>
            </ul>
          </div>
        </header>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Navbar;

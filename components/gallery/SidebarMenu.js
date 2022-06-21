import SearchForm from "./SearchForm";

const SidebarMenu = ({
  setSidebarToggle,
  sidebarToggle,
  setCategoryProduct,
  setToggle,
  toggle,
  searchChangeHandler,
}) => {
  return (
    <aside className="relative w-64 font-f-poppins" aria-label="Sidebar">
      <div className="flex items-center px-2 py-2 justify-center bg-teal-500 text-white gap-2 rounded-md m-2">
        <button onClick={() => setSidebarToggle(!sidebarToggle)} type="button">
          <span>Minimize Sidebar</span>
        </button>
      </div>
      <div className="overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setCategoryProduct("")}
              type="button"
              className="flex items-center p-2 w-full text-base group font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3">Gallery</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setToggle(!toggle)}
              type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
              aria-controls="dropdown-example"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Category
              </span>
              {toggle && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
              {!toggle && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              )}
            </button>
            <ul
              id="dropdown-example"
              className={toggle ? "hidden py-2 space-y-2" : "py-2 space-y-2"}
            >
              <li>
                <button
                  onClick={() => setCategoryProduct("hijab")}
                  type="button"
                  className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                >
                  Hijab
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCategoryProduct("pashmina")}
                  type="button"
                  className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                >
                  Pashmina
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCategoryProduct("scarf")}
                  type="button"
                  className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                >
                  Scarf
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCategoryProduct("totebag")}
                  type="button"
                  className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                >
                  Totebag
                </button>
              </li>
            </ul>
          </li>
          <li>
            <SearchForm searchChangeHandler={searchChangeHandler} />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarMenu;

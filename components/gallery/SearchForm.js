const SearchForm = ({ searchChangeHandler }) => {
  return (
    <form>
      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1 w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block pl-10 p-2.5 w-full "
            placeholder="Search"
            onChange={searchChangeHandler}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

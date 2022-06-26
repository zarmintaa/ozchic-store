const Order = ({ totalItems, setOrderToggle, orderToggle, price }) => {
  return (
    <div className="shadow-lg p-5 h-fit mx-5 lg:mx-0">
      <div className="border-b-2 text-center text-xl font-semibold border-gray-600 pb-2">
        <h1 className="font-semibold text-2xl">Detail</h1>
      </div>
      <div className="mt-5">
        <div className="text-xl">Total item : {totalItems}</div>
        <div className="text-xl">
          Total harga: <span className="font-medium text-2xl">Rp.{price}</span>
        </div>
      </div>
      <div className="mt-5">
        <button
          onClick={() => setOrderToggle(!orderToggle)}
          className="w-full py-2 text-white text-lg bg-teal-600 hover:bg-teal-700 rounded"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Order;

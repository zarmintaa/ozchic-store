import ItemCartOrder from "./ItemCartOrder";

const ListCartOrder = ({ products, deleteProduct }) => {
  return (
    <div className="grid gap-5 h-full lg:h-fit mx-5 lg:mx-0">
      {products.length > 0 ? (
        products.map((product) => (
          <ItemCartOrder
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-medium text-gray-900">
            Keranjang Kosong
          </h1>
        </div>
      )}
    </div>
  );
};

export default ListCartOrder;

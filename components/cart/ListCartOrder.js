import ItemCartOrder from "./ItemCartOrder";

const ListCartOrder = ({ products, updateProduct }) => {
  return (
    <div className="grid gap-5 h-fit">
      {products.length > 0 ? (
        products.map((product) => (
          <ItemCartOrder
            key={product.id}
            product={product}
            updateProduct={updateProduct}
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

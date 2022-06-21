import ItemCartOrder from "./ItemCartOrder";

const ListCartOrder = ({ products, updateProduct }) => {
  return (
    <div className="grid gap-5 h-fit">
      {products.map((product) => (
        <ItemCartOrder
          key={product.id}
          updateProduct={updateProduct}
          product={product}
        />
      ))}
    </div>
  );
};

export default ListCartOrder;

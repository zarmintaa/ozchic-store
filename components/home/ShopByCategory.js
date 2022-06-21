import Image from "next/image";

const categoryData = [
  {
    id: 1,
    title: "SCARVES & SHAWLS",
    image: "/images/assets/static/shop-category/category_1.png",
  },
  {
    id: 2,
    title: "CLOTHES",
    image: "/images/assets/static/shop-category/category_2.png",
  },
  {
    id: 3,
    title: "PRINTED SCARVES",
    image: "/images/assets/static/shop-category/category_3.png",
  },
  {
    id: 4,
    title: "TOTEBAGS & POUCHES",
    image: "/images/assets/static/shop-category/category_4.png",
  },
];

const ShopByCategory = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-10 lg:py-20">
      <div className="flex items-center justify-center mb-20">
        <h1 className="font-f-unna text-5xl lg:text-6xl">Shop By Category</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-0 mx-auto items-center justify-between w-full lg:w-8/12 font-dm-sans font-semibold gap-5 text-black">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden grid  grid-cols-1 lg:grid-cols-2 items-center h-80 bg-white shadow-sm hover:shadow-lg rounded-md"
          >
            <div className="block w-full h-[700px] lg:h-full">
              <Image
                src={category.image}
                alt={category.title}
                width={250}
                height={330}
                layout="responsive"
                objectPosition="center"
                loading="lazy"
              />
            </div>
            <div className="absolute lg:static bg-white w-full bottom-0  p-2.5 lg:p-0 flex items-center text-center justify-center">
              <h1 className="text-2xl w-full lg:w-36 mx-auto">
                {category.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;

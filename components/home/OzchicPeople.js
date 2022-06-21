import Image from "next/image";
const images = [
  {
    id: 1,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette.png",
    alt: "people-1",
  },
  {
    id: 2,
    url: "/images/assets/static/ozhic-people/black.png",
    alt: "people-1",
  },
  {
    id: 3,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette 1.png",
    alt: "people-1",
  },
  {
    id: 4,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette 2.png",
    alt: "people-1",
  },
  {
    id: 5,
    url: "/images/assets/static/ozhic-people/kama-behind.png",
    alt: "people-1",
  },
];
const OzchicPeople = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 lg:p-16">
      <h1 className="text-xl font-f-poppins font-semibold">#ozchicpeople</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2.5 mt-6  items-center justify-center w-full lg:w-10/12 mx-auto">
        {images.map((image) => (
          <div key={image.id} className="block ">
            <Image
              src={image.url}
              width={250}
              height={250}
              alt={image.alt}
              objectPosition="center"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OzchicPeople;

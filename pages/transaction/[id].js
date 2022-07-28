import { Fragment, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/UI/Loading";
import Image from "next/image";
import Seo from "../../components/utils/Seo";

const getDetailTransaction = async (id) => {
  const response = await fetch(
    `https://ozchic-store-api.herokuapp.com/api/v1/transaction/user/${id}`
  );

  const resJson = await response.json();

  return resJson.data;
};

const DetailTransaction = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [userTransaction, setUserTransaction] = useState([]);
  const baseUrlImage = "https://ozchic-store-api.herokuapp.com/";

  const initialDetailTransaction = useCallback(async () => {
    const id = router.query.id;
    const transaction = await getDetailTransaction(id);

    setUserTransaction(transaction);
    setLoading(false);
  }, [router.query.id]);

  useEffect(() => {
    initialDetailTransaction();
  }, [initialDetailTransaction]);

  console.log(userTransaction.products);

  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  return (
    <Fragment>
      <Seo
        description="Detail cart untuk menampilkan detail produk dari keranjang"
        url={`https://ozchic.com/transaction/${router.query.id}`}
        title="Ozchic Store | Detail Transaction"
      />
      <div className="w-full lg:w-9/12 mx-auto grid lg:grid-cols-[2fr,_1fr] gap-5  my-10">
        <div>
          <div className="grid gap-5 h-fit">
            {userTransaction.products.map((item) => (
              <div
                key={item.productId}
                className="flex gap-x-5 justify-center shadow-md rounded-lg overflow-hidden "
              >
                <div className="w-32 h-32">
                  <Image
                    src={baseUrlImage + item.image}
                    className="object-cover w-full h-full"
                    width={500}
                    height={750}
                    layout={"responsive"}
                    objectFit="cover"
                    objectPosition="center"
                    alt={item.name}
                  />
                </div>
                <div className="w-full flex flex-col gap-y-1 py-2.5 ">
                  <h1 className="text-gray-900 text-2xl title-font font-medium cursor-pointer">
                    {item.name}
                  </h1>
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      className="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rp. {item.price}
                  </span>
                  <span>Jumlah : {item.quantity} pcs</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-lg p-5 h-fit mx-5 lg:mx-0">
          <div className="border-b-2 text-center text-xl font-semibold border-gray-600 pb-2">
            <h1 className="font-semibold text-2xl">Detail Transaksi</h1>
          </div>
          <div className="mt-5 grid gap-2.5 text-lg">
            <div>
              Nama :{" "}
              <span className="text-gray-500">{userTransaction.name}</span>
            </div>
            <div>
              Alamat :{" "}
              <span className="text-gray-500">{userTransaction.address}</span>
            </div>
            <div>
              No. Hp :{" "}
              <span className="text-gray-500">{userTransaction.phone}</span>
            </div>
            <div>
              Total harga :{" "}
              <span className="text-gray-700 font-bold">
                Rp. {userTransaction.totalPaid}
              </span>
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={() => router.push("/transaction")}
              className="w-full py-2 text-white text-lg bg-teal-600 hover:bg-teal-700 rounded"
            >
              Transaksi Lainnya
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailTransaction;

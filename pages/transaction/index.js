import { useCallback, useEffect, useState } from "react";
import { getAuthFromLocalStorage } from "../../lib/AuthHelper";
import Loading from "../../components/UI/Loading";
import { useRouter } from "next/router";

const getToken = () => {
  const auth = getAuthFromLocalStorage();
  return {
    token: auth?.data?.token,
    userId: auth?.data?.userId,
  };
};

const fetchTransactionUser = async (token) => {
  try {
    const response = await fetch(
      `https://ozchic-store-api.herokuapp.com/api/v1/transaction/${token}`
    );

    const resJson = await response.json();

    return resJson.data;
  } catch (e) {
    console.log(e);
  }
};

const Transaction = () => {
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const initialTransaction = useCallback(async () => {
    const token = getToken();
    const transaction = await fetchTransactionUser(token.userId);

    setLoading(false);
    setTransaction(transaction);
  }, []);

  useEffect(() => {
    const auth = getToken();
    if (!auth.token) {
      setIsLoggedIn(false);
      setLoading(false);
    } else {
      setIsLoggedIn(true);
      setLoading(true);
      initialTransaction();
    }
  }, [initialTransaction]);

  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="w-full md:w-7/12 lg:6/12 rounded p-10 grid justify-center mx-auto font-semibold gap-5 shadow my-10">
        <h1 className="text-xl">Anda harus login terlebih dahulu</h1>
        <button
          onClick={() => router.push("/login")}
          type="button"
          className="px-5 py-1.5 bg-teal-500 text-white rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-9/12 md:w-7/12 mx-auto my-10 font-f-poppins min-h-screen">
      <div className="text-center text-3xl font-semibold mb-10 text-teal-700">
        <h1>Riwayat Transaksi</h1>
      </div>
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                Pemesan
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                No. Hp
              </th>
              <th scope="col" className="px-6 py-3">
                Total Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Pembayaran
              </th>
              <th scope="col" className="px-6 py-3">
                Pembayaran
              </th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((item) => (
              <tr key={item._id} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  {item?.name}
                </th>
                <th className="px-6 py-4 font-normal">{item?.address}</th>
                <td className="px-6 py-4">{item?.phone}</td>
                <td className="px-6 py-4">Rp. {item?.totalPaid}</td>
                <td className="px-6 py-4 text-center">
                  {item?.isPaid ? (
                    <span className="px-2.5 py-1 bg-green-500 text-white rounded-lg">
                      lunas
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 bg-orange-500 text-white rounded-lg">
                      Belum lunas
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    onClick={() => router.push(`/transaction/${item._id}`)}
                    className="font-medium text-blue-600  hover:underline"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;

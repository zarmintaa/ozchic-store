import { Fragment } from "react";
import Seo from "../components/utils/Seo";

const Faq = () => {
  return (
    <Fragment>
      <Seo
        description={"Halaman FAQ"}
        url={"https://ozchic-store.vercel.app/faq"}
        title={"FAQ"}
      />
      <main className="font-f-poppins container mb-10">
        <div className="text-center my-10">
          <h1 className="text-5xl font-semibold text-gray-900">
            Ada Pertanyaan?
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:w-7/12 md:w-9/12 sm:w-full px-2.5 lg:px-0 mx-auto">
          <div className="grid gap-2 shadow p-5 rounded">
            <h1 className="text-3xl font-semibold font-f-poppins font-medium text-gray-900">
              Cara Pesan
            </h1>
            <p className="text-gray-700 font-light">
              Untuk memesan produk, pengguna dapat memilih produk di halaman
              gallery lalu memilih produk yang diinginkan, pilih jumlah produk
              yang ingin dibeli dan tambahkan ke keranjang. Setelah itu
              dihalaman cart, pengguna dapat melakukan pemesanan dengan mengisi
              form pemesanan, setelah itu pengguna dapat melihat pesanan pada
              halaman transaksi.
            </p>
          </div>

          <div className="grid gap-2 shadow p-5 rounded h-fit">
            <h1 className="text-3xl font-semibold font-f-poppins font-medium text-gray-900">
              Cara Pembayaran
            </h1>
            <p className="text-gray-700 font-light">
              Untuk pembayaran, pengguna dapat melakukan pembayaran melalui bank
              transfer pada bank BCA, BNI ke rekening Ozchic atau melalui
              e-wallet Ovo atau Dana.
            </p>
          </div>
          <div className="grid gap-2 shadow p-5 rounded">
            <h1 className="text-3xl font-semibold font-f-poppins font-medium text-gray-900">
              Cara Pembatalan Pemesanan
            </h1>
            <p className="text-gray-700 font-light">
              Untuk pembatalan pemesanan, pengguna dapat melakukan pembatalan
              pemesanan melalui chat pada kontak kami, jika produk sudah di
              proses oleh kami maka produk yang dipesan sudah tidak bisa
              dibatalkan.
            </p>
          </div>
          <div className="grid gap-2 shadow p-5 rounded">
            <h1 className="text-3xl font-semibold font-f-poppins font-medium text-gray-900">
              Cara Pengembalian Barang
            </h1>
            <p className="text-gray-700 font-light">
              Untuk pengembalian barang dapat dilakukan apabila ada kerusakan
              barang atau kesalahan pengiriman dengan memberi bukti kepada kami
              untuk verifikasi pembatalan produk.
            </p>
          </div>

          <div className="grid gap-2 shadow p-5 rounded">
            <h1 className="text-3xl font-semibold font-f-poppins font-medium text-gray-900">
              Garansi
            </h1>
            <p className="text-gray-700 font-light">
              Produk kami memiliki garansi pengembalian barang atau ganti rugi
              apabila barang yang diterima tidak sesuai, pengguna dapat
              menghubungi kami untuk mengajukan hal tersebu.
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Faq;

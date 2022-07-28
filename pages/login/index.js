import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/UI/Loading";
import {
  getAuthFromLocalStorage,
  setAuthToLocalStorage,
  SignIn,
} from "../../lib/AuthHelper";
import Seo from "../../components/utils/Seo";

function AuthPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    setLoading(true);
    const auth = getAuthFromLocalStorage();
    const token = auth?.data?.token;

    if (token) {
      setLoading(true);
      router.replace("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <Loading />;
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (inputPassword.length < 7) {
      alert("Password must be at least 7 characters");
    } else {
      try {
        const data = await SignIn(inputEmail, inputPassword);

        if (!data.error) {
          setAuthToLocalStorage(data);
        }

        await router.reload();
      } catch (e) {
        setLoading(false);
        alert(e);
      }
    }
  };

  return (
    <Fragment>
      <Seo
        description={"Halaman Login"}
        url={"https://ozchic-store.vercel.app/login"}
        title={"Ozchic Store | Login"}
      />
      <main className="mx-2.5 md:mx-auto lg:mx-auto">
        {loading && (
          <div className="text-center">
            <Loading />
          </div>
        )}
        <section className="w-full md:w-7/12 lg:w-5/12 mx-auto my-20 shadow-lg p-8 rounded-lg">
          <form onSubmit={loginHandler}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                onChange={(event) => setInputEmail(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                onChange={(event) => setInputPassword(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
              />
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="submit"
                className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="text-white bg-white text-teal-800 font-medium border border-teal-600 hover:shadow focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Register
              </button>
            </div>
          </form>
        </section>
      </main>
    </Fragment>
  );
}

export default AuthPage;

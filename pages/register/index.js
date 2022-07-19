import { useRouter } from "next/router";
import { Fragment, useRef, useState } from "react";
import Loading from "../../components/UI/Loading";
import "react-toastify/dist/ReactToastify.css";

async function createUser(name, email, password) {
  const response = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/auth/signup",
    {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    type: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  async function submitHandler(event) {
    setError({
      status: false,
      type: "",
      message: "",
    });
    event.preventDefault();
    setLoading(true);

    if (
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      name.trim().length === 0
    ) {
      setLoading(false);
      alert("Semua field harus diisi");
      return;
    } else if (password.length < 8) {
      setError({
        status: true,
        type: "password",
        message: "Password harus lebih dari 8 karakter",
      });
      setLoading(false);
      return;
    }

    try {
      const result = await createUser(name, email, password);

      if (!result.error) {
        // set some auth state

        alert("Berhasil mendaftar, silahkan login");

        await router.push("/login");
      }
    } catch (error) {
      setError({
        status: true,
        type: "email",
        message: error.message,
      });
      setName(name);
      setEmail(email);
      setPassword(password);
    }
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="mx-2.5 md:mx-auto lg:mx-auto">
      {loading && (
        <div className="text-center">
          <Loading />
        </div>
      )}
      <section className="w-full md:w-7/12 lg:w-5/12  mx-auto my-20 shadow-lg p-8 rounded-lg">
        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            {error.status && error.type === "email" && (
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-red-600"
              >
                {error.message}
              </label>
            )}
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
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
            {error.status && error.type === "password" && (
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-red-600"
              >
                {error.message}
              </label>
            )}
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="submit"
              className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Register
            </button>
            <button
              onClick={() => router.push("/login")}
              className="text-white bg-white text-teal-800 font-medium border border-teal-600 hover:shadow focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;

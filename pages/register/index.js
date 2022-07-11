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
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    setLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = nameInputRef.current.value;

    // optional: Add validation

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
      enteredName.trim().length === 0
    ) {
      setLoading(false);
      alert("Semua field harus diisi");
      return;
    } else if (enteredPassword.length < 8) {
      alert("Password harus lebih dari 8 karakter");
      return;
    }

    try {
      const result = await createUser(
        enteredName,
        enteredEmail,
        enteredPassword
      );

      if (!result.error) {
        // set some auth state

        alert("Berhasil mendaftar, silahkan login");

        await router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
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
              ref={nameInputRef}
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
            <input
              type="email"
              id="email"
              ref={emailInputRef}
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
              ref={passwordInputRef}
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
    </Fragment>
  );
};

export default Register;

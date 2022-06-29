const SignIn = async (email, password) => {
  const response = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

const SignUp = async (name, email, password) => {
  const response = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

const setAuthToLocalStorage = (token) => {
  localStorage.setItem("auth", JSON.stringify(token));
};

const getAuthFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("auth"));
  }
};

const deleteAuthFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth");
  }
};

export {
  SignIn,
  SignUp,
  setAuthToLocalStorage,
  getAuthFromLocalStorage,
  deleteAuthFromLocalStorage,
};

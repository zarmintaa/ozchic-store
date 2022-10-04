const BASE_URL = "https://ozchic-store-api.herokuapp.com/api/v1";

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("auth")).data.token;
  }
};

export const putAccessToken = (accessToken) =>
  localStorage.setItem("accessToken", accessToken);

export const fetchWithToken = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    return { error: true, data: null };
  }

  return { error: false, data };
};

export const signUp = async (name, email, password) => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    return { error: true, data: null };
  }

  return { error: false, data };
};

export const getAllProducts = async () => {
  const response = fetchWithToken(`${BASE_URL}/product/all`);
  const data = await response.json();

  if (!response.ok) {
    alert(data.message || "Something went wrong!");
    return { error: true, data: null };
  }

  return { error: false, data };
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/product/${id}`);
  const data = await response.json();

  if (!response.ok) {
    alert(data.message || "Something went wrong!");
    return { error: true, data: null };
  }

  return { error: false, data };
};

export const getProductByCategory = async (category) => {
  const response = fetchWithToken(`${BASE_URL}/product/category/${category}`);
  const data = await response.json();

  if (!response.ok) {
    alert(data.message || "Something went wrong!");
    return { error: true, data: null };
  }

  return { error: false, data };
};

export const getProductByTitle = async (title) => {
  const response = fetchWithToken(`${BASE_URL}/product?title=${title}`);
  const data = await response.json();

  if (!response.ok) {
    alert(data.message || "Something went wrong!");
    return { error: true, data: null };
  }

  return { error: false, data };
};

export const getFeaturedProducts = async () => {
  const response = await fetchWithToken(`${BASE_URL}/product/all/featured`);
  const results = await response.json();

  console.log(results);
  if (!response.ok) {
    alert(results.message || "Something went wrong!");
    return { error: true, data: null };
  }

  return { error: false, data: results.data };
};

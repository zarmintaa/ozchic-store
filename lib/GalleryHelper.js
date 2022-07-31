export const getAllProducts = async () => {
  const res = await fetch(
    "https://ozchic-store-api.herokuapp.com/api/v1/product/all"
  );
  let data;

  if (res.ok) {
    data = await res.json();
  } else {
    data = {
      data: [],
    };
  }

  return data.data;
};

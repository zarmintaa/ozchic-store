import { getAuthFromLocalStorage } from "./AuthHelper";

const DeleteCartUser = async (_id) => {
  const response = await fetch(
    `https://ozchic-store-api.herokuapp.com/api/v1/cart/${_id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAuthFromLocalStorage()?.data?.token}`,
      },
    }
  );

  return await response.json();
};

export { DeleteCartUser };

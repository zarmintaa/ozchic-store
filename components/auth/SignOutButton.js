import { deleteAuthFromLocalStorage } from "../../lib/AuthHelper";
import { useRouter } from "next/router";

const SignOutButton = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        deleteAuthFromLocalStorage();
        router.push("/login");
      }}
      className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
    >
      Sign out
    </div>
  );
};

export default SignOutButton;

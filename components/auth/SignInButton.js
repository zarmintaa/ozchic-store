import { useRouter } from "next/router";

const SignInButton = ({ userToggle }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        userToggle(false);
        router.replace("/login");
      }}
      className="cursor-pointer block w-20 py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
    >
      Sign In
    </div>
  );
};

export default SignInButton;

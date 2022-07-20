import { useRouter } from "next/router";

const SignInButton = ({ userToggle }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        userToggle(false);
        router.replace("/login");
      }}
      className="block w-full text-sm py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
    >
      Login
    </div>
  );
};

export default SignInButton;

import { signOut } from "next-auth/react";

const SignOutButton = ({ type }) => {
  return (
    <div
      onClick={() => signOut()}
      className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
    >
      Sign out
    </div>
  );
};

export default SignOutButton;

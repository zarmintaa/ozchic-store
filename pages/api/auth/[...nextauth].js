import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import User from "../../../models/User";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDatabase();

        const user = await User.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        return {
          name: user.name,
          email: user.email,
          image: user._id.toString(),
        };
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (user.token = token);
      return user;
    },
    session: async ({ session, user }) => {
      session.user = user;
      return session;
    },
  },
  pages: {
    signIn: "/api/auth/signin",
    signOut: "/api/auth/signout",
    signUp: "/api/auth/signup",
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
});

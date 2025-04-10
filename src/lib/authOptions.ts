import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import User from "@/app/models/user";
import bcrypt from "bcrypt";

interface User {
  id: number;
  name?: string;
  email: string;
  password?: string;
  role: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: User) {
        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) return;

        const isPasswordOk = await bcrypt.compare(password, user.password);

        console.log(user);

        if (isPasswordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export { authOptions };

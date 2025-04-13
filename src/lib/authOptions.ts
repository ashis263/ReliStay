import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import User from "@/app/models/user";
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user || !user.password) return null;

        const isPasswordOk = await bcrypt.compare(password, user.password);

        if (isPasswordOk) {
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
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

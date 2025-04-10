import NextAuthProvider from "@/providers/next-auth-provider";
import { ReactNode } from "react";
import SearchProvider from "./(home)/homestays/providers/search-provider";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <NextAuthProvider>
      <SearchProvider>{children}</SearchProvider>
    </NextAuthProvider>
  );
};

export default Wrapper;

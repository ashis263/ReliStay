import NextAuthProvider from "@/providers/next-auth-provider";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
    );
}

export default Wrapper;

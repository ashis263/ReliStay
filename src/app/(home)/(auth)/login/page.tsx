import { Metadata } from "next";
import { LoginForm } from "./components/login-form";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex justify-center items-center">
        <Logo variant="black" className="w-full text-center" />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}

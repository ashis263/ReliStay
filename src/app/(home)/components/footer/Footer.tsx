"use client";

import Container from "@/components/container";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  if (
    path.includes("/dashboard") ||
    path.includes("/login") ||
    path.includes("/register")
  ) {
    return <></>;
  }

  return (
    <footer className="rounded-lg shadow-sm ">
      <Container className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div>Footer</div>
      </Container>
    </footer>
  );
};

export default Footer;

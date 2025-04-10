"use client";

import Link from "next/link";
import { navigation } from "@/constant";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Container from "@/components/container";
import Logo from "@/components/Logo";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { NavDropdown } from "./components/NavDropdown";

const Navbar = () => {
  const path = usePathname();
  const session = useSession();
  const [fixed, setFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll: () => void = () => {
      const shouldFixed = window.scrollY > 0;
      setFixed(shouldFixed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (
    path.includes("/dashboard") ||
    path.includes("/login") ||
    path.includes("/register")
  ) {
    return <></>;
  }

  return (
    <div className="h-16">
      <nav
        className={`w-full fixed top-0 z-50 py-4 flex transition-all duration-300 ease-in-out ${
          fixed ? "!bg-white shadow-[0_2px_10px_rgb(0_0_0_/_0.15)]" : ""
        }`}
      >
        <Container className={clsx("flex items-center")}>
          <div className="flex justify-between items-center h-full w-full">
            <Logo variant="black" />
            <ul className="hidden md:flex gap-x-6 ">
              {navigation.map((navItem) => (
                <li
                  key={navItem.id}
                  className={`hover:text-primary transition-all duration-150  text-sm font-medium ${
                    path === navItem.path ? "text-primary" : ""
                  }`}
                >
                  <Link href={navItem.path}>
                    <p>{navItem.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
            {session?.data?.user ? (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <div>
                <Link href={"register"}>
                  <Button variant="link" className="cursor-pointer text-back">
                    Register
                  </Button>
                </Link>
                <Link href={"/login"}>
                  <Button className="max-sm:!h-7 rounded">Login</Button>
                </Link>
              </div>
            )}
          </div>
          <div className="sm:hidden ml-2">
            <NavDropdown />
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;

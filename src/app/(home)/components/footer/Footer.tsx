"use client";

import Container from "@/components/container";
import Logo from "@/components/Logo";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
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
    <footer className="rounded-lg shadow-sm bg-white">
      <Container className="mt-10 lg:mt-16 py-5 md:py-10 grid grid-cols-1 md:grid-cols-3 justify-between gap-5 lg:gap-10">
        <div className="text-justify leading-5">
          <Logo className="mb-3"/>
          <p className="lg:w-4/5">
            ReliStay provides a trusted destination for travelers across
            Bangladesh, offering reliable stays and seamless travel experiences.
            Our commitment to comfort and security ensures every journey feels
            like home. Whether you&apos;re exploring the hills or relaxing by
            the rivers, we make your travel truly unforgettable.
          </p>
        </div>
        <div className="flex flex-col sm:pl-16 lg:pl-24 xl:pl-32">
          <div>
            <h3 className="text-xl font-medium underline mb-3">
              Useful Links
            </h3>
          </div>
          <div className="flex flex-col gap-1 h-full font-bold">
            <Link href="">Help</Link>
            <Link href="">Account</Link>
            <Link href="">Safety and Privacy</Link>
            <Link href="">Terms and Conditions</Link>
          </div>
        </div>
        <div className="self-end md:text-end h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-medium underline mb-3">Contact</h3>
            <div className="text-xs">
              <p className="flex items-center gap-1 md:place-self-end">
                <MapPin className="w-3" /> Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-1 md:place-self-end">
                <Phone className="w-3" /> +8801234567890
              </p>
              <p className="flex items-center gap-1 md:place-self-end">
                <Mail className="w-3" /> info@relistay.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="">Find us on:</h3>
            <div className="flex gap-2 items-center  md:place-self-end">
              <Facebook className="text-[#1877F2]" />
              <Linkedin className="text-[#0A66C2]" />
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <p className="text-xs text-center py-2">
        Copyright © {new Date().getFullYear()} - All right reserved by ReliStay
      </p>
    </footer>
  );
};

export default Footer;

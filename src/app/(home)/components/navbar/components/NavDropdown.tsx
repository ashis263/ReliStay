'use client';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigation } from "@/constant";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavDropdown() {
    const path = usePathname();
    const session = useSession();
    const status = session.status;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="!p-0">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 m-2">
        <DropdownMenuGroup>
          {navigation.map((navItem) => (
            <DropdownMenuItem
              key={navItem.id}
              className={`hover:text-primary transition-all duration-150  text-sm font-medium ${
                path === navItem.path ? "text-primary" : ""
              } ${(status === 'unauthenticated') && (navItem.label === 'Dashboard') ? 'hidden' : '' }`}
            >
              <Link href={navItem.path}>
                <p>{navItem.label}</p>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

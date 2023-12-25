import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

const Navigation = () => {
  return (
    <Navbar
      shouldHideOnScroll
      classNames={{ base: "bg-white py-3", wrapper: "max-w-7xl mx-auto" }}
    >
      <NavbarBrand>
        <Image
          src="/apple-touch-icon.png"
          width={40}
          height={40}
          alt="main_logo"
        />
        <p className="font-semibold text-xl ml-4">Tiara Bisrina</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page">
            Portofolios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;

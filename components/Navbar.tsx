import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { TiaraLogo } from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher";
import NavigationList from "./NavigationList";
import Link from "next/link";

const Navigation = () => {
  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      classNames={{
        base: "bg-transparent py-4",
        wrapper:
          "max-w-7xl mx-auto h-12 bg-primary-one dark:bg-primary rounded-lg",
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <TiaraLogo className="h-6" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="end">
        <NavigationList />
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;

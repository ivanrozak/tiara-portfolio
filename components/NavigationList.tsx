"use client";
import { Button, cn, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationList = () => {
  const path = usePathname();
  const listLink = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/project",
      name: "Project",
    },
    {
      href: "/blog",
      name: "Blog",
    },
  ];
  return (
    <>
      {listLink.map((link, idx) => (
        <NavbarItem key={idx}>
          <Button
            as={Link}
            href={link.href}
            size="sm"
            variant="light"
            className={cn("nav-link", {
              "nav-link-selected": path === link.href,
            })}
            color="primary"
          >
            {link.name}
          </Button>
        </NavbarItem>
      ))}
    </>
  );
};

export default NavigationList;

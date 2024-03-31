"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "./Icons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      isIconOnly
      variant="light"
      radius="full"
      onClick={() => changeTheme()}
    >
      {theme === "light" ? (
        <MoonIcon className="text-primary" />
      ) : (
        <SunIcon className="text-white" />
      )}
    </Button>
  );
}

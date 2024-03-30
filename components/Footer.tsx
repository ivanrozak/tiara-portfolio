import React from "react";
import { TiaraLogo } from "./Icons";
import { cn } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h4 className="font-syne text-primary font-extrabold uppercase text-4xl text-center mb-8">
          Let's Work <br /> Together.
        </h4>
        <div className="flex justify-between items-center">
          <TiaraLogo className="h-6" />
          <div className="text-sm text-gray-500">
            © 2024 tiarabisrina. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

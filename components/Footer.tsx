import React from "react";
import { TiaraLogo } from "./Icons";

const Footer = () => {
  return (
    <div className="bg-gray-one">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h4 className="font-syne max-w-5xl mx-auto font-extrabold uppercase text-3xl text-center mb-14">
          Explore More{" "}
          <span className="text-primary-one">
            pages to discover my case studies and services
          </span>
        </h4>
        <div className="flex justify-between items-center">
          <TiaraLogo className="h-6" />
          <div className="text-sm text-second">
            © 2024 tiarabisrina. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import { LineStraight } from "./Icons";

const Header = () => {
  return (
    <section className="bg-[#4047FC] w-full">
      <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 text-white flex flex-col md:flex-row items-center gap-8">
        <div className="min-w-[300px] flex flex-col items-center gap-4">
          <Image
            src="/static/hero.png"
            width={195}
            height={214}
            className="ml-6"
            alt="hero"
          />
          <div className="text-center md:text-left">
            <p className="font-semibold mb-2">Tiara Bisrina</p>
            <p>
              CX Researcher and <br /> Designer at <b>ASA CX Consultant</b>
            </p>
          </div>
        </div>
        <div className="max-w-[700px]">
          <p className="font-bold">Bio:</p>
          <p className="mt-2">
            As a CX (Customer Experience) and UX (User Experience)professional
            specializing in driving customer-centric transformations for
            businesses, I consistently{" "}
            <b className="relative">
              emphasize{" "}
              <div className="absolute top-4 right-0">
                <LineStraight />
              </div>
            </b>{" "}
            the significance of delivering high-quality interactions.
          </p>
          <p className="mt-8">
            I focus on revolutionizing business processes to meet and exceed
            customer expectations. Additionally, I assist companies in
            strengthening relationships with their customers, ultimately driving
            revenue growth through{" "}
            <b>improved experiences across all touchpoints.</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;

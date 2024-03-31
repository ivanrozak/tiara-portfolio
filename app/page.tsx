// import { Image } from "@nextui-org/react";
import { LineBottom } from "@/components/Icons";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="pt-20 bg-svg-one bg-no-repeat bg-cover bg-top h-[100svh]">
      <div className="max-w-7xl h-full mx-auto px-6 pt-24 pb-16 flex flex-col justify-between">
        <div className="flex flex-row">
          <div className="pt-32">
            <div
              className="animate-in"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              <h1 className="font-syne text-6xl tracking-wide leading-[70px]">
                Crafting <span className="text-primary-one">Seamless</span>{" "}
                <br /> Experiences.
              </h1>
              <h4 className="leading-8 mt-6 font-light">
                consistently{" "}
                <span className="relative font-bold">
                  emphatize{" "}
                  <LineBottom className="absolute -bottom-[10px] left-0" />
                </span>{" "}
                users' needs for <br /> the high-quality interactions.
              </h4>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/static/graphic_home.png"
              width={481}
              height={459}
              className="w-[90%] -ml-24"
              alt="image hero"
            />
          </div>
        </div>
        <div
          className="flex items-center gap-6 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <div>☍ to get your customer happy</div>
          <div className="flex-1 border-b border-primary-one"></div>
          <Button as={Link} href="/about" color="primary" radius="sm">
            Connect with me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

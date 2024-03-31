import {
  ArrowLink,
  DownloadIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="pt-20 bg-svg-one bg-no-repeat bg-cover bg-top min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex gap-8">
          <div
            className="flex-none animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Image
              src="/static/tiara.png"
              width={188}
              height={276}
              className="rounded-2xl"
              alt="tiara bisrina firdaus"
            />
          </div>
          <div
            className="flex-1 animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h1 className="text-4xl font-bold leading-[70px]">
              Hi, I’m Tiara Bisrina
            </h1>
            <h4 className="text-2xl leading-8">
              <span className="font-bold">CX Consultant/UIUX Designer,</span>{" "}
              <br />
              Based on Jakarta
            </h4>
            <p className="mt-4 leading-8">
              I love crafting user journeys, I used to{" "}
              <span className="font-medium text-primary-one">
                translating user research findings and recommendations into
                seamless UI designs.
              </span>{" "}
              My mission? Making customer experiences smoother across all
              touchpoints, be it online or offline. Let's work together to
              elevate your user experience to the next level!
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 mt-12 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <Link className="link-container" href="mailto:tbisfir@gmail.com">
            <div className="flex items-center gap-4">
              <EmailIcon className="w-6 h-6" />
              Email
            </div>
            <ArrowLink className="w-6 h-6" />
          </Link>
          <Link
            className="link-container"
            href="https://www.linkedin.com/in/tiara-bisrina/"
          >
            <div className="flex items-center gap-4">
              <LinkedinIcon className="w-6 h-6" />
              LinkedIn
            </div>
            <ArrowLink className="w-6 h-6" />
          </Link>
          <Link className="link-container" href="https://wa.me/+6281379163839">
            <div className="flex items-center gap-4">
              <WhatsAppIcon className="w-6 h-6" />
              Whatsapp
            </div>
            <ArrowLink className="w-6 h-6" />
          </Link>
          <Link
            className="link-container"
            href="https://drive.google.com/file/d/1stmVXXAU8n8wez4LfSTjmyM_y5XOrsiQ/view?usp=sharing"
          >
            <div className="flex items-center gap-4">
              <DownloadIcon className="w-6 h-6" />
              Download Resume
            </div>
            <ArrowLink className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

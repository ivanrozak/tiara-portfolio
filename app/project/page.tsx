import { Avatar, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  const projectList = [
    {
      imageSrc: "/static/graphic1.jpg",
      category: "Usability Evaluation",
      title: "Bulkbuyer Website Evaluation",
      description: `Evaluated Eiger's CARE Order Management website, catering to
      internal and external users, particularly bulk buyers, and
      provided actionable insights and recommendations for future
      enhancements.`,
      company: {
        imgSrc: "/static/brand_eiger.png",
        name: "PT Eigerindo Multi Produk Industri",
        description: "ASA Consulting (January - February 2024)",
      },
      href: "/project/bulkbuyer-website-evaluation",
    },
    {
      imageSrc: "/static/graphic3.jpg",
      category: "FGD and Mini Workshop",
      title: "WAG Flow Optimization",
      description: `Optimized communication flows for pregnant women, mothers with babies, and children under 5, through concept testing using FGD/Mini workshop methods, resulting in seamless procedures and valuable recommendations for the Ministry of Health.`,
      company: {
        imgSrc: "/static/brand_kemkes.png",
        name: "Kementerian Kesehatan RI",
        description: "ASA Consulting (Februari - Maret 2024)",
      },
      href: "/project/puskesmas-response-management",
    },
    {
      imageSrc: "/static/graphic2.jpg",
      category: "Design Development",
      title: "Mobile POS Revamp",
      description: `Transformed Eiger's POS desktop into a mobile-friendly version by conducting extensive user research, leading to the creation of high-fidelity designs tailored for mobile and tablet interfaces.`,
      company: {
        imgSrc: "/static/brand_eiger.png",
        name: "PT Eigerindo Multi Produk Industri",
        description: "ASA Consulting (October - December 2023)",
      },
    },
    {
      imageSrc: "/static/graphic4.jpg",
      category: "Private Project - Exercise : Figma Animation ",
      title: "Dental Clinic Appointment",
      description: `Optimized communication flows for pregnant women, mothers with babies, and children under 5, through concept testing using FGD/Mini workshop methods, resulting in seamless procedures and valuable recommendations for the Ministry of Health.`,
      company: {
        imgSrc: "/static/brand_tiara.png",
        name: "Tiara Bisrina",
        description: "CX Consultant/UIUX Designer",
      },
    },
  ];
  return (
    <div className="pt-20 bg-svg-one bg-contain bg-no-repeat">
      <div className="max-w-7xl px-6 py-4 mx-auto">
        <h1
          className="text-4xl font-bold leading-[70px] animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
          {projectList.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#D3D5FF]/30 p-6 rounded-xl animate-in"
              style={{ "--index": 2 + idx } as React.CSSProperties}
            >
              <div className="flex gap-4">
                <div className="w-[25%] relative">
                  <Image
                    src={p.imageSrc}
                    radius="md"
                    className="aspect-[11/12]"
                    classNames={{ img: "object-cover" }}
                    alt="image project"
                  />
                  {!p.href && (
                    <div className="absolute w-full text-center bg-black/80 text-white p-2 bottom-0 z-10 rounded-b-md">
                      It's Cookin`!
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-8">
                    {p.category}
                  </p>
                  <h2 className="text-2xl font-semibold leading-9">
                    {p.title}
                  </h2>
                  <p className="mt-1 line-clamp-3">{p.description}</p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-2">
                    <Avatar src={p.company.imgSrc} />
                    <div className="text-sm">
                      <p className="font-semibold">{p.company.name}</p>
                      <p>{p.company.description}</p>
                    </div>
                  </div>
                  <Button
                    as={Link}
                    color="primary"
                    radius="sm"
                    className="font-medium"
                    href={p.href || "#"}
                    isDisabled={!p.href}
                  >
                    See Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

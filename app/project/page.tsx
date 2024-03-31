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
      imageSrc: "/static/graphic3.jpg",
      category: "FGD and Mini Workshop",
      title: "WAG Flow Optimization",
      description: `Optimized communication flows for pregnant women, mothers with babies, and children under 5, through concept testing using FGD/Mini workshop methods, resulting in seamless procedures and valuable recommendations for the Ministry of Health.`,
      company: {
        imgSrc: "/static/brand_kemkes.png",
        name: "Kementerian Kesehatan RI",
        description: "ASA Consulting (Februari - Maret 2024)",
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
              <div className="rounded-xl overflow-hidden relative">
                <Image src={p.imageSrc} radius="md" alt="image project" />
                <div className="absolute top-0 left-0 z-20 w-full h-full bg-black/60 flex justify-center items-center">
                  <p className="text-white">Stay tuned, it's cookin'!</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold leading-7">{p.category}</p>
                <h2 className="text-2xl font-semibold leading-9">{p.title}</h2>
                <p className="mt-1">{p.description}</p>
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
                    href="#"
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

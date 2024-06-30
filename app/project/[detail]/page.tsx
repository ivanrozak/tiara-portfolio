"use client";
import React from "react";
import {
  Avatar,
  Button,
  Image,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@nextui-org/react";
import Link from "next/link";
import { PresenceIcon } from "@/components/Icons";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="pt-6 pb-12 animate-in"
      style={{ "--index": 2 } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

const TimelineDetails = ({
  children,
  title,
  timeline,
}: {
  children: React.ReactNode;
  title: string;
  timeline: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-2xl font-bold text-primary bg-primary-light rounded-full w-14 h-14 flex items-center justify-center ring-4 ring-white">
        {children}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p>{timeline}</p>
      </div>
    </div>
  );
};

interface Project {
  slug: string;
  title: string;
  description: string;
  heroImgSrc: string;
  company: {
    imgSrc: string;
    name: string;
    description: string;
  };
  objective: any;
}

const ProjectDetailPage = ({ params }: { params: { detail: string } }) => {
  const projectList: Project[] = [
    {
      slug: "bulkbuyer-website-evaluation",
      title: "Bulkbuyer Website Evaluation",
      description:
        "I Evaluated Eiger's CARE Order Management website, catering to internal and external users, particularly bulk buyers, and provided actionable insights and recommendations for future enhancements.",
      heroImgSrc: "/projects/postwoman-storehouse.jpg",
      company: {
        imgSrc: "/static/brand_eiger.png",
        name: "PT Eigerindo Multi Produk Industri",
        description: "ASA Consulting (January - February 2024)",
      },
      objective: (
        <p>
          <b className="text-gold">Objectives : </b> This research aims to
          evaluate how well CARE OM has assisted Eiger’s wholesale customers and
          sales teams in the wholesale transaction process since its release
          about 6 months ago from the perspectives of customers and sales teams.
        </p>
      ),
    },
  ];

  const project = projectList.find((project) => project.slug === params.detail);
  return (
    <div className="pt-20 bg-svg-one bg-cover bg-no-repeat">
      <div className="max-w-4xl px-6 py-4 mx-auto">
        <h1
          className="text-4xl font-bold leading-[70px] animate-in text-center mb-10"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Bulkbuyer Website Evaluation
        </h1>

        {project && (
          <div
            className="animate-in min-h-[60vh]"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Tabs
              aria-label="Options"
              fullWidth
              radius="sm"
              color="primary"
              size="md"
              classNames={{
                tabList: "border-foreground border p-2 bg-default-0",
                tab: "h-10",
              }}
            >
              <Tab key="overview" title="Overview">
                <Section>
                  <Image
                    src="/projects/postwoman-storehouse.jpg"
                    width="100%"
                    alt=""
                  />
                  <div className="flex items-center gap-2 mt-6">
                    <Avatar src={project.company.imgSrc} />
                    <div className="text-sm">
                      <p className="font-semibold">{project.company.name}</p>
                      <p>{project.company.description}</p>
                    </div>
                  </div>
                  <p className="mt-8">{project.description}</p>
                  <Card className="mt-8 p-4">
                    <CardBody>{project.objective}</CardBody>
                  </Card>
                  <div className="grid grid-cols-3 gap-4 mt-6 p-4">
                    <TimelineDetails
                      title="Participants"
                      timeline="(Internal & External)"
                    >
                      <div className="h-6">6</div>
                    </TimelineDetails>
                    <TimelineDetails
                      title="Months of Project"
                      timeline="(Feb-Mar 2024)"
                    >
                      <div className="h-6">2</div>
                    </TimelineDetails>
                    <TimelineDetails
                      title="Hybrid Session"
                      timeline="On/Offline"
                    >
                      <PresenceIcon className="h-8" />
                    </TimelineDetails>
                  </div>
                </Section>
              </Tab>
              <Tab key="process" title="Process">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="findings" title="Findings">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="result" title="Result">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="takeaways" title="Takeaways">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;

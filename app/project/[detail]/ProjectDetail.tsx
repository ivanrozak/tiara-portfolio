"use client";
import React from "react";
import { Avatar, Image, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import {
  IconFindings,
  IconGraduation,
  IconResearch,
  IconReview,
  IconSession,
  IconStars,
  IconUT,
  PresenceIcon,
} from "@/components/Icons";
import { Project } from "./page";

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

const ResearchSteps = () => {
  const steps = [
    {
      icon: <IconResearch />,
      details: "Research Guideline/ UT Plan Preparation",
    },
    {
      icon: <IconReview />,
      details: "Review and collect Feedback with client",
    },
    {
      icon: <IconUT />,
      details: "UT Tools Preparation & Rehearsal",
    },
    {
      icon: <IconSession />,
      details: "Conduct Session with Participant :))",
    },
    {
      icon: <IconFindings />,
      details: "Gather Findings & Reporting",
    },
  ];
  return (
    <div className="relative">
      <div className="absolute px-12 top-10 w-full">
        <hr className="w-full border-foreground border-dashed" />
      </div>
      <div className="relative grid grid-cols-5 gap-4 mt-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-6"
          >
            <div className="text-2xl font-bold text-primary bg-primary-light rounded-full w-20 h-20 flex items-center justify-center ring-4 ring-white">
              {step.icon}
            </div>
            <p className="text-center text-sm">{step.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DetailPage = ({ project }: { project: Project }) => {
  return (
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
                <p className="prose text-foreground max-w-none">
                  {project.company.description}
                </p>
              </div>
            </div>
            <p className="mt-8">{project.description}</p>
            <Card className="mt-8 p-4">
              <CardBody className="prose text-foreground max-w-none">
                {project.objective}
              </CardBody>
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
              <TimelineDetails title="Hybrid Session" timeline="On/Offline">
                <PresenceIcon className="h-8" />
              </TimelineDetails>
            </div>
          </Section>
        </Tab>
        <Tab key="process" title="Process">
          <Section>
            <p className="prose text-foreground max-w-none">
              {project.processMethod}
            </p>
            <ResearchSteps />
            <div className="mt-12">
              <p className="font-semibold mb-2">Researcher in Action :))</p>
              <hr />
              <div className="flex flex-wrap gap-4 py-4">
                {project.researchersImage.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="h-40"
                    radius="none"
                    alt=""
                  />
                ))}
              </div>
            </div>
          </Section>
        </Tab>
        <Tab key="findings" title="Findings">
          <Section>
            <Image
              src="/projects/findings1.png"
              width="100%"
              radius="none"
              alt=""
            />
            <p className="prose text-foreground max-w-none mt-12">
              {project.findingDetail}
            </p>
          </Section>
        </Tab>
        <Tab key="result" title="Result">
          <Section>
            <Image src={project.resultImg} width="100%" radius="none" alt="" />
            <div className="prose text-foreground max-w-none mt-12">
              {project.results}
            </div>
          </Section>
        </Tab>
        <Tab key="takeaways" title="Takeaways">
          <Section>
            <div className="flex items-start gap-2">
              <p className="text-3xl font-medium">Lesson Learned!</p>
              <IconStars />
            </div>
            <div className="mt-12 flex flex-col gap-10">
              {project.lessonLearned.map((lesson, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="text-2xl font-bold text-primary bg-primary-light rounded-full w-20 h-20 flex items-center justify-center ring-4 ring-white">
                    <IconGraduation />
                  </div>
                  <p className="flex-1 prose text-foreground max-w-none">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </Tab>
      </Tabs>
    </div>
  );
};

export default DetailPage;

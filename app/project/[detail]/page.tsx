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
  processMethod: any;
  researchersImage: string[];
  findingDetail: any;
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
      processMethod: (
        <p>
          <b className="text-gold">Method : </b> This research applied{" "}
          <b>usability evaluation methods and in-depth interviews</b> where the
          researcher observed participants' interactions with the
          application/website being evaluated. The study aimed to understand
          respondents' perspectives on their experiences using CARE OM for
          wholesale orders, both positive and negative (including comparisons
          with manual purchasing processes), and their ideal expectations to
          identify potential improvements.
        </p>
      ),
      researchersImage: [
        "/projects/IMG_5309.jpg",
        "/projects/bulkbuyer2.jpg",
        "/projects/bulkbuyer3.jpg",
      ],
      findingDetail: (
        <p>
          <b className="text-gold">Main Issues :</b> Bulk buyers feel
          uncomfortable with the shopping interface resembling an e-commerce
          catalog.{" "}
          <b>
            They prefer using table because they already know and have an
            inventory list of the items they want to restock
          </b>{" "}
          in their stores without needing large product images. The catalog page
          is only used when they are looking for new product inspirations.
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
                <Section>
                  <p className="prose text-foreground max-w-none">
                    {project.processMethod}
                  </p>
                  <ResearchSteps />
                  <div className="mt-12">
                    <p className="font-semibold mb-2">
                      Researcher in Action :))
                    </p>
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
                  <Image
                    src="/projects/result1.jpg"
                    width="100%"
                    radius="none"
                    alt=""
                  />
                  <div className="prose text-foreground max-w-none mt-12">
                    <p>
                      <b>
                        Implement a table view in EIGER CARE OM/Bulkbuyer
                        Website UI :
                      </b>{" "}
                      Simplifying the process for bulk buyers to place large
                      orders quickly and without hassle.
                    </p>
                    <ol>
                      <li>
                        <b className="text-gold">Efficiency :</b> The table view
                        allows bulk buyers to{" "}
                        <b>quickly enter SKUs and quantities</b> without needing
                        to look at product images, which is highly efficient for
                        those who are already familiar with the products they
                        want to purchase.
                      </li>
                      <li>
                        <b className="text-gold">Flexible Columns :</b> Columns
                        in the table can be customized according to the user’s
                        needs, allowing them to{" "}
                        <b>focus on relevant information</b> : SKU, quantity,
                        price, and stock availability status.
                      </li>
                      <li>
                        <b className="text-gold">Real-time Stock Updates:</b>{" "}
                        Ensuring that{" "}
                        <b>stock information is displayed in real-time</b> to
                        avoid purchasing out-of-stock products.
                      </li>
                    </ol>
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
                    <div className="flex items-center gap-8">
                      <div className="text-2xl font-bold text-primary bg-primary-light rounded-full w-20 h-20 flex items-center justify-center ring-4 ring-white">
                        <IconGraduation />
                      </div>
                      <p className="flex-1 prose text-foreground max-w-none">
                        <b>Importance of User-Centric Design :</b> Understanding
                        and prioritizing the specific needs and behaviors of
                        users, such as bulk buyers, is crucial for creating
                        effective and efficient user interfaces.
                      </p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-2xl font-bold text-primary bg-primary-light rounded-full w-20 h-20 flex items-center justify-center ring-4 ring-white">
                        <IconGraduation />
                      </div>
                      <p className="flex-1 prose text-foreground max-w-none">
                        <b>Value of Continuous Feedback :</b> Regularly
                        gathering and analyzing user feedback helps identify
                        pain points and areas for improvement, leading to more
                        refined and user-friendly solutions.
                      </p>
                    </div>
                  </div>
                </Section>
              </Tab>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;

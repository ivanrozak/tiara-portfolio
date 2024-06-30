import React from "react";
import DetailPage from "./ProjectDetail";

export interface Project {
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
  resultImg: string;
  results: any;
  lessonLearned: any[];
}

const ProjectDetailPage = async ({
  params,
}: {
  params: { detail: string };
}) => {
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
      resultImg: "/projects/result1.jpg",
      results: (
        <>
          <p>
            <b>
              Implement a table view in EIGER CARE OM/Bulkbuyer Website UI :
            </b>{" "}
            Simplifying the process for bulk buyers to place large orders
            quickly and without hassle.
          </p>
          <ol>
            <li>
              <b className="text-gold">Efficiency :</b> The table view allows
              bulk buyers to <b>quickly enter SKUs and quantities</b> without
              needing to look at product images, which is highly efficient for
              those who are already familiar with the products they want to
              purchase.
            </li>
            <li>
              <b className="text-gold">Flexible Columns :</b> Columns in the
              table can be customized according to the user’s needs, allowing
              them to <b>focus on relevant information</b> : SKU, quantity,
              price, and stock availability status.
            </li>
            <li>
              <b className="text-gold">Real-time Stock Updates:</b> Ensuring
              that <b>stock information is displayed in real-time</b> to avoid
              purchasing out-of-stock products.
            </li>
          </ol>
        </>
      ),
      lessonLearned: [
        <>
          <b>Importance of User-Centric Design :</b> Understanding and
          prioritizing the specific needs and behaviors of users, such as bulk
          buyers, is crucial for creating effective and efficient user
          interfaces.
        </>,
        <>
          <b>Value of Continuous Feedback :</b> Regularly gathering and
          analyzing user feedback helps identify pain points and areas for
          improvement, leading to more refined and user-friendly solutions.
        </>,
      ],
    },
    {
      slug: "puskesmas-response-management",
      title: "Puskesmas Response Management",
      description:
        "I evaluated the feasibility of managing question and complaint flows through WhatsApp Groups (WAG) in Puskesmas to enable healthcare center teams to be more responsive to community complaints and provided actionable recommendations for better flow.",
      heroImgSrc: "/projects/postwoman-storehouse2.jpg",
      company: {
        imgSrc: "/static/brand_kemkes.png",
        name: "Kementerian Kesehatan RI",
        description: "ASA Consulting (February - Maret 2024)",
      },
      objective: (
        <p>
          <b className="text-gold">Objectives : </b> The project aims to
          validate the feasibility of the question and complaint flow through
          WhatsApp groups (WAG) for pregnant women, mothers of newborn, and
          mothers of toddlers. It seeks to identify potential challenges from
          healthcare staff and develop an ideal Standard Operating Procedure
          (SOP) for responding to questions and complaints
        </p>
      ),
      processMethod: (
        <p>
          <b className="text-gold">Method :</b> We utilized{" "}
          <b>Focus Group Discussions (FGD) and a Mini Workshop</b> to evaluate
          and improve the flow of managing questions and complaints through
          WhatsApp Groups (WAG) in Puskesmas. The FGD gathered qualitative
          insights from healthcare staff and community members, identifying key
          challenges and expectations. The Mini Workshop then facilitated
          collaborative brainstorming and flow mapping, enabling participants to
          design an ideal question and complaint flow.
        </p>
      ),
      researchersImage: [
        "/projects/IMG_5309.jpg",
        "/projects/bulkbuyer2.jpg",
        "/projects/bulkbuyer3.jpg",
      ],
      findingDetail: (
        <p>
          <b className="text-gold">Main Issues :</b> We discovered the necessity
          of{" "}
          <b>
            establishing SLA time limits for each urgency category (red, yellow,
            green)
          </b>
          . This SLA ensures swift and accurate emergency assistance or
          referrals to hospitals according to the urgency level of the issues
          raised.
        </p>
      ),
      resultImg: "/projects/result1.jpg",
      results: (
        <>
          <p>
            <b>Arrange Quick Reply Standardize Content on WhatsApp Admin :</b>{" "}
            We developed standardized content with a quick reply feature and
            conducted training on its use. This quick reply feature is designed
            to facilitate WAG admins at Puskesmas in addressing questions or
            complaints from patients based on urgency categories (red, yellow,
            green). With this feature, admins can provide timely and appropriate
            responses, thus enhancing the efficiency and quality of services
            delivered to mothers.
          </p>
          <ol>
            <li>
              <b className="text-gold">Efficiency :</b> The table view allows
              bulk buyers to <b>quickly enter SKUs and quantities</b> without
              needing to look at product images, which is highly efficient for
              those who are already familiar with the products they want to
              purchase.
            </li>
            <li>
              <b className="text-gold">Flexible Columns :</b> Columns in the
              table can be customized according to the user’s needs, allowing
              them to <b>focus on relevant information</b> : SKU, quantity,
              price, and stock availability status.
            </li>
            <li>
              <b className="text-gold">Real-time Stock Updates:</b> Ensuring
              that <b>stock information is displayed in real-time</b> to avoid
              purchasing out-of-stock products.
            </li>
          </ol>
        </>
      ),
      lessonLearned: [
        <>
          <b>Importance of User-Centric Design :</b> Understanding and
          prioritizing the specific needs and behaviors of users, such as bulk
          buyers, is crucial for creating effective and efficient user
          interfaces.
        </>,
        <>
          <b>Value of Continuous Feedback :</b> Regularly gathering and
          analyzing user feedback helps identify pain points and areas for
          improvement, leading to more refined and user-friendly solutions.
        </>,
      ],
    },
  ];

  const project = await projectList.find(
    (project) => project.slug === params.detail
  );
  return (
    <div className="pt-20 bg-svg-one bg-cover bg-no-repeat">
      <div className="max-w-4xl px-6 py-4 mx-auto">
        <h1
          className="text-4xl font-bold leading-[70px] animate-in text-center mb-10"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Bulkbuyer Website Evaluation
        </h1>

        {project && <DetailPage project={project} />}
      </div>
    </div>
  );
};

export default ProjectDetailPage;

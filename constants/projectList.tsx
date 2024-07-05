import {
  IconFindings,
  IconResearch,
  IconReview,
  IconSession,
  IconUT,
  PresenceIcon,
} from "@/components/Icons";

interface Timeline {
  value: React.ReactNode;
  title: string;
  timeline: string;
}

export interface ResearchStep {
  icon: React.ReactNode;
  details: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: any;
  heroImgSrc: string;
  company: {
    imgSrc: string;
    name: string;
    description: string;
  };
  objective: any;
  timeline: Timeline[];
  processMethod: any;
  researchSteps: ResearchStep[];
  researchersImage: string[];
  findingDetail: any;
  resultImg: string;
  results: any;
  lessonLearned: any[];
}

export const projectList: Project[] = [
  {
    slug: "bulkbuyer-website-evaluation",
    title: "Bulkbuyer Website Evaluation",
    category: "Usability Evaluation",
    description: (
      <p>
        Pada Februari 2024, berkesempatan untuk mengevaluasi website CARE Order
        Management Eiger bersama <i>user</i> internal dan eksternal{" "}
        <i>(customer bulkbuyer)</i> dan menyajikan findings dari{" "}
        <i>sesi usability evaluation</i> serta <i>actionable recommendation</i>{" "}
        beserta prioritas pengerjaannya yang didasarkan pada{" "}
        <i>severity level</i> yaitu penilaian seberapa besar dampak yang
        ditimbulkan pada transaksi bagi <i>customer.</i>
      </p>
    ),
    heroImgSrc: "/projects/postwoman-storehouse.jpg",
    company: {
      imgSrc: "/static/brand_eiger.png",
      name: "PT Eigerindo Multi Produk Industri",
      description: "ASA Consulting (January - February 2024)",
    },
    objective: (
      <p>
        <b className="text-gold">Objectives : </b> Riset ini bertujuan untuk
        mengevaluasi sejauh mana CARE Order Management (CARE OM) telah membantu{" "}
        <i>customer bulkbuyer</i> (Wholesale customer) dan tim internal (sales)
        Eiger dalam proses transaksi grosir sejak website CAREOM live sekitar 6
        bulan yang lalu, dari POV external maupun internal.
      </p>
    ),
    timeline: [
      {
        value: <div className="h-6">6</div>,
        title: "Participants",
        timeline: "(Internal & External)",
      },
      {
        value: <div className="h-6">2</div>,
        title: "Months of Project",
        timeline: "(Feb-Mar 2024)",
      },
      {
        value: <PresenceIcon className="h-8" />,
        title: "Hybrid Session",
        timeline: "On/Offline",
      },
    ],
    processMethod: (
      <p>
        <b className="text-gold">Method : </b> Riset ini menerapkan{" "}
        <i>
          <b>usability evaluation methods</b>
        </i>{" "}
        and{" "}
        <i>
          <b>in-depth interviews</b>
        </i>
        dengan melakukan observasi interaksi partisipan dengan website CAREOM
        dan memahami perspektif partisipan tentang pengalaman mereka menggunakan
        CARE Order Management (CARE OM) untuk pesanan dalam jumlah besar, mulai
        dari hal positif maupun negatif (termasuk perbandingan dengan proses
        pembelian manual atau langsung ke sale), serta harapan ideal mereka
        untuk meningkatkan pelayanan pembelian jumlah besar.
      </p>
    ),
    researchSteps: [
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
    ],
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
          <b>Implement a table view in EIGER CARE OM/Bulkbuyer Website UI :</b>{" "}
          Simplifying the process for bulk buyers to place large orders quickly
          and without hassle.
        </p>
        <ol>
          <li>
            <b className="text-gold">Efficiency :</b> The table view allows bulk
            buyers to <b>quickly enter SKUs and quantities</b> without needing
            to look at product images, which is highly efficient for those who
            are already familiar with the products they want to purchase.
          </li>
          <li>
            <b className="text-gold">Flexible Columns :</b> Columns in the table
            can be customized according to the user’s needs, allowing them to{" "}
            <b>focus on relevant information</b> : SKU, quantity, price, and
            stock availability status.
          </li>
          <li>
            <b className="text-gold">Real-time Stock Updates:</b> Ensuring that{" "}
            <b>stock information is displayed in real-time</b> to avoid
            purchasing out-of-stock products.
          </li>
        </ol>
      </>
    ),
    lessonLearned: [
      <>
        <b>Importance of User-Centric Design :</b> Understanding and
        prioritizing the specific needs and behaviors of users, such as bulk
        buyers, is crucial for creating effective and efficient user interfaces.
      </>,
      <>
        <b>Value of Continuous Feedback :</b> Regularly gathering and analyzing
        user feedback helps identify pain points and areas for improvement,
        leading to more refined and user-friendly solutions.
      </>,
    ],
  },
  // {
  //   slug: "puskesmas-response-management",
  //   title: "Puskesmas Response Management",
  //   category: "Usability Evaluation",
  //   description:
  //     "I evaluated the feasibility of managing question and complaint flows through WhatsApp Groups (WAG) in Puskesmas to enable healthcare center teams to be more responsive to community complaints and provided actionable recommendations for better flow.",
  //   heroImgSrc: "/projects/postwoman-storehouse2.jpg",
  //   company: {
  //     imgSrc: "/static/brand_kemkes.png",
  //     name: "Kementerian Kesehatan RI",
  //     description: "ASA Consulting (February - Maret 2024)",
  //   },
  //   objective: (
  //     <p>
  //       <b className="text-gold">Objectives : </b> The project aims to validate
  //       the feasibility of the question and complaint flow through WhatsApp
  //       groups (WAG) for pregnant women, mothers of newborn, and mothers of
  //       toddlers. It seeks to identify potential challenges from healthcare
  //       staff and develop an ideal Standard Operating Procedure (SOP) for
  //       responding to questions and complaints
  //     </p>
  //   ),
  //   timeline: [
  //     {
  //       value: 1,
  //       title: "Research",
  //       timeline: "January 2024",
  //     },
  //     {
  //       value: 2,
  //       title: "Interview",
  //       timeline: "February 2024",
  //     },
  //     {
  //       value: 3,
  //       title: "Usability Evaluation",
  //       timeline: "April 2024",
  //     },
  //   ],
  //   processMethod: (
  //     <p>
  //       <b className="text-gold">Method :</b> We utilized{" "}
  //       <b>Focus Group Discussions (FGD) and a Mini Workshop</b> to evaluate and
  //       improve the flow of managing questions and complaints through WhatsApp
  //       Groups (WAG) in Puskesmas. The FGD gathered qualitative insights from
  //       healthcare staff and community members, identifying key challenges and
  //       expectations. The Mini Workshop then facilitated collaborative
  //       brainstorming and flow mapping, enabling participants to design an ideal
  //       question and complaint flow.
  //     </p>
  //   ),
  //   researchSteps: [
  //     {
  //       icon: <IconResearch />,
  //       details: "Research Guideline/ UT Plan Preparation",
  //     },
  //     {
  //       icon: <IconReview />,
  //       details: "Review and collect Feedback with client",
  //     },
  //     {
  //       icon: <IconUT />,
  //       details: "UT Tools Preparation & Rehearsal",
  //     },
  //     {
  //       icon: <IconSession />,
  //       details: "Conduct Session with Participant :))",
  //     },
  //     {
  //       icon: <IconFindings />,
  //       details: "Gather Findings & Reporting",
  //     },
  //   ],
  //   researchersImage: [
  //     "/projects/IMG_5309.jpg",
  //     "/projects/bulkbuyer2.jpg",
  //     "/projects/bulkbuyer3.jpg",
  //   ],
  //   findingDetail: (
  //     <p>
  //       <b className="text-gold">Main Issues :</b> We discovered the necessity
  //       of{" "}
  //       <b>
  //         establishing SLA time limits for each urgency category (red, yellow,
  //         green)
  //       </b>
  //       . This SLA ensures swift and accurate emergency assistance or referrals
  //       to hospitals according to the urgency level of the issues raised.
  //     </p>
  //   ),
  //   resultImg: "/projects/result1.jpg",
  //   results: (
  //     <>
  //       <p>
  //         <b>Arrange Quick Reply Standardize Content on WhatsApp Admin :</b> We
  //         developed standardized content with a quick reply feature and
  //         conducted training on its use. This quick reply feature is designed to
  //         facilitate WAG admins at Puskesmas in addressing questions or
  //         complaints from patients based on urgency categories (red, yellow,
  //         green). With this feature, admins can provide timely and appropriate
  //         responses, thus enhancing the efficiency and quality of services
  //         delivered to mothers.
  //       </p>
  //       <ol>
  //         <li>
  //           <b className="text-gold">Efficiency :</b> The table view allows bulk
  //           buyers to <b>quickly enter SKUs and quantities</b> without needing
  //           to look at product images, which is highly efficient for those who
  //           are already familiar with the products they want to purchase.
  //         </li>
  //         <li>
  //           <b className="text-gold">Flexible Columns :</b> Columns in the table
  //           can be customized according to the user’s needs, allowing them to{" "}
  //           <b>focus on relevant information</b> : SKU, quantity, price, and
  //           stock availability status.
  //         </li>
  //         <li>
  //           <b className="text-gold">Real-time Stock Updates:</b> Ensuring that{" "}
  //           <b>stock information is displayed in real-time</b> to avoid
  //           purchasing out-of-stock products.
  //         </li>
  //       </ol>
  //     </>
  //   ),
  //   lessonLearned: [
  //     <>
  //       <b>Importance of User-Centric Design :</b> Understanding and
  //       prioritizing the specific needs and behaviors of users, such as bulk
  //       buyers, is crucial for creating effective and efficient user interfaces.
  //     </>,
  //     <>
  //       <b>Value of Continuous Feedback :</b> Regularly gathering and analyzing
  //       user feedback helps identify pain points and areas for improvement,
  //       leading to more refined and user-friendly solutions.
  //     </>,
  //   ],
  // },
];

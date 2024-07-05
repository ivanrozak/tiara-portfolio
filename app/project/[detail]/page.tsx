import React from "react";
import DetailPage from "./ProjectDetail";
import { projectList } from "@/constants/projectList";

const ProjectDetailPage = async ({
  params,
}: {
  params: { detail: string };
}) => {
  const project = await projectList.find(
    (project) => project.slug === params.detail
  );
  return (
    <div className="pt-20 bg-svg-one bg-cover bg-no-repeat">
      <div className="max-w-4xl px-6 py-4 mx-auto">
        <h1
          className="text-4xl font-bold leading-[70px] animate-in text-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          {project?.title}
        </h1>
        <div
          className="mb-8 w-fit px-4 pt-2 pb-1 mx-auto bg-gold text-black rounded-md font-semibold animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          {project?.category}
        </div>

        {project && <DetailPage project={project} />}
      </div>
    </div>
  );
};

export default ProjectDetailPage;

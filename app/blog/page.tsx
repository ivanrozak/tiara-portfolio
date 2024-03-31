import React from "react";

const BlogPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl px-6 py-4 mx-auto">
        <h1
          className="text-4xl font-bold leading-[70px] animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Blogs
        </h1>
        <div
          className="text-center text-lg font-medium py-16 flex justify-center items-center animate-in min-h-[60vh]"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Coming Soon...
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

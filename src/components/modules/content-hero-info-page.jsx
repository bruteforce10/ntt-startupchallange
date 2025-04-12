import React from "react";

const ContentHeroInfoPage = ({ title }) => {
  return (
    <section className="h-[400px] sm:min-h-[calc(80vh-3.5rem)] container px-4 flex w-full flex-col justify-center mx-auto">
      <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl lg:text-6xl ">
        {title}
      </h1>
    </section>
  );
};

export default ContentHeroInfoPage;

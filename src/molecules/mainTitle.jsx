import React from "react";

const MainTitle = ({ as: Component = "h1", titleText = "", className = "" }) => {
  return (
    <Component
      className={`font-fkscreamerbold text-3xl md:text-4xl lg:text-5.5 xl:text-[56px] leading-tight uppercase mb-5 md:mb-6 xl:mb-8 ${className}`}
    >
      {titleText}
    </Component>
  );
};

export default MainTitle;

import React from "react";
import { Link } from "react-router";

const TextLink = ({
  type = "default", // default | simple
  size = "LG24", // SM20 | MD20 | LG24
  label = "Link",
  to = "#",
  className = "",
  ...props
}) => {
  /* ---------- SIZE STYLES ---------- */
  const sizeStyles = {
    SM20: "text-sm leading-5",
    MD20: "text-base leading-6 tracking-[-0.36px]",
    LG24: "text-lg leading-6 tracking-[-0.36px]",
  };

  /* ---------- TYPE WITH AUTOMATIC STATES ---------- */
  const typeStyles = {
    default: `
      text-black font-black
      hover:underline
      active:text-subduded-500 active:underline
      focus:outline-none focus:shadow-[var(--shadow-textlink-focus)]
    `,
    simple: `
        text-subduded-500 font-normal
        hover:underline hover:text-black
        active:underline
 
        focus:outline-none
        focus:!shadow-[var(--shadow-textlink-focus)]
        focus:!text-black focus:!underline
 
        focus-visible:shadow-[var(--shadow-textlink-focus)]
        focus-visible:!text-black focus-visible:!underline
    `,
  };

  const finalClasses = `
    inline-block cursor-pointer transition-all duration-200
    ${sizeStyles[size]}
    ${typeStyles[type]}
    ${className}
  `;

  return (
    <Link to={to} className={finalClasses} {...props}>
      {label}
    </Link>
  );
};

export default TextLink;

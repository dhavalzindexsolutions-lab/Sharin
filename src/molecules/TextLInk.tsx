// import React from "react";
// import { Link } from "react-router";

// interface TextLinkProps {
//   children: React.ReactNode;
//   size?: "sm" | "md" | "lg";
//   state?: "default" | "hover" | "active" | "focus";
//   href?: string;
//   className?: string;
// }

// const TextLink: React.FC<TextLinkProps> = ({
//   children,
//   size = "md",
//   state = "default",
//   href = "#",
//   className = "",
// }) => {
//   let sizeClass = "";
//   let stateClass = "";



//   if (size === "sm") sizeClass = "text-sm leading-tight font-bold";
//   if (size === "md") sizeClass = "text-base leading-tight font-bold";
//   if (size === "lg") sizeClass = "text-lg leading-tight font-black";


//   if (state === "default") stateClass = "text-black";
//   if (state === "hover") stateClass = "hover:underline hover:underline-offeset-2";
//   if (state === "active") stateClass = "active:underline active:text-subduded-500";
//   if (state === "focus")
//     stateClass =
//       "focus:outline-none focus:ring-2 focus:ring-subduded-800 rounded-md";

//   const combined = `transition-all cursor-pointer font-body ${sizeClass} ${stateClass} ${className}`;

//   return (
//     <Link to={href} className={combined}>
//       {children}
//     </Link>
//   );
// };

// export default TextLink;


import React from "react";
import { Link } from "react-router";

interface TextLinkProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  state?: "default" | "hover" | "active" | "focus";
  variant?: "default" | "simple"; // ⭐ NEW
  href?: string;
  className?: string;
}

const TextLink: React.FC<TextLinkProps> = ({
  children,
  size = "md",
  state = "default",
  variant = "default",      // ⭐ NEW default variant
  href = "#",
  className = "",
}) => {
  let sizeClass = "";
  let stateClass = "";
  let variantClass = "";

  // SIZE HANDLING
  if (size === "sm") sizeClass = "text-sm leading-tight font-bold";
  if (size === "md") sizeClass = "text-base leading-tight font-bold";
  if (size === "lg") sizeClass = "text-lg leading-tight font-black";

  // STATE HANDLING
  if (state === "default") stateClass = "text-black";
  if (state === "hover") stateClass = "hover:underline hover:underline-offset-2";
  if (state === "active") stateClass = "active:underline active:text-subduded-500";
  if (state === "focus")
    stateClass = "focus:outline-none focus:ring-2 focus:ring-subduded-800 rounded-md";

  // VARIANT HANDLING ⭐
  if (variant === "default") {
    variantClass = "";                      
  }

  if (variant === "simple") {
    variantClass = "underline underline-offset-2 font-normal"; 
    // ALWAYS underlined + lighter
  }

  const combined = `transition-all cursor-pointer font-body ${sizeClass} ${variantClass} ${stateClass} ${className}`;

  return (
    <Link to={href} className={combined}>
      {children}
    </Link>
  );
};

export default TextLink;

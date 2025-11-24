import React from "react";
import { Link } from "react-router";
import IconContainer from "../IconContainer";
 
const TextBlock = ({
  alignment = "left",    
  icon ,              
  title,        
  supportingText,    
  supportingTextValue = "Supporting text",
  link,              
  linkLabel,
  linkTo = "/",
  className = "",
  ...props
}) => {
  // VARIANT STYLES (layout)
  const variantStyles = {
    left: "text-left items-start",
    center: "text-center flex flex-col items-center",
  };
 
  const finalClasses = `
    flex flex-col gap-4
    ${variantStyles[alignment]}
    ${className}
  `;
 
  return (
    <div className={finalClasses} {...props}>
      {/* ICON */}
      {icon && (
        <IconContainer/>
      )}
 
      {/* TITLE */}
      {title && (
        <h2 className="font-displaybold uppercase text-3xl md:text-4xl font-bold leading-none text-black mb-8">{title}</h2>
      )}
 
      {/* SUPPORTING TEXT */}
      {supportingText && supportingTextValue && (
        <p className="text-base font-normal leading-6 tracking-[-0.32px] mb-4">{supportingTextValue}</p>
      )}
 
      {/* LINK */}
      {link && linkLabel && (
        <Link
          to={linkTo}
          className="text-base font-bold leading-6 tracking-[-0.32px] text-black"
        >
          {linkLabel}
        </Link>
      )}
 
    </div>
  );
};
 
export default TextBlock;
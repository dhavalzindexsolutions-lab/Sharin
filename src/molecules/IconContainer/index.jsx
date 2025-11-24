import React from "react";
import sparkalblack from "../../assets/images/sparkalblack.svg";
import sparkalwhite from "../../assets/images/sparkalwhite.svg";
 
const IconContainer = ({
  size = "XL56",
  type = "default",
//   icon = "sparkalblack",   // now this will control which SVG loads
  showIcon = true,
  icon,
  className = "",
  ...props
}) => {
  // SIZE STYLES
  const sizeStyles = {
    SM32: "w-8 h-8 rounded-lg p-2",
    MD40: "w-10 h-10 rounded-xl p-2.5",
    LG48: "w-12 h-12 rounded-xl p-3",
    XL56: "w-14 h-14 rounded-xl p-3",
  };
 
  // COLOR STYLES
  const typeStyles = {
    default: "bg-antiFlashWhite",
    primary: "bg-gargoyleGas",
    secondary: "bg-subduded-800",
    critical: "bg-critical-400",
    success: "bg-green-400",
    ghost: "bg-transparent",
  };
 
  // 🔥 MAP ICON NAME → IMAGE FILE
  const iconMap = {
    sparkalblack,
    sparkalwhite,
  };
 
  const finalClasses = `
    flex items-center justify-center
    ${sizeStyles[size]}
    ${typeStyles[type]}
    ${className}
  `;
 
  return (
    <div className={finalClasses} {...props}>
      {showIcon && icon && (
        <span className="flex items-center justify-center">
          <img src={icon} alt={icon} className="max-h-full" />
        </span>
      )}
    </div>
  );
};
 
export default IconContainer;
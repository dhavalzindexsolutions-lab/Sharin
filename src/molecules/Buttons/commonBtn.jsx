import { Link } from "react-router";

const CommonButton = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  bg,
  color,
  className = "",
  type = "button",
  as = "button",   // "button" or "link"
  to,              // for link
  ...props
}) => {
  const variantStyles = {
    primary: "bg-neutral-800 text-white hover:bg-neutral-700",
    secondary: "bg-neutral-100 text-black hover:bg-[#E6E6E6]",
    dark: "bg-neutral-700 text-white",
    light: "bg-white text-black",
    yellow: "bg-yellow-400 text-black",
  };

  const sizeStyles = {
    sm: "px-2 py-1.5 text-sm rounded-xl font-interbold leading-snug",
    md: "px-4 py-2 text-base rounded-xl font-interbold leading-snug",
    lg: "px-4 py-3 text-lg rounded-xl font-interblack leading-snug",
    full: "w-full px-4 py-3 text-lg rounded-xl font-interblack leading-snug",
    auto: "px-4 py-3 text-lg rounded-xl font-interblack leading-snug",
  };

  const finalClasses = `
    inline-flex items-center justify-center gap-2
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${bg ? `bg-[${bg}]` : ""}
    ${color ? `text-[${color}]` : ""}
    ${className}
    transition-all duration-300
  `;

  if (as === "link") {
    return (
      <Link to={to} className={finalClasses} {...props}>
        {iconLeft && <span className="w-5 h-5">{iconLeft}</span>}
        {children}
        {iconRight && <span className="w-5 h-5">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button type={type} className={finalClasses} {...props}>
      {iconLeft && <span className="w-5 h-5">{iconLeft}</span>}
      {children}
      {iconRight && <span className="w-5 h-5">{iconRight}</span>}
    </button>
  );
};

export default CommonButton;

import { Link } from "react-router";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  bg,
  color,
  className = "",
  type = "button",
  as = "button", // "button" or "link"
  to, // for link
  ...props
}) => {
  const variantStyles = {
    // 🌕 accent
    accent: `
    bg-primary-400 text-black
    hover:bg-primary-500
    active:bg-primary-600
    focus:ring-2 focus:ring-offset-2 focus:ring-subduded-800
    disabled:opacity-40
  `,

    // 🔥 Critical (Red)
    critical: `
    bg-critical-400 text-white
    hover:bg-critical-500
    active:bg-critical-600
    focus:ring-2 focus:ring-offset-2 focus:ring-subduded-800
    disabled:opacity-40
  `,

    // ⚫ Fill
    fill: `
    bg-subduded-800 text-white
    hover:bg-subduded-700
    active:bg-subduded-600
    focus:ring-2 focus:ring-offset-2 focus:ring-subduded-800
    disabled:opacity-40
  `,

    // ⚪ subduded
    subduded: `
    bg-subduded-100 text-black
    hover:bg-[#E6E6E6]
    active:bg-neutral-300
    focus:ring-2 focus:ring-subduded-800
    disabled:opacity-40
  `,

    // 💨 onColor (no border)
    onColor: `
    bg-white text-black
    hover:bg-white/90
    active:bg-white/80
    focus:ring-2 focus:ring-subduded-800
    disabled:opacity-40
  `,

    // 💨 ghost (no border)
    ghost: `
    bg-transparent text-black
    hover:bg-subduded-100
    active:bg-[#E6E6E6]
    focus:ring-2 focus:ring-subduded-800
    disabled:opacity-40
  `,
  };

  const sizeStyles = {
    sm: "px-2 py-1.5 text-sm rounded-xl font-bold leading-snug",
    md: "px-4 py-2 text-base rounded-xl font-bold leading-snug",
    lg: "px-4 py-3 text-lg rounded-xl font-black leading-snug",
    full: "w-full px-4 py-3 text-lg rounded-xl font-black leading-snug",
    auto: "px-4 py-3 text-lg rounded-xl font-black leading-snug",
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

export default Button;

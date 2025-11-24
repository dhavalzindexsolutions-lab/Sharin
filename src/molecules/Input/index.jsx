import { useState } from "react";
import eyeOpen from "../../assets/images/password-eye-open.svg"
import eyeClose from "../../assets/images/password-eye-close.svg"

const Input = ({
  placeholder = "Placeholder",
  size = "lg", //  "md" | "lg"
  iconLeft,
  iconRight,
  errorMessage = "",
  className = "",
  isPasswordToggle = false,
  type = "text",
  ...props
}) => {
  const sizeStyles = {
    md: "h-10 text-base font-normal p-2",
    lg: "h-12 text-base font-normal p-3",
  };
  const [showPassword, setShowPassword] = useState(false);
  // If toggle is enabled, override based on `showPassword`
  const finalType =
    isPasswordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  const finalIconRight =
    isPasswordToggle && type === "password"
      ? showPassword
        ? eyeClose
        : eyeOpen
      : iconRight;
  return (
    <>
      <div className={`w-full ${className}`}>
        <div className={`relative flex items-center w-full`}>
          {iconLeft && (
            <span className="absolute left-3 text-subduded-600">
              <img src={iconLeft} alt="iconLeft" className="w-5 h-3.5" />
            </span>
          )}

          <input
            type={finalType}
            placeholder={placeholder}
            className={`
          w-full font-body
          border
          border-subduded-400
          hover:border-subduded-500
          placeholder:text-subduded-400
          bg-white
          text-black focus:border-2
          focus:border-subduded-800
          disabled:opacity-40
          outline-none  rounded-xl
          transition-all duration-200

          ${sizeStyles[size]}

          ${iconLeft ? "pl-10" : ""}
          ${iconRight ? "pr-10" : ""}
          ${finalIconRight ? "pr-10" : ""}

        `}
            {...props}
          />

          {finalIconRight && (
            <button
              type="button"
              onClick={() => {
                if (isPasswordToggle) setShowPassword((p) => !p);
              }}
              className="absolute right-3 text-subduded-600"
            >
              <img src={finalIconRight} className="w-5 h-3.5" />
            </button>
          )}
        </div>

        {errorMessage && (
          <p className="mt-2 font-body text-xs text-critical-500 font-normal">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;

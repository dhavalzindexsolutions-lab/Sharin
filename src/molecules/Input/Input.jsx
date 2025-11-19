import { useState } from "react";
import passwordEyeOpen from "../../assets/images/password-eye-open.svg";
import passwordEyeClose from "../../assets/images/password-eye-close.svg";

const Input = ({
  label,
  helperText, // 👈 NEW PROP
  className,
  type = "text",
  placeholder,
  error,
  ...props
}) => {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2 w-full">

      {/* Label */}
      {label && (
        <label className="text-sm font-intersemibold text-black">
          {label}
        </label>
      )}

      {/* Helper Text (below label, above input) */}
      {helperText && (
        <span className="text-xs text-neutral-500 -mt-1">
          {helperText}
        </span>
      )}

      <div className="relative w-full">

        {/* Input Field */}
        <input
          type={isPassword && show ? "text" : type}
          placeholder={placeholder}
          className={`
            w-full 
            p-3 
            rounded-xl 
            text-black 
            text-base 
            font-interregular 
            leading-snug 
            placeholder:text-neutral-400 
            border 
            border-neutral-400 
            hover:border-neutral-500 
            focus:border-neutral-500 
            focus:shadow-shadow-focus 
            disabled:bg-neutral-100 
            disabled:text-black/40 
            focus:shadow-focus
            ${className}
          `}
          {...props}
        />

        {/* Password Toggle Icon */}
        {isPassword && (
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <img
              src={show ? passwordEyeClose : passwordEyeOpen}
              alt="toggle password"
              className="w-5 h-5"
            />
          </span>
        )}
      </div>

      {/* Error */}
      {error && (
        <span className="text-xs text-red-500 font-interregular leading-tight">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

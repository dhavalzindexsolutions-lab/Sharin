import React, { useState, useEffect } from "react";

const Input = ({
  variant = "default",
  size = "md",
  iconLeft,
  iconRight,
  className = "",
  disabled = false,
  error = false,
  errorMessage = "",
  value,
  defaultValue,
  onChange,
  ...props
}) => {
  // detect initial value for controlled & uncontrolled
  const [hasValue, setHasValue] = useState(
    (value ?? defaultValue ?? "").toString().trim() !== ""
  );

  // update hasValue when value changes (controlled input)
  useEffect(() => {
    if (value !== undefined) {
      setHasValue(value.toString().trim() !== "");
    }
  }, [value]);

  const onInputChange = (e) => {
    setHasValue(e.target.value.trim() !== "");
    if (onChange) onChange(e);
  };

  const variantStyles = {
    default: `
      border border-subduded-200 
      bg-white 
      text-black 
      placeholder:text-subduded-400
      focus:border-subduded-800
    `,

    filled: `
      bg-subduded-100 
      border border-transparent 
      text-black 
      placeholder:text-subduded-400
      focus:border-subduded-800
    `,

    outline: `
      border border-subduded-800 
      bg-white 
      text-black 
      placeholder:text-subduded-400
      focus:border-subduded-800
    `,

    error: `
      border border-subduded-200
      bg-white 
      text-black 
      placeholder:text-subduded-400
      focus:border-subduded-800
    `,

    disabled: `
      bg-subduded-100
      border border-transparent
      text-black
      placeholder:text-subduded-400
      cursor-not-allowed
      pointer-events-none
      focus:border-transparent
    `,
  };

  const sizeStyles = {
    md: "h-10 px-3 py-2",
    lg: "h-12 p-3",
  };

  return (
    <div className={`flex flex-col w-full ${disabled ? "opacity-40" : ""}`}>
      <div className="relative flex items-center">
        {iconLeft && (
          <span className="absolute left-3 w-5 h-5 text-subduded-500 pointer-events-none">
            {iconLeft}
          </span>
        )}

        <input
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={onInputChange}
          className={`
            w-full text-base
            transition-all duration-300 rounded-xl
            ${variantStyles[disabled ? "disabled" : error ? "error" : variant]}
            ${sizeStyles[size]}
            ${iconLeft ? "pl-10" : ""}
            ${iconRight ? "pr-10" : ""}
            ${hasValue && error && !disabled ? "border-subduded-800" : ""}
            ${className}
          `}
          {...props}
        />

        {iconRight && (
          <span className="absolute right-3 w-5 h-5 text-subduded-500 pointer-events-none">
            {iconRight}
          </span>
        )}
      </div>

      {error && errorMessage && (
        <p className="mt-1 text-sm text-critical-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;

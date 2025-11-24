import { useState } from "react";

const Checkbox = ({ label, onChange, checked, className = "" }) => {
  return (
    <label className={`flex items-start gap-3 cursor-pointer ${className}`}>
      
      {/* Hidden Native Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      {/* Custom UI */}
      <div
        className={`
          w-6 h-6 -mt-0.5 rounded-md flex items-center justify-center
          transition-all duration-200
          ${checked ? "bg-black" : "border border-subduded-400 bg-white"}
        `}
      >
        {/* White Tick Icon */}
        {checked && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      {/* The Label */}
      <span className="text-sm text-subduded-600">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;

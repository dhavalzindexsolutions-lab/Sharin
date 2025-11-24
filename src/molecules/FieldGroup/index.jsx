import React, { ReactNode } from "react";
import Input from "../Input";

const FieldGroup = ({ label, fieldDescription, className = "", children }) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${className}`}>
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-subduded-800">
            {label}
          </label>
        )}
        {fieldDescription && (
          <span className="mt-1 block text-subduded-500 text-xs font-normal leading-tight">
            {fieldDescription}
          </span>
        )}
      </div>

      {children}
    </div>
  );
};

export default FieldGroup;

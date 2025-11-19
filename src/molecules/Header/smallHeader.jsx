import React from "react";
import { Link } from "react-router";
import mainLogo from "../../assets/images/logo.svg";
import questionCircle from "../../assets/images/question-circle-icon.svg";

const SmallHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between p-4 lg:p-6 gap-y-2 gap-x-4">
      {/* Logo */}
      <div className="inline-block">
        <Link to="/">
          <img
            src={mainLogo}
            alt="logo"
            className="max-w-full w-32 md:w-auto"
          />
        </Link>
      </div>

      {/* Assistance */}
      <div className="inline-block text-sm md:text-16">
        <Link to="/" className="inline-flex gap-1 hover:underline">
          <img src={questionCircle} alt="assistance" className="max-w-full" />
          <strong>Assistenza</strong>
        </Link>
      </div>
    </div>
  );
};

export default SmallHeader;

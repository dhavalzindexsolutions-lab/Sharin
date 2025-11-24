import React from "react";
import { Link } from "react-router";
import mainLogo from "../../../assets/images/logo.svg";
import questionCircle from "../../../assets/images/question-circle-icon.svg";
import Button from "../../Buttons";

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
        <Button
          as="link"
          to="/verify-address"
          size="md"
          variant="ghost"
          leadingIcon={questionCircle}
        >
          Assistenza
        </Button>
      </div>
    </div>
  );
};

export default SmallHeader;

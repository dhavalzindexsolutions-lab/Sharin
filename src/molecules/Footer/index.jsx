import React from "react";
import { Link } from "react-router";
import TextLink from "../TextLink";

const FooterLinks = () => {
  const currentYear = new Date().getFullYear();

  const items = [
    { label: "Termini e condizioni", to: "#" },
    { label: "Privacy Policy", to: "#" },
    { label: "Norme sui Cookie", to: "#" },
    { label: `© ${currentYear} Sharin Srl` }, // plain text, no link
  ];

  return (
    <div className="block p-4 lg:p-6">
      <ul className="flex flex-wrap items-center justify-center text-center text-sm leading-5 gap-y-2 gap-x-4 text-subduded-500">
        {items.map((item, index) => (
          <li key={index}>
            {item.to ? (
                <TextLink label={item.label} type="simple" to={item.to} size="SM20" />
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

import React from "react";
import { Link } from "react-router";

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
      <ul className="flex flex-wrap items-center justify-center text-center text-sm md:text-16 gap-y-2 gap-x-4 text-[#767676]">
        {items.map((item, index) => (
          <li key={index}>
            {item.to ? (
              <Link to={item.to} className="hover:text-black">
                {item.label}
              </Link>
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

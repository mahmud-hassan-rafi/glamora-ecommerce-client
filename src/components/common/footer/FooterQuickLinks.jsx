import React from "react";
import { NavLink } from "react-router-dom";

const FooterQuickLinks = ({ title, links }) => {
  return (
    <div className="lg:pl-10">
      <h3 className="text-white font-bold tracking-wider text-base uppercase mb-6">
        {title}
      </h3>
      <ul className="space-y-2.5 sm:space-y-4 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link?.href || "/"}
              className={({ isActive }) =>
                isActive
                  ? "hover:text-white transition-colors text-gray-300"
                  : "hover:text-white transition-colors text-gray-400/90"
              }
            >
              {link?.title || link}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterQuickLinks;

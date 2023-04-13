import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

function External() {
  const link_text = [
    "Landing page",
    "Monify Dashboard",
    "Tawkto",
    "Google Analytics",
    "Google Workspace",
    "Google Workspace",
    "Social Blade",
  ];
  return (
    <div className="external">
      <div className="external_heading">External link</div>
      <div className="external_container">
        {link_text.map((item, key) => (
          <a className="external_container_link" href="">
            <span>{item}</span>
            <BsArrowUpRight />
          </a>
        ))}
      </div>
    </div>
  );
}

export default External;

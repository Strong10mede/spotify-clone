import React from "react";
import "./SidebarOption.css";
function SidebarOption({ title, icon }) {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
}

export default SidebarOption;

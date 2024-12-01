import React from "react";

const Tooltip = ({ text, children, action, vlv }) => {
  return (
    <div className="tooltiptext ">
      {vlv && text}
      <div className="tooltip" onMouseEnter={() => action((prev) => !prev)}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;

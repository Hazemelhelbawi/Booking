import React from "react";

const Dropdown = ({ className, options }) => {
  return (
    // <div className={className}>
    <>
      {options.map(({ label, onClick }, index) => (
        <p key={index} onClick={onClick} className={className}>
          {label}
        </p>
      ))}
    </>
    // </div>
  );
};

export default Dropdown;

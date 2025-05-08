import React from "react";

const Button = ({ children, className, onClick, href }) => {
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <>
      <button onClick={onClick} className={`${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;

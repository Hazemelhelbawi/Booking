import React from "react";

const Input = ({
  className,
  type = "text",
  value,
  placeholder,
  onChange,
  name,
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className}`}
      />
    </>
  );
};

export default Input;

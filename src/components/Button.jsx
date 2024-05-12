import React from "react";

function Button({ children, size = "small", onClick, className }) {
  return (
    <button
      className={`${
        size === "big" ? "p-3" : "p-2"
      } bg-blue-500 rounded-lg cursor-pointer font-dosis hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

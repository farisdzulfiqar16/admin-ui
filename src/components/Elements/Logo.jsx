import React from "react";
import { Link } from "react-router-dom";
function Logo(props) {
  const { variant = "primary" } = props;

  const variantClasses = {
    primary: "text-primary text-4xl sm:text-5xl ",
    secondary: "text-primary text-sm sm:text-2xl ",
  };

  return (
    <>
      <Link to="/">
        <div
          className={`flex justify-center font-poppins tracking-wide 
          ${variantClasses[variant] || variantClasses.primary}`}
        >
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div>
      </Link>
    </>
  );
}

export default Logo;

import React from "react";
import input from "./input";

function LabeledInput(props) {
  const {label , id , ...rest} = props;
  
  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2 text-gray-02">
        {label}
      </label>
      <input
        id={id}
        className="w-full h-12 px-4 border border-gray-05 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        {...rest}
      />
    </>
  )
}

export default LabeledInput;

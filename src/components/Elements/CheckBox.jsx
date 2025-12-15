import React from "react";

function LabeledInput(props) {
  const {label , id , ...rest} = props;
  return (
    <>
      <input
        className="text-sm accent-primary"
        id={id}
        {...rest}
      />
      <label 
        className="text-sm text-gray-01 ml-6"
        htmlFor={id} 
      >
        {label}
      </label>
    </>
  )
}

export default CheckBox;

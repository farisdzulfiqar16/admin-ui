import React from "react";

function CheckBox(props) {
  const {label , id , ...rest} = props;
  return (
    <>
      <div>
          <input
            type="checkbox"
            id={id}
            className="accent-primary"
            {...rest}
          />
          <label 
            htmlFor={id} 
            className="text-sm text-gray-01 ml-6"
          >
            {label}
          </label>
        </div>
    </>
  )
}

export default CheckBox;

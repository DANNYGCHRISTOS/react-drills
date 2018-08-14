import React from "react";
export default function TextValue(props) {
  return (
    <div className="TextValue">
      <input onChange={e => props.handleChange(e.target.value)} type="text" />
      <p>{props.textInput}</p>
    </div>
  );
}

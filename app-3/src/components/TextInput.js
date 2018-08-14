import React from "react";
import textInputs from "./components/textInputs";
export default function textInputs(props) {
  return (
    <div>
      <input onChange={e => props.handleChange(e.target.value)} type="text" />
      <p>{props.filterString}</p>
    </div>
  );
}

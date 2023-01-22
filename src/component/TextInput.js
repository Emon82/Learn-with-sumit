import React from "react";
import "../Styles/TextInput.css";
export default function TextInput({ icon, ...rest }) {
  return (
    <div>
      <div className="textInput">
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Videos.modul.css";
import Video from "./Video";
export default function Videos() {
  return (
    <div className="videos">
      <Link to="/quiz">
        {" "}
        <Video />{" "}
      </Link>
      <Link to="/quiz">
        {" "}
        <Video />{" "}
      </Link>
      <Link to="/quiz">
        {" "}
        <Video />{" "}
      </Link>
      <Link to="/quiz">
        {" "}
        <Video />{" "}
      </Link>
    </div>
  );
}

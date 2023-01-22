import React from "react";
import "../Styles/MiniPlayer.css"
import image from '../Images/3.jpg'

export default function MiniPlayer() {
  return (
    <div>
      <div className="miniPlayer floatingBtn">
        <span className="material-icons-outlined open"> play_circle_filled </span>
        <span className="material-icons-outlined close"> close </span>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    </div>
  );
}

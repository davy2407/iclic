import React from "react";
import "./Sponsor.css";

export default function Sponsor(props) {
  return (
    <img alt="fond" className="Image" src={props.info.backgroundImage}></img>
  );
}

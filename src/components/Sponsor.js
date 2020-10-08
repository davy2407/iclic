import React from "react";
import "./Sponsor.css";

export default function Sponsor(props) {
  return <img className="Image" src={props.info.backgroundImage}></img>;
}

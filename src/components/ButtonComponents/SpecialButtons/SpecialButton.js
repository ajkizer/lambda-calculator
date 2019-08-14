import React from "react";
import { specials } from "../../../data";

const SpecialButton = props => {
  return <button className={`btn btn-special`}>{props.text}</button>;
};

export default SpecialButton;

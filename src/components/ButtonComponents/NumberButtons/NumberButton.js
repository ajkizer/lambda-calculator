import React from "react";
import { numbers } from "../../../data";
import Display from "../../DisplayComponents/Display";
import App from "../../../App";

const NumberButton = props => {
  return (
    <button className={`btn numbtn btn-${props.text}`}>{props.text}</button>
  );
};

export default NumberButton;

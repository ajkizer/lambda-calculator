import React from "react";
import { operators } from "../../../data";

const OperatorButton = props => {
  return <button className={`btn btn-operator`}>{props.text}</button>;
};

export default OperatorButton;

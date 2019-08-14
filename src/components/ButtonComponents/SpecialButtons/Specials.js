import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
import { useState } from "react";

const Specials = () => {
  const [special, setSpecial] = useState(specials);
  return (
    <div>
      {specials.map(special => (
        <SpecialButton text={special} key={special} />
      ))}
    </div>
  );
};

export default Specials;

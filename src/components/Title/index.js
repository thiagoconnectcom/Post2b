import React from "react";
import { TitleBody } from "./styles";

export default function Title({ title }) {
  return (
    <div className="mt-5 mb-3">
      <TitleBody>{title}</TitleBody>
    </div>
  );
}

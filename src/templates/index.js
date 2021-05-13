import React from "react";

//components
import Header from "../components/Header";
import TitleBody from "../components/Title"

export default function templates({children, title}) {
  return (
    <div>
      <Header>asd</Header>
      <div className="container">
        <TitleBody title={title}/>
        {children}
      </div>
    </div>
  );
}

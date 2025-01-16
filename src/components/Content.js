import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import "./Content.css";

const Content = () => {
  return (
    <section className="content">
      <LeftContent />
      <RightContent />
    </section>
  );
};

export default Content;

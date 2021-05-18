import React from "react";
import Img from "../../assets/job-logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={Img} alt="" />
    </div>
  );
}

import React from "react";
import "./JobCard.css";

export default function JobCard() {
  return (
    <div className="jobcard">
      <div className="top-logo">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxzZWFyY2h[…]wwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          alt=""
        />{" "}
      </div>
      <h2 className="job">Mid-Senior Engineer</h2>
      <h3>Amazon, USA</h3>
      <h4>Full Time</h4>
      <button className="app-btn" type="button">
        APPLY
      </button>
    </div>
  );
}

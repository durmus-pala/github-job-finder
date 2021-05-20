import React from "react";
import "./JobCard.css";

export default function JobCard({ title, type, location, logo, url }) {
  const defaultLogo =
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxzZWFyY2h[…]wwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60";
  return (
    <div className="jobcard">
      <div className="top-logo">
        <img src={logo != null ? logo : defaultLogo} alt="" />{" "}
      </div>
      <h2 className="job">{title}</h2>
      <h3>{location}</h3>
      <h4>{type}</h4>

      <a href={url}>
        <button className="app-btn" type="button">
          APPLY
        </button>
      </a>
    </div>
  );
}

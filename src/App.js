import React from "react";
import Header from "./components/header/Header.js";
import Form from "./components/form/Form.js";
import JobCard from "./components/jobcard/JobCard.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <JobCard />
    </div>
  );
}

import React, { useState } from "react";
import Header from "./components/header/Header.js";
import Form from "./components/form/Form.js";
import JobCard from "./components/jobcard/JobCard.js";

import "./App.css";

export default function App() {
  const [querryResult, setQuerryResult] = useState([]);
  return (
    <div className="App">
      <Header />
      {<Form setData={setQuerryResult} />}
      {querryResult?.map((querry, index) => (
        <JobCard
          title={querry.title}
          type={querry.type}
          location={querry.location}
          logo={querry.company_logo}
          url={querry.company_url}
          key={index}
        />
      ))}
    </div>
  );
}

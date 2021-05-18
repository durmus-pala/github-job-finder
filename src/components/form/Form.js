import React from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
  const newQuerry = () => {
    let description = "engineer";
    let location = "usa";
    axios
      .get(`./positions.json?description=${description}&location=${location}`)
      .then((res) => console.log(res));
  };
  return (
    <div className="form">
      <form action="">
        <h1>GITHUB JOB FINDER</h1>
        <input type="text" name="" id="" placeholder="DESCRIPTION" />
        <br />
        <input type="text" name="" id="" placeholder="LOCATION" />
        <br />
        <button onClick={newQuerry} type="button">
          SEARCH
        </button>
      </form>
    </div>
  );
}

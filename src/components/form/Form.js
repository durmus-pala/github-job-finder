import React, { useRef } from "react";
import "./Form.css";
import axios from "axios";

export default function Form({ setData }) {
  const description = useRef();
  const location = useRef();
  const newQuerry = () => {
    axios
      .get(
        `./positions.json?description=${description.current.value}&location=${location.current.value}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch(() => {
        console.log("Data alınamadı");
      });
  };
  return (
    <div className="form">
      <form action="">
        <h1>GITHUB JOB FINDER</h1>
        <input
          ref={description}
          type="text"
          name=""
          id="desc"
          placeholder="DESCRIPTION"
        />
        <br />
        <input
          ref={location}
          type="text"
          name=""
          id="loc"
          placeholder="LOCATION"
        />
        <br />
        <button className="src-btn" onClick={newQuerry} type="button">
          SEARCH
        </button>
      </form>
    </div>
  );
}

import React, { useRef, useState } from "react";
import "./Form.css";
import Loading from "../../assets/loading.gif";
import FourZeroFour from "../../assets/404.png";
import axios from "axios";

export default function Form({ setData }) {
  const [loading, setLoading] = useState(false);
  const [myData, setMyData] = useState([1]);
  const description = useRef();
  const location = useRef();
  const newQuerry = () => {
    setLoading(true);
    axios
      .get(
        `./positions.json?description=${description.current.value}&location=${location.current.value}`
      )
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setMyData(res.data);
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
      <div>{loading === true ? <img src={Loading} alt="" /> : null}</div>
      <div>
        {" "}
        {myData.length === 0 ? (
          <img src={FourZeroFour} alt="not found" />
        ) : null}{" "}
      </div>
    </div>
  );
}

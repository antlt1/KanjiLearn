import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

export default function List() {
  const [dataKanji, setKanji] = useState([]);
  useEffect(() => {
    axios.get("https://kanjiapi.dev/v1/kanji/grade-8").then((rsp) => {
      setKanji(rsp.data);
      console.log(rsp.data);
    });
  }, []);
  return (
    <div className="box">
      <div className="listkanji">
        {dataKanji.map((data, index) => {
          return (
            <li className="card">
              <a href="#">{data}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function List() {
  const [dataKanji, setKanji] = useState([]);
  const dataURL = useParams();
  useEffect(() => {
    axios.get("https://kanjiapi.dev/v1/kanji/grade-"+ dataURL.data).then((rsp) => {
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
                {/* <a className="textcard" href="#">{data}</a> */}
                <Link to={'/cards/'+data}>{data}</Link>
              </li>
            );
        })}
      </div>
    </div>
  );
}

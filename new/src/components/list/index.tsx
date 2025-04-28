import "./style.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function List() {
  const [dataKanji, setKanji] = useState<string[]>([]);
  const dataURL = useParams<{ data: string }>();

  useEffect(() => {
    if (dataURL.data) {
      axios
        .get(`https://kanjiapi.dev/v1/kanji/grade-${dataURL.data}`)
        .then((rsp) => {
          setKanji(rsp.data);
          console.log(rsp.data);
        });
    }
  }, [dataURL.data]);

  return (
    <div className="box">
      <div className="listkanji">
        {dataKanji.map((data, index) => (
          <li className="card" key={index}>
            <Link to={`/cards/${data}`}>{data}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

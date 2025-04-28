import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.scss";
export default function Cards() {
  const [charKanji, setKanji] = useState("");
  const dataURL = useParams();
  console.log(dataURL.data);
  // set style bind like ClassName={cx('classname')}
  const cx = styles.bind(styles);

  useEffect(() => {
    axios.get("https://kanjiapi.dev/v1/kanji/" + dataURL.data).then((data) => {
      setKanji(data.data);
    });
  }, [dataURL]);
  return (
    <>
      <div className="card">
        <nav>
          <svg
            className="arrow"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "
              stroke="#727272"
            />
          </svg>
          <Link to="/list">Trở về danh sách hán tự</Link>
          <svg
            className="heart"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            stroke="#727272"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
              stroke="#727272"
            />
          </svg>
        </nav>

        <div className="description">
          <a className="h2">{charKanji.kanji}</a>
          <p>
            <h1>
              {" "}
              <b>
                Đọc:
                {Array.isArray(charKanji.name_readings)
                  ? charKanji.name_readings.join(", ")
                  : charKanji.name_readings}
              </b>
            </h1>
          </p>
          <h1>Âm Onyomi: {charKanji.on_readings}</h1>
          <p>Nghĩa: &nbsp;
            {Array.isArray(charKanji.meanings)
              ? charKanji.meanings.join(", ")
              : charKanji.meanings}
          </p>
          {/* <button>Add to Cart</button>
          <button>Wishlist</button> */}
        </div>
      </div>
    </>
  );
}

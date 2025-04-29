import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "~/store/reducers/reducer";
// import { fetchKanjiList } from "~/store/actions/kanjiAction";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function Home() {
  // const dispatch: AppDispatch = useDispatch();
  // const kanjiList = useSelector((state: RootState) => state.kanji.kanjiList);

  // useEffect(() => {
  //   dispatch(fetchKanjiList());
  // }, [dispatch]);

  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>Kanji List</h1>
      <div className={cx("kanji-list")}>
        {/* {kanjiList.map((kanji) => (
          <div key={kanji.kanji} className={cx("kanji-item")}>
            {kanji.kanji}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Home;
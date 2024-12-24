import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <ul>
          <li className={styles.nav_li}>Home</li>
          <li className={styles.sub_li}>
            Kanji List
            <li>
              <a href="/list/1">N5</a>
              <a href="/list/2">N4</a>
              <a href="/list/3">N3</a>
              <a href="/list/4">N2</a>
              <a href="/list/5">N1</a>
            </li>
            
          </li>
          <li className={styles.nav_li}> </li>
          <li className={styles.nav_li}>Help</li>
        </ul>
      </div>
    </>
  );
}

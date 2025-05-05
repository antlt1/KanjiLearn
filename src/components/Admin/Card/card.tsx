import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { useEffect } from "react";


const cx = classNames.bind(styles);
console.log("hello ae");


function CardAdmin() {
  return(
    <>
    <h4>
      Đây là Card admin
    </h4>
    </>

  )
}

export default CardAdmin;

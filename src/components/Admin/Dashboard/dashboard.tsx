import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import LeftBar from "./LeftBar/leftbar";
import NavBar from "./NavBar/navbar";

// import { Container } from './styles';

const cx = classNames.bind(styles);

//dùng boostrap để tạo giao diện đẹp hơn

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className={cx("dashboard")}>
      <div className={cx("left-sidebar")}>
        <LeftBar />
      </div>
      <div className={cx("body-dashboard")}>
        <NavBar />
        <div className={cx("content")}>
          {children} {/* Đảm bảo children được render */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

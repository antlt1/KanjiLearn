import React from 'react';
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import LeftBar from './LeftBar/leftbar';
import NavBar from './NavBar/navbar';

// import { Container } from './styles';

const cx = classNames.bind(styles);

//dùng boostrap để tạo giao diện đẹp hơn

interface DashboardProps {
    children: React.ReactNode;
}

const
    Dashboard: React.FC<DashboardProps> = ({ children }) => {
        //lòng các component con
        //children là các component con được truyền vào
        return (
            <div className={cx("dashboard")}>
                {/* left sidebar boostrap */}
                <div className={cx("left-sidebar")}>
                    <LeftBar />
                </div>
                <div className={cx("body-dashboard")}>
                    <NavBar /> {/* Navbar ở trên cùng */}
                    <div className={cx("content")}>
                        <h2 className={cx("content-title")}>Nội dung chính</h2>
                        <p className={cx("content-text")}>Đây là nội dung chính của dashboard.</p>
                        {children} {/* Render các component con */}
                    </div>
                </div>
            </div>
        )
    }

export default Dashboard;
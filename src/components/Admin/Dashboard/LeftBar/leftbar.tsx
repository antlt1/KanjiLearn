import React from 'react';
import styles from "./styles.module.scss";
import classNames from "classnames/bind";



const cx = classNames.bind(styles);
//dùng boostrap để tạo giao diện đẹp hơn

const LeftBar: React.FC = () => {
    return <div className={cx("bg-light")} style={{ width: "280px", height: "100vh" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <span className="fs-4">Admin Dashboard</span>
        </a>
        <br /><hr />
        {/* tạo group menu tên group cha là Quản lý từ vựng bên trong có Kanji, từ tựng cơ bản */}
        <h4 className="text-center">Quản lý từ vựng</h4>
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="/admin/kanji" className="nav-link  text-dark" aria-current="page">
                    Kanji
                </a>
            </li>
            <li>
                <a href="/admin/basic-vocabulary" className="nav-link text-dark">
                    Từ vựng cơ bản
                </a>
            </li>
            <li>
                <a href="/admin/advanced-vocabulary" className="nav-link text-dark">
                    Từ vựng nâng cao
                </a>
            </li>
        </ul>
        {/* tạo quản lý câu hỏi trong group con có quản lý câu hỏi, tạo chủ đề câu hỏi */}
        <hr />
        <h4 className="text-center">Quản lý câu hỏi</h4>

        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="/admin/question" className="nav-link  text-dark" aria-current="page">
                    Quản lý câu hỏi
                </a>
            </li>
            <li>
                <a href="/admin/create-topic" className="nav-link text-dark">
                    Tạo chủ đề câu hỏi
                </a>
            </li>
        </ul>
    </div>;
}

export default LeftBar;
import React from 'react';
import styles from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LeftBar: React.FC = () => {
    return <div className={cx("left-bar")}>
        <a href="/" className={cx("siderbar-logo", "d-flex", "align-items-center", "mb-3", "mb-md-0", "me-md-auto", "text-decoration-none")}>
            <span className={cx("fs-4")}>Admin Dashboard</span>
        </a>
        <hr />
        <h5 className={cx("text-group")}>Quản lý từ vựng</h5>
        <ul className={cx("nav", "nav-pills", "flex-column", "mb-auto")}>
            <li className={cx("nav-item")}>
                <a href="/admin/kanji" className={cx("nav-link", "text-dark")} aria-current="page">
                    Kanji
                </a>
            </li>
            <li>
                <a href="/admin/basic-vocabulary" className={cx("nav-link", "text-dark")}>
                    Từ vựng cơ bản
                </a>
            </li>
            <li>
                <a href="/admin/advanced-vocabulary" className={cx("nav-link", "text-dark")}>
                    Từ vựng nâng cao
                </a>
            </li>
        </ul>
        <hr />
        <h5 className={cx("text-group")}>Quản lý câu hỏi</h5>
        <ul className={cx("nav", "nav-pills", "flex-column", "mb-auto")}>
            <li className={cx("nav-item")}>
                <a href="/admin/question" className={cx("nav-link", "text-dark")} aria-current="page">
                    Quản lý câu hỏi
                </a>
            </li>
            <li>
                <a href="/admin/create-topic" className={cx("nav-link", "text-dark")}>
                    Tạo chủ đề câu hỏi
                </a>
            </li>
        </ul>
    </div>;
}

export default LeftBar;
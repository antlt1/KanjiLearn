import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".dropdown")) {
      setDropdownOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={cx("header")}>
      <nav className={cx("navbar", "navbar-expand-lg", "navbar-light", "header")}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            KanjiLearn
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={cx("nav-link")} to="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={cx("nav-link", "dropdown-toggle")}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleDropdown}
                >
                  Kanji List
                </a>
                <ul
                  className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className={cx("dropdown-item")} to="/list/1" onClick={handleMenuItemClick}>
                      N5
                    </Link>
                  </li>
                  <li>
                    <Link className={cx("dropdown-item")} to="/list/2" onClick={handleMenuItemClick}>
                      N4
                    </Link>
                  </li>
                  <li>
                    <Link className={cx("dropdown-item")} to="/list/3" onClick={handleMenuItemClick}>
                      N3
                    </Link>
                  </li>
                  <li>
                    <Link className={cx("dropdown-item")} to="/list/4" onClick={handleMenuItemClick}>
                      N2
                    </Link>
                  </li>
                  <li>
                    <Link className={cx("dropdown-item")} to="/list/5" onClick={handleMenuItemClick}>
                      N1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={cx("nav-link")} to="/random" onClick={handleMenuItemClick}>
                  Random
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

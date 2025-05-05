import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "~/routes/PrivateRoutes";
import Header from "~/components/Layout/header";
import Dashboard from "~/components/Admin/Dashboard/dashboard";
import  styles from "./styles.module.scss";
import LeftBar from "~/components/Admin/Dashboard/LeftBar/leftbar";
import NavBar from "~/components/Admin/Dashboard/NavBar/navbar";
import classNames from "classnames/bind";



const cx = classNames.bind(styles);

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Router cho giao diện người dùng */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <div className="box-body">
                  <PublicRoutes />
                </div>
              </>
            }
          />
          {/* Router cho giao diện admin */}
          <Route
            path="/admin/*"
            element={
              <Dashboard>
                <PrivateRoutes /> {/* Truyền PrivateRoutes đúng cách */}
              </Dashboard>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

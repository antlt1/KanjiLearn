import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "~/routes/PrivateRoutes";
import Header from "~/components/Layout/header";
import Dashboard from "~/components/Admin/Dashboard/dashboard";
import "./styles.module.scss";

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
                <PrivateRoutes />
              </Dashboard>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
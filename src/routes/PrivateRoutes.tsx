import React from "react";
import { Routes, Route } from "react-router-dom";
// import routerPrivate from "../router/routerPrivate";
// import Dashboard from "~/components/Admin/Dashboard/dashboard";
import CardAdmin from "~/components/Admin/Card/card";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/card" element={<CardAdmin />} />
    </Routes>
  );
}

export default PrivateRoutes;
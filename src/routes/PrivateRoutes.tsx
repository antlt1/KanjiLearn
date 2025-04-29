import React from "react";
import { Routes, Route } from "react-router-dom";
import routerPrivate from "../router/routerPrivate";

function PrivateRoutes() {
  return (
    <Routes>
      {routerPrivate.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default PrivateRoutes;
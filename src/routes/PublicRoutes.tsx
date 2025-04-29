import React from "react";
import { Routes, Route } from "react-router-dom";
import routerPublic from "../router/routerPublic";

function PublicRoutes() {
  return (
    <Routes>
      {routerPublic.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default PublicRoutes;
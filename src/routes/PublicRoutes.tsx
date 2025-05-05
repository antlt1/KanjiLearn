import React from "react";
import { Routes, Route } from "react-router-dom";
// import routerPublic from "../router/routerPublic";
import Home from "~/components/Home/home";
import Card from "~/components/Card/card";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card/:id" element={<Card />} />
      {/* Add more public routes here */}
    </Routes>
  );
}

export default PublicRoutes;
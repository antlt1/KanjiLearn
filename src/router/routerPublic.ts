
import React from "react";
import { lazy } from "react";
import Home from "~/components/Home/home";

const PublicRoutes = [
  {
    path: "/",
    element: React.createElement(Home), // Trang chủ
    type: "public",
  },
//   {
//     path: "/about",
//     element: <AboutPage />, // Trang giới thiệu
//     type: "public",
//   },
//   {
//     path: "/contact",
//     element: <ContactPage />, // Trang liên hệ
//     type: "public",
//   },
];

export default PublicRoutes;
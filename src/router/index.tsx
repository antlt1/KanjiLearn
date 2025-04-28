import React from "react"; // Add this import
import List from "~/components/List/List";
import Cards from "~/components/Cards";
import Home from "~/components/Home/home";

// admin
import CardAdmin from "~/components/Admin/Card/card";
import { RouteObject } from "react-router-dom";

export const routerPublic: RouteObject[] = [
  { path: "/cards", element: <Cards /> },
  { path: "/cards/:data/", element: <Cards /> },
  { path: "/list/:data/", element: <List /> },
  { path: "/list", element: <List /> },
  { path: "/", element: <Home /> },
];

export const routerPrivate: RouteObject[] = [
  { path: "/admin/cards", element: <CardAdmin /> },
];

export default routerPublic;

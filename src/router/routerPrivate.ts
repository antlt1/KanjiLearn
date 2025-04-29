import React from "react";
import { lazy } from "react";
import Dashboard from "~/components/Admin/Dashboard/dashboard";

const PrivateRoutes = [
  {
    path: "/admin/dashboard",
    element: React.createElement(Dashboard), // Trang dashboard
    type: "private",
  },
//   {
//     path: "/admin/users",
//     element: <UserManagementPage />, // Trang quản lý người dùng
//     type: "private",
//   },
//   {
//     path: "/admin/settings",
//     element: <SettingsPage />, // Trang cài đặt
//     type: "private",
//   },
];

export default PrivateRoutes;
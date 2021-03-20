import React from "react";

const UsersModule = React.lazy(() => import("./UsersModule"));
const Users = React.lazy(() => import("./pages/Users"));
const User = React.lazy(() => import("./pages/User"));

const iconRoutes = [
  {
    path: "/users",
    exact: true,
    name: "Users",
    component: UsersModule,
    chilrends: [
      { path: "", exact: true, name: "Users", component: Users },
      { path: "/:id", exact: true, name: "User Details", component: User },
    ],
  },
];

export default iconRoutes;

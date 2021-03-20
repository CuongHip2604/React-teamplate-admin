import React from "react";

const NotificationModules = React.lazy(() => import("./NotificationModules"));
const Alerts = React.lazy(() => import("./pages/Alerts"));
const Badges = React.lazy(() => import("./pages/Badges"));
const Modals = React.lazy(() => import("./pages/Modals"));
const Toaster = React.lazy(() => import("./pages/Toaster"));

const buttonRoutes = [
  {
    path: "/notifications",
    name: "Notifications",
    component: NotificationModules,
    chilrends: [
      { path: "/alerts", name: "Alerts", component: Alerts, exact: true },
      { path: "/badges", name: "Badges", component: Badges, exact: true },
      { path: "/modals", name: "Modals", component: Modals, exact: true },
      { path: "/toaster", name: "Toaster", component: Toaster, exact: true },
    ],
  },
];

export default buttonRoutes;

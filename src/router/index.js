import React from "react";
import modulesRoutes from "./modules";

const Charts = React.lazy(() => import("../shared/pages/charts/Charts"));
const Dashboard = React.lazy(() =>
  import("../shared/pages/dashboard/Dashboard")
);

const Widgets = React.lazy(() => import("../shared/pages/widgets/Widgets"));

let routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/widgets", name: "Widgets", component: Widgets },
];

function configRoutes() {
  if (modulesRoutes && Object.values(modulesRoutes).length) {
    let allRoutes = new Set();
    Object.values(modulesRoutes).forEach((routes) => {
      routes.forEach((route) => {
        allRoutes.add(route);
      });
    });

    return [...Array.from(allRoutes), ...routes];
  }

  return [...routes];
}

routes = configRoutes();

export default routes;

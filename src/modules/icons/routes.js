import React from "react";

const IconsModule = React.lazy(() => import("./IconsModule"));
const CoreUIIcons = React.lazy(() => import("./pages/CoreUIIcons"));
const Flags = React.lazy(() => import("./pages/Flags"));
const Brands = React.lazy(() => import("./pages/Brands"));

const iconRoutes = [
  {
    path: "/icons",
    exact: true,
    name: "Icons",
    component: IconsModule,
    chilrends: [
      {
        path: "/coreui-icons",
        name: "CoreUI Icons",
        component: CoreUIIcons,
        exact: true,
      },
      { path: "/flags", name: "Flags", component: Flags, exact: true },
      { path: "/brands", name: "Brands", component: Brands, exact: true },
    ],
  },
];

export default iconRoutes;

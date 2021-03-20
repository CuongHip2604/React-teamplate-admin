import React from "react";

const ThemeModule = React.lazy(() => import("./ThemeModule"));
const Colors = React.lazy(() => import("./pages/Colors"));
const Typography = React.lazy(() => import("./pages/Typography"));

const themeRoutes = [
  {
    path: "/theme",
    name: "Theme",
    component: ThemeModule,
    chilrends: [
      { path: "/colors", name: "Colors", component: Colors, exact: true },
      {
        path: "/typography",
        name: "Typography",
        component: Typography,
        exact: true,
      },
    ],
  },
];

export default themeRoutes;

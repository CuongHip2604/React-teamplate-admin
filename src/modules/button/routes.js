import React from "react";

const ButtonModule = React.lazy(() => import("./ButtonModule"));
const Buttons = React.lazy(() => import("./pages/Buttons"));

const BrandButtons = React.lazy(() => import("./pages/BrandButtons"));
const ButtonDropdowns = React.lazy(() => import("./pages/ButtonDropdowns"));
const ButtonGroups = React.lazy(() => import("./pages/ButtonGroups"));

const buttonRoutes = [
  {
    path: "/buttons",
    name: "Buttons",
    component: ButtonModule,
    chilrends: [
      { path: "/buttons", name: "Buttons", component: Buttons },
      {
        path: "/button-dropdowns",
        name: "Dropdowns",
        component: ButtonDropdowns,
      },
      {
        path: "/button-groups",
        name: "Button Groups",
        component: ButtonGroups,
      },
      {
        path: "/brand-buttons",
        name: "Brand Buttons",
        component: BrandButtons,
      },
    ],
  },
];

export default buttonRoutes;

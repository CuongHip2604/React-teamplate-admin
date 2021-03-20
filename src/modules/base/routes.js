import React from "react";

const BaseModules = React.lazy(() => import("./BaseModules"));
const Tables = React.lazy(() => import("./pages/Tables"));

const Breadcrumbs = React.lazy(() => import("./pages/Breadcrumbs"));
const Cards = React.lazy(() => import("./pages/Cards"));
const Carousels = React.lazy(() => import("./pages/Carousels"));
const Collapses = React.lazy(() => import("./pages/Collapses"));
const BasicForms = React.lazy(() => import("./pages/BasicForms"));

const Jumbotrons = React.lazy(() => import("./pages/Jumbotrons"));
const ListGroups = React.lazy(() => import("./pages/ListGroups"));
const Navbars = React.lazy(() => import("./pages/Navbars"));
const Navs = React.lazy(() => import("./pages/Navs"));
const Paginations = React.lazy(() => import("./pages/Pagnations"));
const Popovers = React.lazy(() => import("./pages/Popovers"));
const ProgressBar = React.lazy(() => import("./pages/ProgressBar"));
const Switches = React.lazy(() => import("./pages/Switches"));

const Tabs = React.lazy(() => import("./pages/Tabs"));
const Tooltips = React.lazy(() => import("./pages/Tooltips"));

const baseRoutes = [
  {
    path: "/base",
    name: "Base",
    component: BaseModules,
    chilrends: [
      {
        path: "/breadcrumbs",
        name: "Breadcrumbs",
        component: Breadcrumbs,
        exact: true,
      },
      { path: "/cards", name: "Cards", component: Cards, exact: true },
      {
        path: "/carousels",
        name: "Carousel",
        component: Carousels,
        exact: true,
      },
      {
        path: "/collapses",
        name: "Collapse",
        component: Collapses,
        exact: true,
      },
      {
        path: "/forms",
        name: "Forms",
        component: BasicForms,
        exact: true,
      },
      {
        path: "/jumbotrons",
        name: "Jumbotrons",
        component: Jumbotrons,
        exact: true,
      },
      {
        path: "/list-groups",
        name: "List Groups",
        component: ListGroups,
        exact: true,
      },
      {
        path: "/navbars",
        name: "Navbars",
        component: Navbars,
        exact: true,
      },
      { path: "/navs", name: "Navs", component: Navs, exact: true },
      {
        path: "/paginations",
        name: "Paginations",
        component: Paginations,
        exact: true,
      },
      {
        path: "/popovers",
        name: "Popovers",
        component: Popovers,
        exact: true,
      },
      {
        path: "/progress-bar",
        name: "Progress Bar",
        component: ProgressBar,
        exact: true,
      },
      {
        path: "/switches",
        name: "Switches",
        component: Switches,
        exact: true,
      },
      { path: "/tables", name: "Tables", component: Tables, exact: true },
      { path: "/tabs", name: "Tabs", component: Tabs, exact: true },
      {
        path: "/tooltips",
        name: "Tooltips",
        component: Tooltips,
        exact: true,
      },
    ],
  },
];

export default baseRoutes;

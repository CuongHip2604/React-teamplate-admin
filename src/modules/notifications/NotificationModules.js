import React from "react";
import { Switch, useRouteMatch } from "react-router";
import RouteWithSubRoutes from "src/router/RouteWithSubRoutes";

function NotificationModules({ routes }) {
  const match = useRouteMatch();
  let newRoutes = routes.map((route) => {
    return {
      ...route,
      path: `${match.path}${route.path}`,
    };
  });
  return (
    <Switch>
      {newRoutes.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
      })}
    </Switch>
  );
}

export default NotificationModules;

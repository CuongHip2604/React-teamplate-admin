import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import Loading from "./shared/plugins/loading";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./shared/containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./modules/authentication/pages/Login"));
const Register = React.lazy(() =>
  import("./modules/authentication/pages/Register")
);
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => {
  const isLoading = useSelector((state) => state.globalStore.loading);

  const handleRedirec = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return false;
    return true;
  };
  return (
    <div>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => {
                return handleRedirec() ? (
                  <Redirect to="/" />
                ) : (
                  <Login {...props} />
                );
              }}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => {
                return handleRedirec() ? (
                  <Redirect to="/" />
                ) : (
                  <Register {...props} />
                );
              }}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => {
                return handleRedirec() ? (
                  <TheLayout {...props} />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
      <Loading loading={isLoading} />
    </div>
  );
};

export default App;

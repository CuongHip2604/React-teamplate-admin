import axios from "axios";
import store, { SET } from "../../store";

let loader = null;
const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: `${process.env.REACT_APP_TIMEOUT}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(
  (config) => {
    if (!loader) {
      loader = true;
      store.dispatch(SET(["loading", loader]));
    }
    const token = localStorage.getItem("accessToken") || null;
    if (token) config.headers.common["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    if (loader) {
      loader = false;
      store.dispatch(SET(["loading", loader]));
    }
    // response.data = mappingResponseConvention(response.data)
    return response;
  },
  async (error) => {
    if (loader) {
      loader = false;
      store.dispatch(SET(["loading", loader]));
    }
    throw error;
  }
);

export const callAPI = (method, path, body, config = {}) => {
  let res = null;
  switch (method.toLowerCase()) {
    case "get":
      // in case GET method: body is config
      res = httpClient[method.toLowerCase()](path, body || config);
      break;
    default:
      res = httpClient[method.toLowerCase()](path, body, config);
  }

  return res.catch(async (error) => {
    if (!error.config?.skipErrorHandle) {
      switch (error.response?.status) {
        case 400: // Wrong url or params
          console.log(111, error.response?.data.message[0].messages[0].message);
          if (
            error.response?.data.message[0]?.messages[0]?.message &&
            !error.config?.skipToast
          ) {
            break;
          } else
            throw (
              error.response?.data.message[0]?.messages[0]?.message || error
            );
        case 404: // Missing parameters | Missing upload file
        case 409: // Conflict
        case 500: // Server error
          // Show toastr if error code global, likes: 500 Unknow Error
          // Other: handled in vue component catch
          if (!error.response?.data?.message && !error.config?.skipToast) {
            // CustomToastr.error(error.response?.data?.message || error.message)
            break;
          } else throw error.response?.data?.message || error;
        case 403: // Permission
          // await store.dispatch(`authentication/${LOGOUT}`)
          break;
        case 401: // Signature verification failed | Token has been revoked
          // check url # refresh token
          // true: try to refresh access token. then call queue apis
          // else: logout
          // if (path !== "auth/refresh") {
          // 	await store.dispatch(`authentication/${REFRESH_TOKEN}`)
          // 	return callAPI(method, path, body, config)
          // } else {
          // 	store.commit(`authentication/${REFRESH_TOKEN_ERROR}`)
          // 	CustomToastr.error(error.response?.data?.message || error.message)
          // 	router.push("/login")
          // 	throw error.response?.data?.detail || error
          // }
          break;
        default:
          throw error.response?.data?.detail || error;
      }
    }
  });
};

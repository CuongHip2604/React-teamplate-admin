import { callAPI } from "src/shared/services";

const API = {
  login: (params) => {
    return callAPI("POST", "auth/local", params).then((res) => res.data);
  },
  register: (params) => {
    return callAPI("POST", "auth/local/register", params).then(
      (res) => res.data
    );
  },
};

export default API;

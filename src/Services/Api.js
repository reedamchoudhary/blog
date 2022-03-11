import axios from "axios";
import errorHandler from "./NetworkErrorHandler";

const API = {
  getHeaders: () => {
    return {
      "Content-Type": "application/json",
    };
  },
  get: (route, headers) => {
    const getPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, null, "get", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
    return getPromise;
  },
  post: (route, params, headers = {}) => {
    const getPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, params, "post", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
    return getPromise;
  },
  patch: (route, params, headers = {}) => {
    const getPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, params, "patch", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
    return getPromise;
  },
  delete: (route, params, header = {}) => {
    const getPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, params, "delete", header, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
    return getPromise;
  },
  prepareConfig: async (routeUrl, params, methodType, headers, callBack) => {
    const config = {
      method: methodType,
      url: routeUrl,
      data: params,
      headers: headers,
      //timeout: ,
    };
    await API.call(config, callBack);
  },
  call: (config, callBack) => {
    if (navigator.onLine) {
      axios(config)
        .then((response) => {
          callBack(null, response.data);
        })
        .catch((error) => {
          callBack(error, null);
          errorHandler(error, config.url);
          throw error;
        });
    } else {
      errorHandler("internet", "");
      callBack(true, null);
    }
  },
};

export default API;

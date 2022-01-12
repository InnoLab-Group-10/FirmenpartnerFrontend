import axios from "axios";

let store;
export const injectStore = _store => {
    store = _store
};

// used for requests that don't need authentication
export const axiosPublic = axios.create({ baseURL: "http://toadsworth.ddns.net:5000/api" });
// used for requests that need authentication
export const axiosPrivate = axios.create({ baseURL: "http://toadsworth.ddns.net:5000/api" });

axiosPrivate.interceptors.request.use(
    async config => {
      const user = store.getState();
      console.log(user);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
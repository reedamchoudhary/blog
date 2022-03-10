import axios from "axios";
import { auth } from "../FirebaseConfig";
import { useToast } from "@chakra-ui/react";

const defaultHeaders = {
  "Content-type": "application/json",
};

const toast = useToast();

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: defaultHeaders,
});

API.interceptors.response.use(
  async (response) => {
    toast.info(response);
    return response;
  },
  (error) => {
    if (error?.response) {
      const message = error.response.data.message;
      if (error?.response.status === 401) {
        signOut(auth);
      }

      toast.error(message);
      return error;
    }

    return Promise.reject(error);
  }
);

import { _MESSAGES } from "../constants/otherConstants";
import { useToast } from "@chakra-ui/react";

const NetworkErrorHandler = (error, url) => {
  const toast = useToast();
  if (url === "") {
    return;
  }

  if (error === "internet") {
    toast({ title: _MESSAGES.NO_INTERNET, status: "error" });
  }
  const { status, data } = error.response;
  switch (status) {
    case 400:
      return toast({ title: data.message, status: "error" });

    case 401:
      return toast({ title: data.message, status: "error" });
    default:
      return;
  }
};

export default NetworkErrorHandler;

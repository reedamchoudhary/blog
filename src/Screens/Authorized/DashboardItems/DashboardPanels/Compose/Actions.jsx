import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import "./Compose.css";
import { useDashboard } from "../../../Dashboard";
import { useComposeContext } from "./Compose";
import PrimaryButton from "../../../../../components/PrimaryButton";

const Actions = () => {
  const [actions] = useState(["Save", "Draft", "Discard"]);
  const { theme } = useDashboard();
  const { postTitle, postBody } = useComposeContext();

  const pushPost = (item) => {
    console.log("item=", item);
    if (item === "Save") {
      axios
        .post(
          `https://rhythmdev-f2352-default-rtdb.firebaseio.com/blog.json`,
          JSON.stringify({
            postTitle,
            postBody,
          })
        )
        .then((response) => {
          console.log("response=", response);
        });
    } else if (item === "Draft") {
      console.log("draft");
    } else if (item === "Discard") {
      console.log("discard");
    }
  };

  const buttons = actions.map((item) => (
    <>
      <PrimaryButton
        theme={theme}
        buttonText={item}
        buttonFunction={() => pushPost(item)}
      />
    </>
  ));
  return <Flex>{buttons}</Flex>;
};

export default Actions;

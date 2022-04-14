import { Flex } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";
import Actions from "./Actions";
import PostBody from "./PostBody";
import PostTitle from "./PostTitle";
import { useDashboard } from "../../../Dashboard";
import "./Compose.css";
import database from "../../../../../FirebaseConfig";

const ComposeContext = createContext();

const Compose = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postEngagement, setPostEngagement] = useState(0);
  const { theme, toggleTheme } = useDashboard();

  const push = () => {
    database
      .ref("user")
      .set({
        Title: postTitle,
        Body: postBody,
      })
      .catch(alert);
  };
  return (
    <ComposeContext.Provider
      value={{
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        theme,
        toggleTheme,
        push,
        postDescription,
        setPostDescription,
        postEngagement,
        setPostEngagement,
      }}
    >
      <Flex className="compose-post" flexDirection={"column"}>
        <PostTitle />
        <PostBody />
        <Actions />
      </Flex>
    </ComposeContext.Provider>
  );
};

export default Compose;

export const useComposeContext = () => {
  return useContext(ComposeContext);
};

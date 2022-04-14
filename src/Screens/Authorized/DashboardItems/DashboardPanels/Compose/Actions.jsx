import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import "./Compose.css";
import { useDashboard } from "../../../Dashboard";
import { useComposeContext } from "./Compose";
import PrimaryButton from "../../../../../components/PrimaryButton";
import API from "../../../../../Services/Api";
import { API_URL } from "../../../../../constants/ApiUrls";

const Actions = () => {
  const [actions] = useState(["Save", "Draft", "Discard"]);
  const { theme } = useDashboard();
  const { postTitle, postBody, postDescription, postEngagement } =
    useComposeContext();

  const pushPost = (item) => {
    var options = { year: "numeric", month: "long", day: "numeric" };

    if (item === "Save") {
      API.post(API_URL.POST_ARTICLE, {
        postTitle,
        postBody,
        Description: postDescription,
        Engagement: postEngagement,
        Date: new Date().toLocaleDateString("en-US", options),
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

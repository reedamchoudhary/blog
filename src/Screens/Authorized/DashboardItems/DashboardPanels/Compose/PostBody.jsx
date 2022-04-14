import { Box, Textarea } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useComposeContext } from "./Compose";
import TextEditor from "../../../../../components/TextEditor";
import "./Compose.css";

const PostBody = () => {
  const { postBody, setPostBody, theme, setPostEngagement } =
    useComposeContext();

  useEffect(() => {
    let wordCount = 0;
    for (let i = 0; i < postBody.length; i++) {
      if (postBody[i] === " ") ++wordCount;
    }

    setPostEngagement(Math.ceil(wordCount / 200));
  }, [postBody]);

  return (
    <>
      <Box className="post-body">
        {/* <Textarea
          placeholder="Start pouring your creativity here..."
          value={postBody}
          h={"500px"}
          resize={"none"}
          color={theme === "dark" ? "white" : "black"}
          borderColor={theme === "dark" ? "white" : "brand.400"}
          border={theme === "light" ? "2px" : "1px"}
          fontSize={"16px"}
          onChange={(e) => setPostBody(e.target.value)}
          focusBorderColor={theme === "light" ? "brand.200" : "brand.100"}
        /> */}
        <Box
          h={"500px"}
          overflowY={"Scroll"}
          color={theme === "dark" ? "white" : "black"}
          fontSize={"16px"}
          focusBorderColor={"white"}
          border={"1px solid gray"}
        >
          <TextEditor setPostBody={setPostBody} />
        </Box>
      </Box>
    </>
  );
};

export default PostBody;

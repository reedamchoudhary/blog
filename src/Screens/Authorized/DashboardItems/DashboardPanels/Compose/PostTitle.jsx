import React from "react";
import { Box, Input, Textarea } from "@chakra-ui/react";
import { useComposeContext } from "./Compose";

const PostTitle = () => {
  const {
    postTitle,
    setPostTitle,
    theme,
    postDescription,
    setPostDescription,
  } = useComposeContext();
  return (
    <>
      <Box className="post-title">
        <Input
          placeholder="POST TITLE"
          value={postTitle}
          h={"40px"}
          color={theme === "dark" ? "white" : "brand.400"}
          fontSize={"18px"}
          onChange={(e) => setPostTitle(e.target.value)}
          focusBorderColor={"gray"}
          border={"1px solid gray"}
          marginBottom={"10px"}
        />
        <Textarea
          placeholder="DESCRIPTION"
          value={postDescription}
          h={"40px"}
          color={theme === "dark" ? "white" : "brand.400"}
          fontSize={"18px"}
          onChange={(e) => setPostDescription(e.target.value)}
          focusBorderColor={"gray"}
          border={"1px solid gray"}
        />
      </Box>
    </>
  );
};

export default PostTitle;

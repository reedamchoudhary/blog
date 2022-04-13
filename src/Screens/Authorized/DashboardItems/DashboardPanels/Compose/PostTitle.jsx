import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { useComposeContext } from "./Compose";

const PostTitle = () => {
  const { postTitle, setPostTitle, theme } = useComposeContext();
  return (
    <>
      <Box className="post-title">
        <Input
          placeholder="POST TITLE"
          value={postTitle}
          h={"70px"}
          color={theme === "dark" ? "white" : "brand.400"}
          borderColor={theme === "dark" ? "white" : "brand.400"}
          border={theme === "light" ? "2px" : "1px"}
          fontSize={"25px"}
          onChange={(e) => setPostTitle(e.target.value)}
          focusBorderColor={theme === "light" ? "brand.200" : "brand.100"}
        />
      </Box>
    </>
  );
};

export default PostTitle;

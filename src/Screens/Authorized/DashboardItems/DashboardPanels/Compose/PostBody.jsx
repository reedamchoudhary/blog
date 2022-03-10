import { Box, Textarea } from "@chakra-ui/react";
import React from "react";
import { useComposeContext } from "./Compose";
import TextEditor from "../../../../../components/TextEditor";
import "./Compose.css";

const PostBody = () => {
  const { postBody, setPostBody, theme } = useComposeContext();
  return (
    <>
      <Box className="post-body">
        <Textarea
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
        />
        {/* <Box
          h={"500px"}
          overflowY={"Scroll"}
          color={theme === "dark" ? "white" : "black"}
          borderColor={theme === "dark" ? "white" : "brand.400"}
          border={theme === "light" ? "2px" : "1px"}
          fontSize={"16px"}
          focusBorderColor={theme === "light" ? "brand.200" : "brand.100"}
        >
          <TextEditor />
        </Box> */}
      </Box>
    </>
  );
};

export default PostBody;

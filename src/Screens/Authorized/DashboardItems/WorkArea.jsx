import React from "react";
import Title from "./Title";
import Body from "./Body";
import { Flex } from "@chakra-ui/react";

const WorkArea = (props) => {
  const { isOpen, path } = props;
  return (
    <Flex
      flexDirection={"column"}
      className="work-area"
      width={"65%"}
      marginLeft={isOpen ? "200px" : ""}
      zIndex={"10"}
    >
      <Title />
      <Body path={path} />
    </Flex>
  );
};

export default WorkArea;

import React from "react";
import { Button } from "@chakra-ui/react";
import "./Components.css";

const PrimaryButton = (props) => {
  const { buttonText, buttonFunction, theme } = props;
  return (
    <>
      <Button
        className="primary-buttons"
        width={"200px"}
        borderRadius={"40px"}
        backgroundColor={theme === "light" ? "brand.200" : "brand.100"}
        color={theme === "light" ? "white" : ""}
        _hover={{ color: theme === "light" ? "white" : "black" }}
        onClick={buttonFunction}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default PrimaryButton;

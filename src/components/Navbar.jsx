import React from "react";
import { Flex, Text, Slide, Link } from "@chakra-ui/react";
import { ChevronLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
import * as allPaths from "../constants/pathContants";
import { useDashboard } from "../Screens/Authorized/Dashboard";

const Navbar = (props) => {
  const { isOpen, onToggle, setPath } = props;
  const { setActiveArea, theme } = useDashboard();

  const navItems = ["All Posts", "Drafts", "Ideas", "To Do List"];

  const findPath = (item) => {
    setActiveArea(item);
    if (item === "All Posts") setPath(allPaths.ALL_POSTS);
    else if (item === "Drafts") setPath(allPaths.DRAFTS);
    else if (item === "Ideas") setPath(allPaths.IDEAS);
    else if (item === "To Do List") setPath(allPaths.TODO_LIST);
  };
  const showNavList = navItems.map((item, index) => {
    return (
      <>
        <Link
          className="hover-pink link"
          py={"20px"}
          color={theme === "dark" ? "white" : "black"}
          _hover={{ color: theme === "light" ? "brand.200" : "" }}
          onClick={() => findPath(item)}
        >
          {item}
        </Link>
      </>
    );
  });

  return (
    <>
      <HamburgerIcon
        className={"hamburger-icon hover-pink"}
        boxSize={"7"}
        color={theme === "dark" ? "white" : "black"}
        _hover={{ color: theme === "light" ? "brand.200" : "" }}
        onClick={onToggle}
      />
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <Flex
          className="navbar"
          boxShadow={theme === "light" ? "3px 3px 15px 10px #F0F0F0" : ""}
          backgroundColor={theme === "light" ? "white" : ""}
        >
          <Flex flexDirection={"column"} className={"navbar-items"}>
            <ChevronLeftIcon
              className={"navbar-hide-arrow icon hover-pink"}
              boxSize={"7"}
              color={theme === "dark" ? "white" : "black"}
              _hover={{ color: theme === "light" ? "brand.200" : "" }}
              onClick={onToggle}
            />
            <Flex
              className={"compose-button"}
              borderColor={theme === "light" ? "brand.200" : ""}
              _hover={{
                backgroundColor: theme === "light" ? "brand.200" : "",
                color: theme === "light" ? "white" : "",
              }}
              onClick={() => setActiveArea("Compose")}
            >
              <Text
                className={"compose-text"}
                color={theme === "light" ? "brand.200" : ""}
                _hover={{ color: theme === "light" ? "white" : "" }}
              >
                Compose
              </Text>
            </Flex>
            <Flex flexDirection={"column"} justifyContent={"space-between"}>
              {showNavList}
            </Flex>
          </Flex>
        </Flex>
      </Slide>
    </>
  );
};

export default Navbar;

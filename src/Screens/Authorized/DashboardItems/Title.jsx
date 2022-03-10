import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import * as path from "../../../constants/pathContants";
import ProfileMenu from "../../../components/ProfileMenu";
import logoDark from "../../../assets/logo-dark.png";
import logoLight from "../../../assets/logo-light.png";
import ThemeSwitch from "./DashboardPanels/ThemeSwitch";
import { useDashboard } from "../Dashboard";

const Title = () => {
  const navigate = useNavigate();
  const { logout } = useUserAuth();
  const { theme } = useDashboard();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate(path.LOGIN);
    } catch (err) {}
  };
  return (
    <Flex className="title">
      {theme === "dark" ? (
        <Image src={logoDark} w={"150px"} h={"80px"} />
      ) : (
        <Image src={logoLight} w={"150px"} h={"80px"} />
      )}
      <ThemeSwitch />
      <Box margin={"10px"} position={"fixed"} top={"0px"} right={"20px"}>
        <ProfileMenu handleLogout={handleLogout} />
      </Box>
    </Flex>
  );
};

export default Title;

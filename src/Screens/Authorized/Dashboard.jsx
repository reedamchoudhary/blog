import React, { useState, createContext, useContext } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useUserAuth } from "../../context/UserAuthContext";
import * as allPaths from "../../constants/pathContants";
import { useNavigate } from "react-router-dom";
import "./authorized.css";
import Navbar from "../../components/Navbar";
import WorkArea from "./DashboardItems/WorkArea";

const DashboardContext = createContext();

const Dashboard = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [path, setPath] = useState("");
  const [activeArea, setActiveArea] = useState("");
  const [theme, setTheme] = useState("light");
  const { user } = useUserAuth();
  const navigate = useNavigate();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  if (!user) {
    navigate(allPaths.LOGIN);
  }

  return (
    <DashboardContext.Provider
      value={{ activeArea, setActiveArea, theme, toggleTheme }}
    >
      <Flex
        className="dashboard"
        backgroundColor={theme === "light" ? "white" : ""}
      >
        <Navbar isOpen={isOpen} setPath={setPath} onToggle={onToggle} />
        <WorkArea isOpen={isOpen} path={path} />
      </Flex>
    </DashboardContext.Provider>
  );
};

export default Dashboard;

export const useDashboard = () => {
  return useContext(DashboardContext);
};

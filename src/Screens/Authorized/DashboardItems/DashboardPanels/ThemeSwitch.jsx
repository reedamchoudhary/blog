import React from "react";
import { Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDashboard } from "../../Dashboard";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useDashboard();
  console.log("theme=", theme);
  return (
    <Box className={"theme-toggle"}>
      {theme === "light" ? (
        <MoonIcon
          color={"black"}
          _hover={{ color: "brand.200", cursor: "pointer" }}
          onClick={toggleTheme}
        />
      ) : (
        <SunIcon
          color={"white"}
          _hover={{ color: "brand.100", cursor: "pointer" }}
          onClick={toggleTheme}
        />
      )}
    </Box>
  );
};

export default ThemeSwitch;

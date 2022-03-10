import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Button,
} from "@chakra-ui/react";

const ProfileMenu = (props) => {
  const { handleLogout } = props;
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          borderRadius={"50%"}
          colorScheme="pink"
        ></MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem onClick={(e) => handleLogout(e)}>Logout </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default ProfileMenu;

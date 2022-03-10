import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Alert,
  InputGroup,
  InputRightElement,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import "./index.css";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import * as path from "../../constants/pathContants";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      navigate(path.DASHBOARD);
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          setError("Invalid Emai!l");
          break;
        case "auth.user-disabled":
          setError("Disabled user!");
          break;
        case "auth/user-not-found":
          setError("User not found!");
          break;
        case "auth/wrong-password":
          setError("Invalid password!");
          break;
        default:
          setError("Fill all the details!");
      }
    }
  };

  const handleGoogleLogin = async (event) => {
    event.preventDefault();

    try {
      await googleSignIn();
      navigate(path.DASHBOARD);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClick = () => setShow(!show);

  return (
    <Flex
      className={"login-page flex"}
      width={"100vw"}
      height={"100vh"}
      flexDirection={"column"}
    >
      <Box className={"login-box card"}>
        <Heading marginBottom={"10px"}>Login</Heading>
        {error && (
          <Alert status="error" marginBottom={"10px"}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Input
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Password"
            marginY={"20px"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement>
            {show ? (
              <ViewOffIcon
                position={"relative"}
                top="18px"
                cursor={"pointer"}
                onClick={handleClick}
              />
            ) : (
              <ViewIcon
                position={"relative"}
                top="18px"
                cursor={"pointer"}
                onClick={handleClick}
              />
            )}
          </InputRightElement>
        </InputGroup>
        <Button
          onClick={(e) => handleLogin(e)}
          width={"100%"}
          bg={"brand.200"}
          color={"white"}
        >
          Login
        </Button>
        <hr className="line" />
        <Box>
          <GoogleButton
            className="google-button"
            type="light"
            onClick={handleGoogleLogin}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;

"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import styled from "styled-components";
import { login } from "../utils/supabase/actions";
import { OAuthButtonGroup } from "../components/chakra/login/OAuthButtonGroup";

const Logo = styled.img`
  width: 50%;
  height: 8rem;
  object-fit: cover;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      await login(formData);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack>
        <Stack>
          <div className="flex justify-center">
            <Logo src="https://res.cloudinary.com/dhhamkkue/image/upload/v1713532456/1_lo3egx.png" />
          </div>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff416c, #ff4b2b)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  cursor: "crosshair",
                }}
              >
                Log in
              </span>{" "}
              to your account
            </Heading>
            <Text color="fg.muted">
              Don't have an account?{" "}
              <Link href="/signup" style={{ color: "#2b95d4" }}>
                Sign up
              </Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "6" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                style={{ backgroundColor: "#3182ce", color: "white" }}
                onClick={handleLogin}
                disabled={isLoading}
              >
                {" "}
                {isLoading ? (
                  <CircularProgress size="24px" color="white" />
                ) : (
                  "Sign in"
                )}{" "}
              </Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;

import { Flex, FormControl, FormLabel,  Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <form>
        <FormControl
          isRequired
          mt={2}
          borderRadius="15px"
          paddingLeft={4}
          paddingRight={4}
          pt={6}
        >
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder="Enter Email Address"
            borderRadius={"none"}
          />

          <FormLabel mt={8}>Password</FormLabel>
          <Input placeholder="Enter Password Here" borderRadius="none" />

          <Flex mt={4} pl={2} pr={2}>
            <Link to="/admin/login">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Login As Admin
              </Text>
            </Link>
            <Spacer />
            <Link to="/register">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Register As User
              </Text>
            </Link>
          </Flex>

          <Input
            type="Submit"
            value="LOGIN AS USER"
            fontWeight={"semibold"}
            borderRadius={"none"}
            mt={4}
            mb={6}
            backgroundColor="rgb(228, 37, 41)"
            color={"white"}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default LoginForm;

import { Flex, FormControl, FormLabel,  Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div>
      <form>
        <FormControl
          isRequired
          mt={2}
          borderRadius="15px"
          paddingLeft={4}
          paddingRight={4}
          pt={2}
        >

        <FormLabel>Your Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Name"
            borderRadius={"none"}
          />
          <FormLabel mt={4}>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email Address"
            borderRadius={"none"}
          />

          <FormLabel mt={4}>Password</FormLabel>
          <Input placeholder="Create Password Here" borderRadius="none" />

          <Flex mt={4} pl={2} pr={2}>
            <Link to="/login">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Login As User
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
            value="REGISTER AS USER"
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

export default RegisterForm;

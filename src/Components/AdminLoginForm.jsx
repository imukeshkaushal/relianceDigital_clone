import {

  FormControl,
  FormLabel,
  Text,
  Input,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AdminLoginForm = () => {
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
            placeholder="Enter Admin Email Address"
            borderRadius={"none"}
          />

          <FormLabel mt={8}>Password</FormLabel>
          <Input placeholder="Enter Password Here" borderRadius="none" />

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
            value="LOGIN AS ADMIN"
            fontWeight={"semibold"}
            borderRadius={"none"}
            mt={4}
            backgroundColor="rgb(228, 37, 41)"
            color={"white"}
            mb={6}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default AdminLoginForm;

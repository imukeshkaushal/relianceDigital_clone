import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Heading = ({ heading }) => {
  return (
    <Flex gap="2"padding={6}>
      <Center>
        <Text fontSize="xl" textAlign={"left"}>{heading}</Text>
        <Link to="/">
          <button
            style={{
              backgroundColor:"#003380",
              color:"white",
              padding:"6px",
              marginLeft:"5px"
            }}>View All
          </button>
        </Link>
      </Center>
    </Flex>
  );
};

export default Heading;

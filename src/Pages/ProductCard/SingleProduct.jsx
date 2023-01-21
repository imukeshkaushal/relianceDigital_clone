import React from "react";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { BiHeart } from "react-icons/bi";

function SingleProduct() {
  return (
    <>
      <Box w={"100%"}>
        <Flex h={"95vh"} border="2px solid red" py={2} pl={2} pr={2} gap="2px">
          <Box border={"1px solid black"} w="50%">
            <Box>
              <Text color={"red"} ml="95%" mb={"-25px"}>
                <BiHeart size={25} />
              </Text>
              <Image src="" w={"60%"} m="auto" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default SingleProduct;

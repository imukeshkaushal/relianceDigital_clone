import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsCartFill, BsFillFilePlusFill, BsFillMicFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { Search2Icon } from "@chakra-ui/icons";

import { FaShoppingCart } from "react-icons/fa";
import Dropdown from "./NavComponents/Dropdown";
import { Hamburger } from "./NavComponents/Hamburger";


export const Navbar = () => {
  return (
    <Box>
      <Box display={["none", "none", "none", "block"]}>
        <Box bgColor="#e42529" maxW={"full"}>
          <Flex flexDirection={"row-reverse"} p={2} pr={4}>
            <Flex
              fontWeight={"semibold"}
              color={"white"}
              gap="20px"
              fontSize={"15px"}
            >
              <Text>Find a Store</Text>
              <Text>|</Text>
              <Text>Buying Guide</Text>
              <Text>|</Text>
              <Text>Contact Us</Text>
            </Flex>
          </Flex>
        </Box>

        <Box bgColor="#e42529" zIndex={99}>
          <Flex
            gap="60px"
            alignItems={"center"}
            justifyContent="space-between"
            pl={"30px"}
            pr={"30px"}
          >
            <Image
              width={"150px"}
              height={"60px"}
              src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
              alt="logo"
            />
            <InputGroup width={"38%"}>
              <Input
                placeholder="Enter amount"
                variant={"none"}
                borderRadius="20px"
                paddingLeft={"20px"}
              />
              <InputRightElement
                children={<Search2Icon color="green.500" />}
                paddingRight={"20px"}
              />
            </InputGroup>
            <Flex
              gap={"30px"}
              color={"white"}
              fontSize={"15px"}
              fontWeight={"semibold"}
            >
              <Flex gap={"20px"} alignItems="center">
                <Text noOfLines={1}> Select Your Pin Code </Text>
                <Text>|</Text>
              </Flex>
              <Flex gap={"5px"} alignItems="center">
                <BsCartFill /> Cart
              </Flex>
              <Flex gap={"5px"} alignItems="center">
                <MdAccountCircle /> Login
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Dropdown/>
      </Box>

      <Box
        bgColor="#e42529"
        pl={4}
        pr={4}
        pt={3}
        pb={3}
        display={["block", "block", "block", "none"]}
      >
        <Flex
          alignItems={"center"}
          color="white"
          justifyContent={"space-between"}
        >
          <Flex gap={"20px"} alignItems="center" justifyContent={"center"}>
            <Hamburger/>
            <Image
              width={"120px"}
              height={"35px"}
              src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
              alt="logo"
            />
          </Flex>
          <Flex justifyContent="space-between" gap={"20px"}>
            <BsFillFilePlusFill size={"20px"} />
            <FaShoppingCart size={"20px"} />
          </Flex>
        </Flex>
        <InputGroup mt={2}>
          <InputLeftElement
            children={<Search2Icon size={"18px"} color={"gray"} />}
          />
          <Input
            placeholder="Search for Products, Brands"
            bgColor={"white"}
            borderRadius="20px"
            variant={"none"}
          />
          <InputRightElement
            children={<BsFillMicFill color="gray" size={"20px"} />}
          />
        </InputGroup>
      </Box>
    </Box>
  );
};

import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import "./dropdown.css";

let accessories = ["Tablet Accessorries","Mobile Accessories","Mobile Grips & Stands", "Car Mobile Holders", "Memory Cards", "Cables & Cords", "Chargers & Adapters"];
const Dropdown = () => {
  return (
    <div>
      <Box
        backgroundColor={"#003380"}
        color="white"
        p={2}
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "space-between",
        }}
        pl={[0, 0, 0, 4, 12]}
        pr={[0, 0, 0, 4, 12]}
        fontSize={["13px", "13px", "13px", "16px"]}
      >
      <Flex alignItems="center">
      <div class="dropdown">
      <button class="dropbtn" style={{fontSize : "14px"}}>
        MOBILE & TABLETS
      </button>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
            <Box style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb = {4}>
              <Box>
                <Text fontWeight={"semibold"} fontSize = {"16px"}>SmartPhones</Text>
                <Text pt={6} pb = {6} fontWeight = {"semibold"}>SMARTWATCHES</Text>
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Accessories</Text>

                {
                  accessories.map((el,index) => {
                    return (
                      <Text fontSize={"14px"} mt={2} key = {index}>{el}</Text>
                    )
                  })
                }
              </Box>
              <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Headphones & Headsets</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} pt={6} pb = {6}>Tablets & eReaders</Text>
              <Text fontSize={"14px"} mt={2}>Every Day use Tablets below 15000</Text>
              <Text fontSize={"14px"} mt={2}>Premium Tablets, above 15001</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} pt={6} pb = {6}>Power Banks</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>eSlates</Text>
            </Box>

            <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>AI Learning Robots</Text>
          </Box>

            </Box>
          </div>
        </div>
      </div>
    </div>
      <BiChevronDown />
    </Flex>

        <Flex alignItems="center">
          <div class="dropdown">
          <button class="dropbtn" style={{fontSize : "14px"}}>
            TELEVISION
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
              <Box>
              <Text>Headphones & Headsets</Text>
              <Text>Tablets & eReaders</Text>
              <Text>Every Day use Tablets below 15000</Text>
              <Text>Premium Tablets, above 15001</Text>
              <Text>Power Banks</Text>
              <Text>eSlates</Text>
            </Box>
              </div>
            </div>
          </div>
        </div>
          <BiChevronDown />
        </Flex>

        <Flex alignItems="center">
          <div class="dropdown">
          <button class="dropbtn">
            Audio
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <Box width={"100%"} border={"1px solid black"}></Box>
              </div>
            </div>
          </div>
        </div>
          <BiChevronDown />
        </Flex>

        <Flex alignItems="center">
          <Text>Home Appliances</Text>
          <BiChevronDown />
        </Flex>
        <Flex alignItems="center">
          <Text>Computer</Text>
          <BiChevronDown />
        </Flex>
        <Flex alignItems="center">
          <Text>Camera</Text>
          <BiChevronDown />
        </Flex>
        <Flex alignItems="center">
          <Text>Kitchen Appliances</Text>
          <BiChevronDown />
        </Flex>
        <Flex alignItems="center">
          <Text>Personal Care</Text>
          <BiChevronDown />
        </Flex>
        <Flex alignItems="center">
          <Text>Admin</Text>
          <BiChevronDown />
        </Flex>
      </Box>
    </div>
  );
};

export default Dropdown;

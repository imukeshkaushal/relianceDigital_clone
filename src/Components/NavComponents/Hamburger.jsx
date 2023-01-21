
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { BsCameraFill, BsFillTelephoneFill } from "react-icons/bs"
import { FaBath, FaHeadphones, FaInfoCircle, FaMobileAlt, FaShoppingCart, FaSitemap, FaUsb } from "react-icons/fa"
import { GiHamburgerMenu, GiPlug } from "react-icons/gi"
import {GoPlus} from "react-icons/go"
import { MdComputer, MdLocationOn, MdOutlineSms } from "react-icons/md"
import {RiComputerLine} from "react-icons/ri"
import {ImSpoonKnife} from "react-icons/im"
import { BiQrScan } from "react-icons/bi"

export const Hamburger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <GiHamburgerMenu ref={btnRef} colorScheme='teal' onClick={onOpen}/>
         
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton  color={"white"}/>
            <DrawerHeader fontSize={"16px"} color="white" fontWeight={"semibold"} bgColor={"#e42529"}>Login / Register</DrawerHeader>
  
            <DrawerBody p={0} fontSize = {"15px"}>
              <Box bgColor = "gray.100" p={2}>Categories</Box>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaMobileAlt/>
                    <Text>Mobiles & Tablets</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <RiComputerLine/>
                    <Text>Television</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaHeadphones/>
                    <Text>Audio</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <GiPlug/>
                    <Text>Home Appliances</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <MdComputer/>
                    <Text>Computer</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <BsCameraFill/>
                    <Text>Cameras</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <ImSpoonKnife/>
                    <Text>Kitchen Appliances</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaBath/>
                    <Text>Personal Care</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaUsb/>
                    <Text>Accessories</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              <Box bgColor = "gray.100" p={2}>Help Section</Box>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaShoppingCart/>
                    <Text>Cart</Text>
                </Flex>
                
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <MdLocationOn/>
                    <Text>Find a Store</Text>
                </Flex>
             
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <BsFillTelephoneFill/>
                    <Text>Contact Us</Text>
                </Flex>
                
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <BiQrScan/>
                    <Text>Scanner</Text>
                </Flex>
                
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaInfoCircle/>
                    <Text>Buying Guide</Text>
                </Flex>
              
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <FaSitemap/>
                    <Text>Site Info</Text>
                </Flex>
                <GoPlus/>
              </Flex>

              <Flex alignItems={"center"} justifyContent="space-between" pl={3} pr = {3} pt = {2} pb={2} borderTop="1px solid #cecece" borderBottom="1px solid #cecece">
                <Flex alignItems={"center"} gap="10px">
                    <MdOutlineSms/>
                    <Text>Policies</Text>
                </Flex>
                <GoPlus/>
              </Flex>
              
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }
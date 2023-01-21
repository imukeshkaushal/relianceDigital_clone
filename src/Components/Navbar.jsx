import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,

  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import { SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import logo from "../assets/Digit.png";
import {HiMenu, HiShoppingCart } from "react-icons/hi";
import "../Style/Navbar.css"
import {FaUser,FaMobileAlt,FaPlug,FaCamera,FaBath,FaUsb,FaShoppingCart,FaPhone,FaInfoCircle,FaSitemap} from "react-icons/fa"
import {RxChevronDown} from "react-icons/rx"
import {IoIosLaptop,IoIosHeadset} from "react-icons/io";
import {MdComputer,MdLocationOn} from "react-icons/md";
import {ImSpoonKnife} from "react-icons/im";
import {BsGrid} from "react-icons/bs";
import {AiFillMessage} from "react-icons/ai"
import ProductCards from '../Pages/ProductCard/ProductCards';

import axios from 'axios';
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

} from "@chakra-ui/react";
import React from "react";
import { BsCartFill, BsFillFilePlusFill, BsFillMicFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { Search2Icon } from "@chakra-ui/icons";


import { FaShoppingCart } from "react-icons/fa";
import Dropdown from "./NavComponents/Dropdown";
import { Hamburger } from "./NavComponents/Hamburger";
import { Link } from "react-router-dom";


  const getCategory=async(el)=>{
    // let res = await axios.get(`https://rus-digital-televisions.onrender.com/${el}`)
    // let d = res.data;
    let data=[] || "allproduct";
    data.push(el)
    localStorage.setItem('items', JSON.stringify(data));
   window.location.reload(true)
  }


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
              <Link to= "/cart">
              <Flex gap={"5px"} alignItems="center">
              <BsCartFill /> Cart
            </Flex>
              </Link>
              <Flex gap={"5px"} alignItems="center">
                <MdAccountCircle /> Login
              </Flex>
            </Flex>

         </Box>
         </HStack>
        </Flex>
        {/* {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        >{<HamburgerIcon />}</Button>
      ))} */}
       {/* {isOpen ? (
       <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
             <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        ) : null} */}
         
       
      </Box>
<Box backgroundColor={"#003380"} w={"100%"}  position={"fixed"} zIndex={1} id="main_nav">
<Box id="menu_nav" style={{ borderTop: "0px solid black" }} borderBottom='0px solid gainsboro'>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-evenly"
            width="100%"
            margin="auto"
            id="hover-black"
          >
            <div id="menu-dropdown">
              
              <Link to='y'><div id="menu-title">
              <Flex>
                <Text> MOBILES & TABLETS</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
                </div></Link>
              
            
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                      onClick={()=>getCategory("mobilesandtablets")}
                    >
                      Smartphones
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to='' ><h2>SMARTWATCHES</h2></Link>
                      <Link to=''><h2>Accessories</h2></Link>
                      <Link to='/ProductCards' onClick={(e)=>getCategory("mobilesandtablets")} ><p>Tablet Accessories</p></Link>
                      <Link to='' onClick={(e)=>getCategory("mobilesandtablets")}><p>Mobile Accessories</p></Link>
                      <Link to='' onClick={(e)=>getCategory("mobilesandtablets")}><p>Mobile Grips & Stands</p></Link>
                      <Link to='' onClick={(e)=>getCategory("mobilesandtablets")}><p>Car Mobile Holders</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                      onClick={(e)=>getCategory("mobilesandtablets")}
                      >
                      Headphone & Headsets
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''> <h2>Tablets & eReaders</h2></Link>
                      <Link to=''> <h2>Every Day use Tablets below 15000</h2></Link>
                      <Link to=''> <p>Premium Tablets, Above 15001</p></Link>
                      <Link to=''> <p>Luxury Holiday Gifts</p></Link>
                      <Link to=''> <p> Last Minute Gift Ideas</p></Link>
                      <Link to=''> <p>Gifts For You</p></Link>
                    </div>
                  </div>
                  <Image src="https://www.yormarket.com/wp-content/uploads/2019/07/IPhone-X-PNG-Picture.png" w={300} h={300}/>
                </Box>
               
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to=''> <div id="menu-title">
              <Flex>
                <Text> TELEVISIONS</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
              </div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                      onClick={(e)=>getCategory("televisions")}
                    >
                     Television
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}>
                      <Link to=''    onClick={(e)=>getCategory("televisions")}><p>Smart TVs</p></Link>
                      <Link to=''    onClick={(e)=>getCategory("televisions")}><p>32 Inch TVs</p></Link>
                      <Link to=''    onClick={(e)=>getCategory("televisions")}><p>43 Inch TVs</p></Link>
                      <Link to=''    onClick={(e)=>getCategory("televisions")}><p>55 Inch TVs</p></Link>
                      <Link to=''    onClick={(e)=>getCategory("televisions")}><p>Android TVs</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}>
                      Gaming
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''> <h2>Gaming Consoles</h2></Link>
                      <Link to=''> <h2>Gaming Accessories</h2></Link>
                      <Link to=''> <p>Gaming Titles</p></Link>
                      <Link to=''> <p>Luxury Holiday Gifts</p></Link>
                      <Link to=''>  <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}>
                      Gaming
                    </p></Link>
                      <Link to=''> <p style={{
                        paddingTop: "2px",
                        textAlign: "left",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}>Streaming Devices</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}>
                     Reconnect Disney | Marvel Audio Collection
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}>
                      <Link to=''    onClick={(e)=>getCategory("televisions")}> <h2>TV & Audio Accessories</h2></Link>
                      <Link to=''> <h2>Virtual Reality Accessories</h2></Link>
                      <Link to=''> <p>Stabilizers & Surge Headsets</p></Link>
                    </div>
                  </div>
                  <Image src="https://th.bing.com/th/id/R.782defe3901f305f44cd27b90e09b81f?rik=RJa7LfS8sC16vQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flcd-png-monitor-png-image-1760.png&ehk=OR0t7%2b%2fhLbhbXFh4wswzDMK%2buj3m29lmILe3wakA4N8%3d&risl=&pid=ImgRaw&r=0" h={300} w={400}></Image>
                </Box>
               
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to=""><div id="menu-title">
              <Flex>
                <Text> AUDIO</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
                </div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                      onClick={(e)=>getCategory("headphones")}
                      >
                     HeadPhones & Headsets
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to="" onClick={(e)=>getCategory("headphones")}><p>True Wireless</p></Link>
                      <Link to="" onClick={(e)=>getCategory("headphones")}><p>Bluetooth Neckbands</p></Link>
                      <Link to="" onClick={(e)=>getCategory("headphones")}><p>Wired Earphones</p></Link>
                      <Link to="" onClick={(e)=>getCategory("headphones")}><p>On Ear Headphones</p></Link>
                      <Link to="" onClick={(e)=>getCategory("headphones")}><p>Noise Cancelling Headphones</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                     
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                      onClick={(e)=>getCategory("headphones")}
                    >
                     Bluetooth & WiFi Speakers
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to="" onClick={(e)=>getCategory("headphones")}><p>Bluetooth Speakers</p></Link>
                      <Link to="" onClick={(e)=>getCategory("headphones")}><p>Smart Speakers</p></Link>      
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}

                    >
                     TV Speakers & Soundbars
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=""><p>Soundbars</p></Link>
                      <Link to=""><p>Home Theaters Systems</p></Link>
                      <Link to=""><p>Party speakers</p></Link>
                      <Link to=""><p>Multimedia</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Musical Instruments
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p>Guitars and Ukuleles</p>
                      <p>Microphones</p>
                      <p>Musical Keyboards</p>
                    </div>
                  </div>
                   </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to=''><div id="menu-title">
              <Flex>
                <Text> HOME APPLIANCES</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
                </div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                      onClick={(e)=>getCategory("homeappliances")}
                      
                    >
                     Air Conditioners
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''  onClick={(e)=>getCategory("homeappliances")}><p>Split Air Conditioners</p></Link>
                      <Link to=''  onClick={(e)=>getCategory("homeappliances")}><p>Window Air Conditioners</p></Link>
                      <Link to=''><p>Smart Air Conditioners</p></Link>
                      <Link to=''><p>1 ton Air Conditioners</p></Link>
                      <Link to=''><p>1.5 ton Air Conditioners</p></Link>
                      <Link to=''><p>5 star Air Conditioners</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                     
                    >
                     Washing Machines
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''> <p>Fully Automatic Front Load</p></Link>
                      <Link to=''> <p>Fully Automatic Top Load</p></Link>
                      <Link to=''> <p>Semi-Automatic Top Load</p></Link>
                  
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                     Vacccum Cleaners
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Robotic Vaccum Cleaners</p></Link>
                     
                    </div>
                  </div>
                  <Image h={200} w={300} src="https://purepng.com/public/uploads/medium/purepng.com-air-conditionerair-conditionerairconditioneracacair-conair-conditioning-1701528308946nwpd1.png"></Image>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to=''><div id="menu-title">
              <Flex>
                <Text> COMPUTERS</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
               </div></Link>
               <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                        onClick={(e)=>getCategory("computers")}
                    >
                     Laptops
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''  onClick={(e)=>getCategory("computers")}><p>Basic use laptops</p></Link>
                      <Link to=''  onClick={(e)=>getCategory("computers")}><p>Student Laptops</p></Link>
                      <Link to=''><p>Thin and light Laptops</p></Link>
                      <Link to=''><p>Multi-Tasking Laptops</p></Link>
                      <Link to=''><p>Gaming Laptops</p></Link>
                      <Link to=''><p>Content creator Laptops</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                     Bluetooth & WiFi Speakers
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''> <p>Internet Connectivity Devices</p></Link>
                      <Link to=''> <p>Routers</p></Link>
                      <Link to=''> <p>WiFi Range Extenders</p></Link>
                      <Link to=''> <p>Wireless USB Adapters</p></Link>
                    </div>
                    <div style={{ fontFamily: "sans-serif" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                    Printers & Inks
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Printers</p></Link>
                      <Link to=''><p>Toners & Ink Cartridges</p></Link>
                    </div>
                  </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                        
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                    Computer Accessories
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Upto 72% Off,Only on Reliancedigital.in</p></Link>
                      <Link to=''><p>Computer Networking Cable</p></Link>
                      <Link to=''><p>Laptop Chargers & Adaptor</p></Link>
                      <Link to=''><p>Laptop Batteries</p></Link>
                      <Link to=''><p>Hubs & Docks</p></Link>
                      <Link to=''><p>Laptop Cooling Pad</p></Link>
                      <Link to=''><p>Laptop Screen Protectors</p></Link>
                      <Link to=''><p>Laptops Tables & Stands</p></Link>
                      <Link to=''><p>Mouse Pads</p></Link>
                    </div>
                  
                  
                  </div>
                  <Image src="https://pluspng.com/img-png/laptop-png-laptop-notebook-png-image-1358.png" h={200} w={200} ml={-20} mt={20}></Image>
                </Box>
                
              </div>
              
            </div>

            <div id="menu-dropdown">
              <Link to=''><div id="menu-title">
              <Flex>
                <Text>CAMERAS</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
                </div></Link>
                <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                      onClick={(e)=>getCategory("cameras")}
                    >
                    DSLR Cameras
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to='' onClick={(e)=>getCategory("cameras")}><p>Mirrorless Cameras</p></Link>
                      <Link to='' onClick={(e)=>getCategory("cameras")}><p>Point & Shoot Cameras</p></Link>
                      <Link to=''><p>ProSumers Cameras</p></Link>
                      <Link to=''><p>Action Cameras</p></Link>
                      <Link to=''><p>Photo Storage Device</p></Link>                     
                    </div>
                  </div>
                  <Image src="https://www.pngall.com/wp-content/uploads/2016/05/Photo-Camera-Free-PNG-Image.png" h={200} w={300}></Image>
                </Box>
              </div>
            </div>
            <div id="menu-dropdown">
              <Link to=''><div id="menu-title">
              <Flex>
                <Text>KITCHEN APPLIANCES</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
                </div></Link>
                <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                    Microwave Ovens
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Water Purifiers</p></Link>
                      <Link to=''><p>Fruits and Vegetables Cleaner</p></Link>
                      <Link to=''><p>Oven Toaster Grillers(OTG)</p></Link>
                      <Link to=''><p>Cookwares</p></Link>
                      <Link to=''><p>Juicers Mixer Grinders</p></Link>                     
                    </div>
                  </div>
                  <Image h={200} w={300} src="https://pngimg.com/uploads/microwave/microwave_PNG15711.png"></Image>
                </Box>
              </div>

            </div>
            <div id="menu-dropdown">
              <Link to=""><div id="menu-title">
              <Flex>
                <Text>PERSONAL CARE</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
                </div></Link>
                <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                    Shavers & Trimmers
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Epilators</p></Link>
                      <Link to=''><p>Hair Dryers & Stylers</p></Link>
                      <Link to=''><p>Weighting Scales</p></Link>
                      <Link to=''><p>Irons</p></Link>
                                          
                    </div>
                  </div>
                </Box>
              </div>


            </div>
            <div id="menu-dropdown">
              <Link to=''><div id="menu-title">
              <Flex>
                <Text>ACCESSORIES</Text>
                <Text m={1}><RxChevronDown/></Text>
                </Flex>
                </div></Link>
                <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "10px",
                        textAlign: "left",
                       
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                    Bags,Cases & Sleeves
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Smart Devices</p></Link>
                      <Link to=''><p>Smart Plugs</p></Link>
                      <Link to=''><p>Smart Cameras</p></Link>
                      <Link to=''><p>Smart Lights</p></Link>
                      <Link to=''><p>Smart Speakers</p></Link>
                      <Link to=''><p>Smart Tracking Devices</p></Link>
                      <Link to=''><p>Batteries</p></Link>                  
                    </div>
                  </div>
                  
                </Box>
              </div>
            </div>
            <div>
              <Link to=''><div id="menu-title">ADMIN</div></Link>
            </div>
          </Box>

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

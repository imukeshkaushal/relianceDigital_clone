import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  useColorModeValue,
  Image,
  InputRightElement,
  InputGroup,
  Input,
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

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
     <Box as="header"  bg='#e42529' w='100%' h='30px'   color='white'>
            <Flex direction="row-reverse">
            <Box >
            <Text marginRight='30px' fontSize="16px" fontWeight="600">Find a store | Buying Guides | Contact Us</Text>   
            </Box>
            </Flex>
        </Box>
      <Box bg={useColorModeValue('#e42529', '#e42529')} px={4} position={"fixed"} w={"100%"}>
        <Flex  className="input">
        {/* {sizes.map((size) => (
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={() => handleClick(size)}
          />
          ))} */}
          <HStack spacing={8} alignItems={'center'} border={"0px solid yellow"} >
            <Image src={logo} w={67} h={63} className="logo"/>
          </HStack>
          <HStack textAlign={"center"}>
          <Box border={"0px solid green"} marginRight={60} >
            <Flex className="in" >
                <InputGroup className='group' >
            <Input  bg="white" borderRadius="50px" placeholder="Find Your Favourite Products"></Input>
            <InputRightElement children={<SearchIcon color='grey' />} />
                </InputGroup>
            </Flex>
         </Box>
         <Box mt={8}>
            <Flex color={"white"} alignItems={'center'} margin="auto">
            <Text fontSize="16px" fontWeight="600" mr={3}>Select your PIN Code</Text> |
            <Text ml={3}><HiShoppingCart/> </Text>
            <Link to="/cart"><Text fontSize="16px" fontWeight="600" mr={3} ml={1}>Cart</Text></Link> |
            <Text ml={3}><FaUser/> </Text>
            <Link to="/register" ml={3}>
            Login
            {/* {loginstate.isLogin ? (<Text fontSize="16px" fontWeight="600" mr={3} ml={3}>Hi, {info.firstName}</Text>):(<Text fontSize="16px" fontWeight="600" mr={3} ml={3}>Login</Text>)} */}
            </Link>
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
<Box backgroundColor={"#003380"} w={"100%"}  position={"fixed"} id="main_nav">
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
                      <Link to=''><h2>SMARTWATCHES</h2></Link>
                      <Link to=''><h2>Accessories</h2></Link>
                      <Link to=''><p>Tablet Accessories</p></Link>
                      <Link to=''><p>Mobile Accessories</p></Link>
                      <Link to=''><p>Mobile Grips & Stands</p></Link>
                      <Link to=''><p>Car Mobile Holders</p></Link>
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
                      <Link to=''><p>Smart TVs</p></Link>
                      <Link to=''><p>32 Inch TVs</p></Link>
                      <Link to=''><p>43 Inch TVs</p></Link>
                      <Link to=''><p>55 Inch TVs</p></Link>
                      <Link to=''><p>Android TVs</p></Link>
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
                      <Link to=''> <h2>TV & Audio Accessories</h2></Link>
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
                      }}>
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
                      <Link to=""><p>True Wireless</p></Link>
                      <Link to=""><p>Bluetooth Neckbands</p></Link>
                      <Link to=""><p>Wired Earphones</p></Link>
                      <Link to=""><p>On Ear Headphones</p></Link>
                      <Link to=""><p>Noise Cancelling Headphones</p></Link>
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
                      <Link to=""><p>Bluetooth Speakers</p></Link>
                      <Link to=""><p>Smart Speakers</p></Link>      
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
                      <Link to=''><p>Split Air Conditioners</p></Link>
                      <Link to=''><p>Window Air Conditioners</p></Link>
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
                      <Link to=''><p>Basic use laptops</p></Link>
                      <Link to=''><p>Student Laptops</p></Link>
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
                      <Link to=''><p>Mirrorless Cameras</p></Link>
                      <Link to=''><p>Point & Shoot Cameras</p></Link>
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
        </Box>
</Box>
<div id="mobile_bar" style={{position : "fixed",color : "white", fontWeight:"bolder",
width : "5%",marginLeft:"5px", top:"0", zIndex: "100", padding:"3px",
marginBottom: "300px",marginTop:"68px"}}>
        <div style={{ display: "flex",border:"0px solid blue" }}>
          <div style={{ marginLeft: "30px" }}>
            <HiMenu  border="0px solid yellow" onClick={onOpen} size="2.8em"/>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              // finalFocusRef={btnRef}
              height="100vh"
              size="md"
               
            >
              <DrawerOverlay />
              <DrawerContent >
                {/* <DrawerCloseButton /> */}
                
                  <DrawerHeader onClick = {onClose} display="flex" >
                    {/* <Text > {isAuth ? "Hii " + username : "Account"}</Text> */}
                    <Box  backgroundColor={"#e42529"} colorScheme="none" w="100%" p={3}>
                      <Flex color={"white"} fontSize={20}>
                 <Text mt={4}><FaUser/> </Text>
               <Link to="" m={3}>Login</Link></Flex></Box>
                 
                </DrawerHeader>  
                <DrawerBody>
                  <Box display="flex" flexDirection="column" gap="20px" fontSize={20}>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                      <Flex>
                      <FaMobileAlt p={5} />
                      <Text ml={5}>Mobiles and Tablets</Text>
                      </Flex>
                      </Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                      <Flex>
                        <IoIosLaptop/>
                        <Text ml={5}>Televisions</Text>
                      </Flex>
                      </Link>
                      <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <IoIosHeadset/>
                        <Text ml={5}>Audio</Text>
                      </Flex>
                      </Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}> <Flex>
                        <FaPlug/>
                        <Text ml={5}>Home Appliances</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <MdComputer/>
                        <Text ml={5}>Computers</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <FaCamera/>
                        <Text ml={5}>Cameras</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <ImSpoonKnife/>
                        <Text ml={5}>Kitchen Appliances</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <FaBath/>
                        <Text ml={5}>Personal Care</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <FaUsb/>
                        <Text ml={5}>Accessories</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Link to="" onClick={onClose}>Admin</Link>
                   
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <FaShoppingCart/>
                        <Text ml={5}>Cart</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <MdLocationOn/>
                        <Text ml={5}>Find a Store</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <FaPhone/>
                        <Text ml={5}>Contact Us</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <BsGrid/>
                        <Text ml={5}>Scanner</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <FaInfoCircle/>
                        <Text ml={5}>Buying Guides</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <FaSitemap/>
                        <Text ml={5}>Site Info</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                    <Flex  justifyContent={"space-between"}>
                    <Link to="" onClick={onClose}>
                    <Flex>
                        <AiFillMessage/>
                        <Text ml={5}>Policies</Text>
                      </Flex></Link>
                    <SmallAddIcon/>
                    </Flex>
                  </Box>
                </DrawerBody>

              </DrawerContent>
            </Drawer>
          </div>

       
        </div>

        {/* <div>
          <Link to="/">
            <img style={{ width: "90px", height: "25px" }} src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png" alt="logo" />
          </Link>
        </div> */}

        {/* <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Link to="/login">
            <VscAccount size="1.6em" />
          </Link>
          <div class="dropdown" style={{ paddingRight: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <Link to="/cart">
                  <FaShoppingCart size="1.6em" />
                  <p className="cartValue">{cartItems.length}</p>
                </Link>

              </div>
            </div>
          </div>
        </div> */}

      </div>
    </>
  );
}
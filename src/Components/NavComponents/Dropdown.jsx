import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./dropdown.css";

let accessories = ["Tablet Accessorries","Mobile Accessories", "Memory Cards", "Cables & Cords", "Chargers & Adapters"];
const Dropdown = () => {
  return (
    <div>
      <Box
        backgroundColor={"rgb(37,47,100)"}
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
      <button class="dropbtn" style={{fontSize : "13px"}}>
        MOBILE & TABLETS
      </button>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
            <Box style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} >
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
              
            </Box>

            <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>AI Learning Robots</Text>
          </Box>

          <Box>
              <Image mb={-2} ml={14} width = "95%" src = "https://i.ibb.co/8D0JyY3/tablet-nav1.jpg" alt = "image"/>
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
          <button class="dropbtn" style={{fontSize : "13px"}}>
            TELEVISION
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
              <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
                  <Box>
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Televisions</Text>
                  <Text fontSize={"14px"} mt={3}>Smart TV's</Text>
                  <Text fontSize={"14px"} mt={3}>32 Inch Tv's</Text>
                  <Text fontSize={"14px"} mt={3}>43 Inc TV's</Text>
                  <Text fontSize={"14px"} mt={3}>55 Inch TV's</Text>
                  <Text fontSize={"14px"} mt={3}>Android TV's</Text>
                  </Box>

                  <Box>
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Gaming</Text>
                  <Text fontSize={"14px"} mt={3}>Gaming Consoles</Text>
                  <Text fontSize={"14px"} mt={3}>Gaming Accessories</Text>
                  <Text fontSize={"14px"} mt={3}>Gaming Titles</Text>
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Projectors</Text>
                  <Text fontSize={"14px"} mt={3}>Streming Devices</Text>
                  </Box>

                  <Box>
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Reconnect Disney | Marvel Audio Collections</Text>
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>TV & Audio Accessiories</Text>
                  <Text fontSize={"14px"} mt={3}>Vertual Reality Headsets</Text>
                  <Text fontSize={"14px"} mt={3}>Stablizers & Surge Protections</Text>
                
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
        <button class="dropbtn" style={{fontSize : "13px"}}>
          AUDIO
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
            <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
                <Box>
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Headphones & Headsets</Text>
                <Text fontSize={"14px"} mt={3}>True Wireless</Text>
                <Text fontSize={"14px"} mt={3}>Bluetooth Nechbands</Text>
                <Text fontSize={"14px"} mt={3}>Wired Earphones</Text>
                <Text fontSize={"14px"} mt={3}>On Ear Headphones</Text>
                <Text fontSize={"14px"} mt={3}>Hoise Cancellling Headphones</Text>
                </Box>

                <Box>
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Bluetooth & WiFi Speakers</Text>
                <Text fontSize={"14px"} mt={3}>Blueetooth Speakers</Text>
                <Text fontSize={"14px"} mt={3}>Smart Speakers</Text>
                <Text fontSize={"14px"} mt={3}>Gaming Titles</Text>
              
                </Box>

                <Box>
                <Text fontWeight={"semibold"} fontSize = {"16px"}>TV Speakers & Soundbars</Text>
                <Text fontSize={"14px"} mt={3}>Soundbars</Text>
                <Text fontSize={"14px"} mt={3}>Home Theatre System</Text>
                <Text fontSize={"14px"} mt={3}>Party Speakers</Text>
                <Text fontSize={"14px"} mt={3}>Multimedia</Text>
                </Box>

                <Box>
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Musical Insturments</Text>
                <Text fontSize={"14px"} mt={3}>Guitars and Ukuleses</Text>
                <Text fontSize={"14px"} mt={3}>Microphones</Text>
                <Text fontSize={"14px"} mt={3}>Musical Keyboards</Text>
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
      <button class="dropbtn" style={{fontSize : "13px"}}>
        HOME APPLIANCES
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
          <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
              <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Air conditioners</Text>
              <Text fontSize={"14px"} mt={3}>Split Air Conditions</Text>
              <Text fontSize={"14px"} mt={3}>Window Air Conditions</Text>
              <Text fontSize={"14px"} mt={3}>Smart Air Conditions</Text>
              <Text fontSize={"14px"} mt={3}>Energy Efficient Air Conditions</Text>
              <Text fontSize={"14px"} mt={3}>1 ton Air Conditions</Text>
              <Text fontSize={"14px"} mt={3}>1.5 ton Air Conditions</Text>
              <Text fontSize={"14px"} mt={3}>5 ton Air Conditions</Text>
              <Text fontWeight={"semibold"} mt = {4} fontSize = {"16px"}>Air Cooler</Text>
              <Text fontWeight={"semibold"} mt = {4} fontSize = {"16px"}>Air Purifier</Text>
              </Box>

              <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Washing Machines</Text>
              <Text fontSize={"14px"} mt={3}>Fully Automatic Front Load</Text>
              <Text fontSize={"14px"} mt={3}>Fully Automatic Top Load</Text>
              <Text fontSize={"14px"} mt={3}>Semi-Automatic Top Load</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Refrigerator</Text>
              <Text fontSize={"14px"} mt={3}>Single Door</Text>
              <Text fontSize={"14px"} mt={3}>Double Door</Text>
              <Text fontSize={"14px"} mt={3}>Side by Side Refrigerator</Text>
              <Text fontSize={"14px"} mt={3}>Convertible</Text>
              </Box>

              <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"} >Vacuum Cleaners</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Robotic Vacuum Cleaners</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Dishwashers</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>FAns</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Cloth Dryers</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Geysers</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Room Heater</Text>

            
              </Box>

        </Box>
          </div>
        </div>
      </div>
    </div>
      <BiChevronDown />
    </Flex>
        

        <Flex alignItems="center">
        <button class="dropbtn" style={{fontSize : "13px"}}>
        COMPUTERS
    
      </button>
    
        </Flex>
        <Flex alignItems="center">
        <div class="dropdown">
        <button class="dropbtn" style={{fontSize : "13px"}}>
          CAMERA
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
            <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
                <Box>
                <Text fontWeight={"semibold"} fontSize = {"16px"} >DSLR Cameras</Text>
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Mirroless Cameras Cameras</Text>
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Point & Shoot Cameras</Text>               
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>ProSumer Cameras</Text>
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Action Cameras</Text>                
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Photo Storage Devices</Text>
                <Text fontSize={"14px"} mt={3}>Memory Cards</Text>
                <Text fontSize={"14px"} mt={3}>Pen Drives</Text>

                </Box>

                <Box>
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Binoculars</Text>
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Camera Lens</Text>
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Digital Camera Accessories</Text>                
                
                <Text fontSize={"14px"} mt={3}>Camera Batteries & Chargers</Text>
                <Text fontSize={"14px"} mt={3}>Camera Bags & Cases</Text>
                <Text fontSize={"14px"} mt={3}>Tripods & Monopods</Text>
                <Text fontSize={"14px"} mt={3}>Action Camera Accessories</Text>
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
      <button class="dropbtn" style={{fontSize : "13px"}}>
        KITCHENS & APPLIANCES
    
      </button>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
          <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
              <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Microwave Ovens</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Microwave Ovens</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Water Purifiers</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Fruit & Vagitable Cleaners</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Oven Toaster Grillers (OTG)</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Cookwares</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Juicers</Text>
              <Text fontSize={"14px"} mt={3}>Juicers</Text>
              <Text fontSize={"14px"} mt={3}>Hand Mixers</Text>
              <Text fontSize={"14px"} mt={3}>Mixer Grinder</Text>
              <Text fontSize={"14px"} mt={3}>Chopper & Slicer</Text>
             
              </Box>

              <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Inducution Cooker</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Food Proccessors</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Blenders</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Kitchen Hobs & Gas Stoves</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Kitchen Chymnis</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Rice Cookers</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Sandwitch Maker</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Popup Toaster</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Coffee</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Coffee Makers & Grinder</Text>
            
              </Box>

              <Box>
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Reconnect Disney Marvel Kitchen Collection</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Air Fryers</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Electric Cattles</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Water Dispensers</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Wet Grinder</Text>
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Flour Mills</Text>
           
            
              </Box>

        
        </Box>
          </div>
        </div>
      </div>
    </div>
      <BiChevronDown />
    </Flex>

        <Flex alignItems="center">
        <button class="dropbtn" style={{fontSize : "13px"}}>
            PERSONAL CARE
    
      </button>
        
        </Flex>
        <Flex alignItems="center">
        <Link to="/admin/login">
          <button class="dropbtn" style={{fontSize : "13px"}}>
            ADMIN
          </button>
        </Link>
         
        </Flex>
      </Box>
    </div>
  );
};

export default Dropdown;

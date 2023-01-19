import { Box,Card, CardHeader, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";
import 'react-slideshow-image/dist/styles.css';
import  {AppleWatch, Card1, Card2, Headphones,Explore1, Laptops, Laptops2, Phones, Refrigerators, TV}  from "./Data";
import Refri from "./Refrigirator";
import Laptop from "./Laptop";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
import Slider3 from "./Slider3";
import Laptop2 from "./Laptop2";
import SliderFormat from "./SliderFormat";
import Explore from "./Explore";

const Home = () => {
  return (
    <div >
     
      {/* -----------------------------------slider1---------------------------- */}
     
      <Box mt={102}>
        <Carousel />
      </Box>

      {/* --------------------------Home Appliances Fest------------------------- */}
      
      <Box w={"95%"} margin={"auto"} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">  
          <Refri type={Refrigerators} heading="Home Appliances Fest" />   
      </Box>
      
      {/* --------------------------------Refrigirator--------------------------- */}
      
      <Box mt={50} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" w={"95%"} margin={"auto"}>
         <Laptop type={Laptops} heading="HP Special - Laptops and Peripherals"/>
      </Box>
     
      {/*------------------------------Home Appliances Card1-----------------------*/}
     
      <Box  boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HomeCard1 type={Card1} heading="Home Appliances Fest"/>
      </Box>
      
      {/*------------------------------Home Appliances Card2-----------------------*/}
      
        <Box  boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HomeCard2 type={Card2} heading="Great Deals on Electronics" />
      </Box>

      {/*------------------------------------Slider3---------------------------------*/}
      
      <Box w={"100%"} >
        <Slider3/>
      </Box>

       {/*----------------------------------Brand Price------------------------------*/}

     <Box  h="auto" w="95%" margin={"auto"}  boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
    <h1 style={{textAlign:"center", fontSize:"22px", color:"#003380",fontWeight:"bolder"}}>THE RELIANCE DIGITAL BRAND PROMISE</h1>

     <SimpleGrid spacing={4}  templateColumns='repeat(4,1fr)'>
  <Card border={"0px solid grey"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
    <CardHeader >
      <Image  src="https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk"></Image>
      <Text>INSTA DELIVERY</Text>
      <Text>LESS THAN 3 HRS.</Text>
    </CardHeader>
  </Card>
  <Card boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
    <CardHeader>
      <Image src="https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh"></Image>
      <Text>BEST FINANCE OPTIONS</Text>
      <Text>WIDE RANGE</Text>
    </CardHeader>
  </Card>
  <Card boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
    <CardHeader marginTop={3}>
      <Image src="https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY"></Image>
      <Text>SERVICE GUARANTEE</Text>
      <Text>HASSEL FREE</Text>
    </CardHeader>
    
  </Card>
  <Card boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
    <CardHeader>
      <Image  src="https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU"></Image>
      <Text>UNMATCHED NETWORK</Text>
      <Text>700 CITIES, 2000 STORES</Text>
    </CardHeader>
  </Card>

</SimpleGrid>
</Box>


     {/*---------------------------------Trending Laptops----------------------------------*/}

<Box  w="95%" margin={"auto"} h={"auto"} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <Flex>
    <Image h={350} w={400} mt={10} mb={5}  src="https://www.reliancedigital.in/medias/Trending-Laptops-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5MjUxN3xpbWFnZS9qcGVnfGltYWdlcy9oMjEvaGVhLzk5MzkyMDU0ODg2NzAuanBnfGU5ZWJhMjc5M2M2NDg2ZGY4NWVjYTZjYjhjMzE0MjM4ZmU5YTZjY2M3OWI1YjYyZmY4ZDlmMDlmMGZhYmMwMTE"></Image>
    <Laptop2 type={Laptops2}/>
  </Flex>
</Box>


  {/*---------------------------------Everyday Appliances---------------------------*/} 

    <Box  w="95%" margin={"auto"} h={"auto"} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
      <Flex mt={8}>
      <SliderFormat type={Phones} heading="iPhone Bestseller"/>
      <Image h={380} w={400} mt={20} mb={5}  src="https://www.reliancedigital.in/medias/iPhone-14-Producst-Carousel-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNzQyM3xpbWFnZS9qcGVnfGltYWdlcy9oYTEvaGEyLzk5NDM5NTYxMjc3NzQuanBnfGQ2Njc5NWIyNTgxMDljYWU2NjY3MmM4ZmNhMzJiOTMwNTAwNDA3MWM0ODgwNmM1ZWFhMmVhOGIyNzUwNGNlNzU"/>
      </Flex>
    </Box>
    
    {/*---------------------------------Trending in Televisions------------------------ */}
    <Box w="95%"  margin={"auto"} h={"auto"} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <Flex mt={8}>
    <Image h={380} w={400} mt={20} mb={5}  src="https://www.reliancedigital.in/medias/Trending-in-TVs-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NDYyOHxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDBhLzk5MzkyMDU0MjMxMzQuanBnfGRmODcwYWI0YjUzMjA0NDBhNmQzMjNlZWE3ZGZlYzYzMThlMDBiNWI0ZWE3MzMxYzRjYmYyNGQ1OGU4NjgyNjg"/>
    <SliderFormat type={TV} heading="Trending in Televisions"/>
  </Flex>
    </Box>

    {/*----------------------------------Price Drop on Apple Smartwatches------------------ */}
    <Box w="95%"  margin={"auto"} h={"auto"} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
     <Flex mt={8}>
     <SliderFormat type={AppleWatch} heading="Price Drop on Apple Smartwatches"/>
     <Image h={380} w={400} mt={20} mb={5}  src="https://www.reliancedigital.in/medias/Apple-Watches-Producst-Carousel-29-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NTYyOHxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDQyLzk5MjgzNzA5Nzg4NDYuanBnfDg5OTE2MzFkOTU2YmI1ODhjOTZmODQ2YzkyNjUzNjYwZTYxZGQ2NGY4OTdhNmU3YjBkZGZmZGI3MzM2OWQwNzQ"/>
    </Flex>
    </Box>

    {/*----------------------------------Best Selling Audio Accessories-----------------------*/}

    <Box w="95%"  margin={"auto"} h={"auto"} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
      <Flex mt={8}>
        <Image h={380} w={400} mt={10} mb={5} src="https://www.reliancedigital.in/medias/Best-Selling-Audio-Accessories-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MTEzMXxpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGVmLzk5MzkyMDUyOTIwNjIuanBnfGY3YTBjMzVhNjMyYjAyMTZiODY4ZmRjYjU5OGU1YmJmMTgzNDYzNzY3MDFiYzkwY2NlMGIxOTI0MGRlOGEzZDI"/>
        <SliderFormat type={Headphones} heading="Best Selling Audio Accessories"/>
      </Flex>
    </Box>

    {/*--------------------------------EXPLORE OUR RANGE OF PRODUCTS---------------------- */}
    <Box w="95%" margin={"auto"} h={480} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
      <Explore  type={Explore1} heading="EXPLORE OUR RANGE OF PRODUCTS"/>
    </Box>
    </div>
  );
};

export default Home;

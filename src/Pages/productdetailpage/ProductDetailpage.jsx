import { Box, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import mycs from "./prod.module.css";
import { BsFillBagCheckFill } from 'react-icons/bs';


let arr = {
    name: "Inbase Carbon Mobile Case for iPhone XS, Gold 555reliancedigitalreliancedigital",
    img: "https://www.reliancedigital.in/medias/In-Base-IB-555-Bags-and-Cases-491488071-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5OTA3fGltYWdlL2pwZWd8aW1hZ2VzL2hkNi9oYWQvOTA3MjEyMjg1NTQ1NC5qcGd8NzBjMDdhY2NiOWY4YjhlMmU2YTc0YjM2NDc2OGVjMzhhNWQxM2NmMTQwMGMxNTRlMjRkNzkwMWY5NjQwYzhmOA",
    price: "344.00",
    mrp: "1,499.00",
    discount: "77%(₹1,155)",
    id: 2
}

const ProductDetailpage = () => {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState(false); 

    const handlecart =()=>{
        setAlert(true); 
        setTimeout(()=>{
            setAlert(false); 
        },1000)
    }

    useEffect(() => {
        setData(arr);
    }, [])

    return (
        <>
            <Box className={mycs.main}>
                <Box className={mycs.box1}>
                    <Image src={data.img} alt='Product-image' />
                </Box>
                <Box className={mycs.box2} >
                    <Box className={mycs.name}>
                        <Heading as='h5' className={mycs.heading} size='md' >
                            {data.name}
                        </Heading>
                    </Box>
                    <Box className={mycs.infobox}>
                        <Box className={mycs.info1} >
                            <Heading as='h5' fontSize="sm" textAlign={"left"} fontWeight="700" >
                                Key Features
                            </Heading>
                            <UnorderedList color="#3a3a3a" fontSize="sm">
                                <ListItem> Definitive Quality </ListItem>
                                <ListItem> High-Definition Clarity </ListItem>
                                <ListItem> Transmits Original Colours </ListItem>
                                <ListItem> Clear Touch' Easy Clean </ListItem>
                            </UnorderedList>
                            <Heading as='h5' fontSize={{ base: 'xs', lg: "sm" }} textAlign={"left"} fontWeight="700" >
                                Return Policy
                            </Heading>
                            <UnorderedList color="#3a3a3a" fontSize="sm" >
                                <ListItem> Items are eligible for return within 7 Days of Delivery. </ListItem>
                                <ListItem> All accessories, product & packaging need to be returned in original condition. </ListItem>
                            </UnorderedList>
                            <Heading as='h5' size="xs" textAlign={"left"} fontWeight="500" >
                                Got Feedback to share on this page?
                            </Heading>
                        </Box>
                        <Box className={mycs.info2} >
                            <Heading size={{ base: 'sm', lg: "md" }} textAlign={"left"} fontWeight="500" >
                                ₹{data.price}
                            </Heading>
                            <Text size='xs' textAlign={"left"} fontWeight="500" className={mycs.mrp} >
                                MRP: {data.mrp} <span className={mycs.inc}> (Inclusive of all taxes) </span>
                            </Text>
                            <Text size='xs' textAlign={"left"} fontWeight="500" className={mycs.discount} >
                                You Save: {data.discount}
                            </Text>
                            <Heading as="h3" size={{ base: 'xs', lg: "sm" }}  >
                                FREE Shipping!
                            </Heading>
                            <Text className={mycs.lines}> *Delivery assurance is subject to our delivery locations staying open as per govt. regulations </Text>
                            <div gap="10px" className={mycs.butbox}>
                                <button onClick={handlecart}> ADD TO CART </button>
                                <button> BUY NOW </button>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box> 
            {alert===true ? 
            <div className={mycs.alert} >
                <h2> <BsFillBagCheckFill />  Product Added to Cart </h2>
            </div>
            : ""
            }
        </>
    )
}

export default ProductDetailpage
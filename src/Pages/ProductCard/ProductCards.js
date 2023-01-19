
import {useSelector,useDispatch} from "react-redux"
import {store} from "../../Redux/store"
import React, { useEffect } from 'react'
import { getPosts } from "../../Redux/Products/Product.action"

import { Card, CardBody, CardFooter,Text,Button,Divider,Stack,Heading,Image ,Badge} from '@chakra-ui/react'
import { BsHeart } from 'react-icons/bs';
import carousel from "./carousel"
import Carousel from "./carousel"


const ProductCards = () => {
    const {loading,error,data} = useSelector((store)=>store.product)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[])

    if(loading) return (<h1>...Loading</h1>)
    if(error) return (<h1>...Error</h1>)

  return (
    <>
    <Carousel/>
    <div>
    
    </div>
    <div style={{display:"flex"}}>
    <div style={{width:"25%",border:"1px solid red"}}>
   
    <h1 style={{fontSize:"20px",fontWeight:"bold",fontFamily:"sans-serif"}}>Filters</h1>
    </div>
    <div >
    
    <h1 style={{fontSize:"20px",fontWeight:"bold",fontFamily:"sans-serif"}}>Title</h1><span>(Showing{" "} 1-{data.length}{" "} results of total Products )</span>
    
   
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
    {data.map((product)=>(
    <Card maxW='sm' variant = "outline" key={product.id}>
    <CardBody>
      <Image
      mt='-5'
        src={product.img}
        alt='Product image'
        borderRadius='lg'
        
      />
      <Stack  spacing='1' >
        <Text color='blue.700' fontSize={"medium"} _hover={{color:"red"}}>{product.name}</Text>
        <Stack direction='row'>
        <Text color='gray.600'  fontSize="smaller" fontWeight={"bold"}> <span>&#8377;</span>{product.mrp}</Text>
       <Text color='gray.500' fontSize="smaller" fontWeight={"bold"}><s><span>&#8377;</span>{product.mrp} </s> </Text>
       <Text color='green.600'  fontSize="x-small" fontWeight={"bold"} > <span>&#8377;</span>{product.discount}</Text>
       </Stack>
        <Stack direction='row'>
        <Badge variant='outline' colorScheme='green' borderRadius={"15px"} padding={"0px 10px 0px 10px"}>
        OFFERS AVAILABLE
        </Badge>
        <Badge variant='outline' colorScheme='green' borderRadius={"15px"} padding={"0px 10px 0px 10px"}>
         CASHBACK
        </Badge>
      </Stack>
      </Stack>
    </CardBody>
    <Divider /><br/>
    <CardFooter
    justify='space-between'
    alignItems={"center"}
   
    height={"20px"}
    mt="-4"
  >
 
<Button flex='1' variant='ghost' >
{ <Stack direction='row' align={"center"} fontWeight={""}>
<input type="checkbox" name="compare-btn" id="compare-btn" />
<label for="compare">Compare</label>
</Stack>}
</Button>
    <Button flex='1' variant='ghost' leftIcon={<BsHeart />}>
      Wishlist
    </Button>
   
  </CardFooter>
  </Card>))}
  </div>
    </div>
    </div>
    </>
  )
}

export default ProductCards

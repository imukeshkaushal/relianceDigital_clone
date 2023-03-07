import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";
import {  getProduct } from "../../Redux/Products/Product.action";

import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
  Divider,
  Stack,
  Flex,
  Image,
  Badge,
  Box,
 
} from "@chakra-ui/react";
import Filters from "./Filters/Filters";

import 'react-loading-skeleton/dist/skeleton.css'

import { Link, useSearchParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import Carousel from "./carousel";
import { addItemCart } from "../../Redux/cart/cart.action";


const Product = () => {

  const [searchParams,setSearchParams]= useSearchParams();

    const dispatch= useDispatch();
    const data = useSelector((store)=>store.product.data);
    console.log(data)


    useEffect(()=>{
        const paramObj ={
            params: {
                q:searchParams.getAll("q"),
                name:  searchParams.getAll("name"),
                discount: searchParams.getAll("discount"),
                brand: searchParams.getAll("brand"),
                rating: searchParams.getAll("rating"),
                pLH: searchParams.getAll("pLH"),
                pHL: searchParams.getAll("pHL"),
                limit:searchParams.getAll("limit")
              }
        }
        dispatch(getProduct(paramObj))
    },[searchParams])


    console.log(data);
 
 

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Carousel />
      </div>

      <div></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div id="filters">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              padding: "10px",
            }}
          >
            Filters
          </h1>
          <Text pl={2}>There is No filters avilable Now.</Text>
        </div>
        <div id="titleBar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "80px",
              alignItems: "center",
              marginBottom: "5px",
              padding: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                Tatal Products
              </h1>
              <span>(Showing 1-{data.length} results of total Products )</span>
            </div>
          </div>

          <div id="productCards">
            {data.map((product, index) => (
              <Link to={`/singleproduct/${product.id}`}>
                <Card
                  variant="outline"
                  key={product.id}
                  _hover={{
                    boxShadow:
                      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                >
                  <CardBody id="productBody">
                    <Image
                      mt="-5"
                      src={product.img}
                      alt="Product image"
                      borderRadius="lg"
                    />

                    <Stack spacing="1">
                      <Text
                        color="blue.700"
                        fontSize={"medium"}
                        _hover={{ color: "red" }}
                        id="cardTitle"
                      >
                        {product.name}
                      </Text>
                      <Flex gap={4} wrap={"wrap"}>
                        <Text
                          color="gray.600"
                          fontSize="smaller"
                          fontWeight={"bold"}
                        >
                          {" "}
                          <span>&#8377;</span>
                          {product.price}
                        </Text>
                        <Text
                          color="gray.500"
                          fontSize="smaller"
                          fontWeight={"bold"}
                        >
                          <s>
                            <span>&#8377;</span>
                            {product.price}{" "}
                          </s>{" "}
                        </Text>
                        <Text
                          color="green.600"
                          fontSize="x-small"
                          fontWeight={"bold"}
                        >
                          {" "}
                          <span>&#8377;</span>
                          {product.discount}
                        </Text>
                      </Flex>
                      <Flex justifyContent={"space-between"} flexWrap="wrap">
                        <Badge
                          variant="outline"
                          colorScheme="green"
                          borderRadius={"15px"}
                          padding={"0px 10px 0px 10px"}
                        >
                          OFFERS AVAILABLE
                        </Badge>
                        <Badge
                          variant="outline"
                          colorScheme="green"
                          borderRadius={"15px"}
                          padding={"0px 10px 0px 10px"}
                        >
                          CASHBACK
                        </Badge>
                      </Flex>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <br />
                  <CardFooter
                    justify="space-between"
                    alignItems={"center"}
                    height={"20px"}
                    mt="-4"
                  >
                    <Button variant="ghost">
                      {
                        <Stack direction="row" align={"center"} fontWeight={""}>
                          <label
                            data-cy="product-add-item-to-cart-button"
                            onClick={() => {
                              let obj = {};
                              for (let i of data)
                                if (i.id === product.id) {
                                  obj = i;
                                }
                              dispatch(addItemCart(obj));
                            }}
                          >
                            Add to Cart
                          </label>
                        </Stack>
                      }
                    </Button>
                    <Button variant="ghost">Wishlist</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

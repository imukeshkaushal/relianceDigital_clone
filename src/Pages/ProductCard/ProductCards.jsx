import { useSelector, useDispatch } from "react-redux";
import { store } from "../../Redux/store";
import React, { useEffect } from "react";
import { getPosts } from "../../Redux/Products/Product.action";

import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
  Divider,
  Stack,
  Heading,
  Box,
  Image,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Filters from "./Filters/Filters";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { BsHeart } from "react-icons/bs";
import Carousel from "./carousel";

const ProductCards = () => {
  const { loading, error, data } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  //console.log(data);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const sortByLH = () => {
    console.log("LH",data);
    return data.sort((a, b) => b.name.localeCompare(a.name));
   // console.log("d",d);
  };
  console.log("outLH",data);
  const sortByHL = () => {
    console.log("HL",data);
    
      return data.sort((a, b) => a.name.localeCompare(b.name));
   
  };
 
  if (loading) return <h1>...Loading</h1>;
  if (error) return <h1>...Error</h1>;

  return (
    <>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Carousel />
      </div>

      <div></div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "25%", border: "1px solid red" }}>
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
         <Filters data={data}/>
        </div>
        <div>
          <div>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Title
            </h1>
            <span>(Showing 1-{data.length} results of total Products )</span>
          </div>
          <div>
            <Button>Relevance</Button>
            <Button onClick={sortByLH}>Low to High</Button>
            <Button onClick={sortByHL}>High to Low</Button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "10px",
            }}
          >
            {data.map((product) => (
              <Card maxW="sm" variant="outline" key={product.id}>
                <CardBody>
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
                    <Stack direction="row">
                      <Text
                        color="gray.600"
                        fontSize="smaller"
                        fontWeight={"bold"}
                      >
                        {" "}
                        <span>&#8377;</span>
                        {product.mrp}
                      </Text>
                      <Text
                        color="gray.500"
                        fontSize="smaller"
                        fontWeight={"bold"}
                      >
                        <s>
                          <span>&#8377;</span>
                          {product.mrp}{" "}
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
                    </Stack>
                    <Stack direction="row">
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
                    </Stack>
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
                  <Button flex="1" variant="ghost">
                    {
                      <Stack direction="row" align={"center"} fontWeight={""}>
                        <input
                          type="checkbox"
                          name="compare-btn"
                          id="compare-btn"
                        />
                        <label>Compare</label>
                      </Stack>
                    }
                  </Button>
                  <Button flex="1" variant="ghost" leftIcon={<BsHeart />}>
                    Wishlist
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;

import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  getPostsTelevisions,
} from "../../../Redux/Products/Product.action";

const PriceRange = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.product);
  let allCategories = Object.keys(categories);

  const filterCategory = (e, categoryName) => {
    if (e.target.checked) {
      dispatch({ type: "FILTER_BY_CATEGORY", payload: categoryName });
    }
  };

  const belowPrice = (e, priceRange) => {
    if (e.target.checked) {
      dispatch({ type: "FILTER_BY_PRICE_RANGE", payload: priceRange });
    } else dispatch(getPostsTelevisions());
  };

  return (
    <Flex>
      <Box width={"100%"} borderRight="1px solid #D3D3D3">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          
          <VStack alignItems="flex-start" paddingLeft="10px">
            <Text>Availability</Text>
            <Flex gap="1rem">
              <Checkbox onChange={(e) => belowPrice(e, 1999900)} />
              <Text>Below 19999</Text>
            </Flex>
            <Flex gap="1rem">
              <Checkbox onChange={(e) => belowPrice(e, 2999900)} />
              <Text>Below 29999</Text>
            </Flex>
            <Flex gap="1rem">
              <Checkbox />
              <Text>Exclude out of Stock</Text>
            </Flex>
          </VStack>
          
        </VStack>
      </Box>
    </Flex>
  );
};

export default PriceRange;

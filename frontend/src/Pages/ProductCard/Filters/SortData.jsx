import { Box, Select,  } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SortData = () => {


    
  return (
    <div>
      <Box>
        <Select >
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
         
          {/* <option >Popular</option> */}
        </Select>
      </Box>
    </div>
  );
};

export default SortData;

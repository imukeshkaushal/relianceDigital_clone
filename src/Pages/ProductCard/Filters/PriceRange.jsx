import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Container, Flex, Grid, GridItem, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'

const PriceRange = () => {
  return (
  
    
    <Flex>
    <Box padding={"10px"} borderRight="1px solid #D3D3D3">
    <VStack  divider={<StackDivider borderColor='gray.200' />}  spacing={4}  align='stretch'>
    
    <Box>
        <VStack>
            <Text>Price</Text>
            <RangeSlider  aria-label={['min', 'max']}  defaultValue={[0,100]} >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex justifyContent={"space-between"} width="100%"><Text>₹26999</Text><Text>₹46999</Text></Flex>
            <br/>
            <Flex>
                <Input  borderColor={"blue"}/>
                <Text>to</Text>
                <Input borderColor={"blue"} />
                <Button background={"darkblue"} color={"white"} paddingLeft="10px">GO</Button>
            </Flex>
        </VStack>
    </Box>
    
    <VStack alignItems="flex-start" paddingLeft="10px">
        <Text>Availability</Text>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Exclude out of Stock</Text>
        </Flex>
     </VStack>
     <VStack alignItems="flex-start" paddingLeft="10px">
        <Text>Category</Text>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Laptops</Text>
        </Flex>
     </VStack>
     <VStack alignItems="flex-start" paddingLeft="10px">
        <Text>Category</Text>
        <Flex gap="1rem" > <Checkbox />
        <Text>Lenovo</Text>
        </Flex>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Acer</Text>
        </Flex>
        <Flex gap="1rem">
        <Checkbox />
        <Text>Hp</Text>
        </Flex>
     </VStack>
    </VStack>
    </Box>
    </Flex>
    
  )
}

export default PriceRange

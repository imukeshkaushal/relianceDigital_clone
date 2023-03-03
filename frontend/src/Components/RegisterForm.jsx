import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../Redux/auth/auth.action";
import validator from 'validator'


const RegisterForm = () => {
  let userData = {
    email: "",
    password: "",
    username: "",
  };

  const [data, setData] = useState(userData);
  const [emailError, setEmailError] = useState(true)
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      position: "bottom-center",
      render: () => (
        <Flex
          color="white"
          p={"10px"}
          bgColor="green.400"
          borderRadius={"15px"}
        >
          <CheckCircleIcon w={30} h={30} />
          <Text size="lg" ml="15px">
            Signed Up Successfully!!!
          </Text>
        </Flex>
      ),
    });
    dispatch(userSignUp(data));

    setData(userData);
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (validator.isEmail(data.email)) {
      
      setEmailError(false)
      
    } else {
      setEmailError(true)
      
    }
    setData({ ...data, [name]: value });
      
    
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl
          isRequired
          mt={2}
          borderRadius="15px"
          paddingLeft={4}
          paddingRight={4}
          pt={2}
        >
          <FormLabel>Your Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Name"
            borderRadius={"none"}
            onChange={handleChange} 
            value={data.username}
            name="username"
          />
          <FormLabel mt={4}>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email Address"
            borderRadius={"none"}
            value={data.email}
            onChange={handleChange}
            name="email"
          />
          {emailError ? <Text mt={2}  color={"red"}>Please enter valid Email Address</Text> : <Text mt={2}  color={"green"}>Good Job, Everything looks Great</Text>}

          <FormLabel mt={4}>Password</FormLabel>
          <Input placeholder="Create Password Here" borderRadius="none"  value={data.password} onChange={handleChange} name="password"/>

          <Flex mt={4} pl={2} pr={2}>
            <Link to="/login">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Login As User
              </Text>
            </Link>
            <Spacer />
            <Link to="/register">
              <Text color={"blue"} fontWeight={"semibold"} fontSize={"14px"}>
                Register As User
              </Text>
            </Link>
          </Flex>

          <Input
            type="Submit"
            value="REGISTER AS USER"
            fontWeight={"semibold"}
            borderRadius={"none"}
            mt={4}
            mb={6}
            backgroundColor="rgb(228, 37, 41)"
            color={"white"}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default RegisterForm;

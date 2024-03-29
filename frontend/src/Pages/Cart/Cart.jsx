import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import crt from "./cart.module.css"
import { FaPlus } from 'react-icons/fa';
import { deleteProduct, getCartProducts } from '../../Redux/cart/cart.action';
import { useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';



const Cart = () => {
  const data = useSelector((store) => store.cartManager.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [delevery, setDelevery] = useState("");
  const [total, setTotal] = useState(0);
  const toast = useToast();

  const handleTotal = (arr) => {
    setTotal(0);
    let amt = 0;
    arr.forEach((e) => {
      let x = e.price
      let a = x.replaceAll(",", "")
      amt += +a;
    })
    setTotal(amt);
  }

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast({
      position: 'bottom-center',

      duration: 1200,

      render: () => (
        <Flex color='white' p={"10px"} bgColor='red.500' borderRadius={"10px"}>
          <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">Your Product is Removed from Cart</Text>
        </Flex >
      ),
    })

  }




  const handlePayment = () => {
    localStorage.setItem("finalPrice", total);
    navigate("/checkout");
  }

  useEffect(() => {

    dispatch(getCartProducts())

    const date = new Date();
    const x = date.getDate() + 4;
    date.setDate(x)
    let s = date.toString().split(" ")
    let a = s[2] + " " + s[1] + " " + s[3]
    setDelevery(a);
    handleTotal(data);  

  }, [data.length, dispatch, handleDelete])
  // console.log(data);


  return (
    <>
      {
        data.length === 0 ? <EmptyCart /> : <div className={crt.box} style={{ marginTop: "180px" }}>
          <div>
            {
              data.map((el) => {
                return (
                  <CartItem key={el.id} {...el} handleDelete={handleDelete} delevery={delevery} />
                )
              })
            }
          </div>
          <div className={crt.checkoutbox}>
            <button id={crt.checkoutbtn} onClick={handlePayment}> Checkout </button>
            <div className={crt.finalout}>
              <div id={crt.coupon}>
                <input type="text" placeholder='Coupon Code' />
                <button> APPLY </button>
              </div>
              <hr />
              <div id={crt.pricebox}>
                <h4> PRICE DETAILS </h4>
                <div>
                  <h4>Price ({data.length} Items) </h4>
                  <h4> ₹{total} </h4>
                </div>
                <div>
                  <h4>Delivery Charges</h4>
                  <h4> FREE </h4>
                </div>
                <hr />
                <div className={crt.payamt}>
                  <h5> AMOUNT PAYABLE </h5>
                  <h5> ₹{total} </h5>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className={crt.bottom}>
            <button> Total: ₹{total} </button>
            <button onClick={handlePayment}> Checkout </button>
          </div>
        </div>
      }
    </>
  )
}

export default Cart
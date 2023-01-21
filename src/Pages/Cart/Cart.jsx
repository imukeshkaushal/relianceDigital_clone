import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import crt from "./cart.module.css"
import { FaPlus } from 'react-icons/fa'; 
import { deleteProduct, getCartProducts } from '../../Redux/cart/cart.action';
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const data = useSelector((store) => store.cartManager.data);  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [delevery, setDelevery] = useState("");
  const [total, setTotal] = useState(0);

  const handleTotal = (arr) => {
    setTotal(0);
    let amt = 0;
    arr.forEach((e) => {
      let x = e.price
      let a = x.split(".")
      let z = a[0].split(",").join("");
      amt += +z;
    })
    setTotal(amt);
  }


  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getCartProducts());
  }

  const handlePayment = () => {
    localStorage.setItem("finalPrice",total);
    navigate("/checkout");
  }

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCartProducts())
    }
    const date = new Date();
    const x = date.getDate() + 7;
    date.setDate(x)
    let s = date.toString().split(" ")
    let a = s[2] + " " + s[1] + " " + s[3]
    setDelevery(a);
    handleTotal(data);
  }, [data.length, dispatch])
  console.log(data);


  return (
    <div className={crt.box}>
      <div>
        {data.map((el) => (
          <div key={el.id} className={crt.proinfobox}>
            <div className={crt.productbox} >
              <div>
                <img src={el.img} alt="Product images" className={crt.cartimg} />
              </div>
              <div>
                <h3>{el.name}</h3>
                <h5> <FaPlus size="12" className={crt.plslogo} /> <span> RECOMMENDED SERVICES/WARRANTY </span> </h5>
              </div>
              <div id={crt.mxm}>
                <h2> ₹{el.price} </h2>
                <h2 id={crt.strikethrough}> M.R.P: <i style={{ textDecoration: "line-through" }}> {el.mrp} </i> <span> Inclusive of all taxes </span> </h2>
                <h2 id={crt.ships}> Free Shipping </h2>
                <h2 id={crt.delevery}> <img src="https://www.reliancedigital.in/build/client/images/standard_delivery_icon.png" width="24px" alt="truck" /> Delivere by: {delevery} </h2>
                <h2 id={crt.gov}> *Delivery assurance is subject to our delivery locations staying open as per govt. regulations </h2>
              </div>
            </div> 
            <div className={crt.cartbutton}>
              <button onClick={() => { handleDelete(el.id) }}>Remove</button>

              {/* <button onClick={() => {
                let obj = {}
                for (let i of data)
                  if (i.id === el.id) {
                    obj = i
                  }
                dispatch(addtoWish(obj));
              }}>Add to Wish</button>  */}

              <button> Move to wishlist </button>
            </div>
          </div>
        ))}
      </div>
      <div className={crt.checkoutbox}>
        <button id={crt.checkoutbtn} onClick = {handlePayment}> Checkout </button>
        <div className={crt.finalout}>
          <div id={crt.coupon}>
            <input type="text" placeholder='Coupon Code' />
            <button> APPLY </button>
          </div>
          <hr />
          <div id={crt.pricebox}>
            <h4> PRICE DETAILS </h4>
            <div>
              <h4>Price (2 Items) </h4>
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
  )
}

export default Cart
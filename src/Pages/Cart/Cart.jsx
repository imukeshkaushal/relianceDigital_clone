import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getCartProducts } from '../../Redux/cart/cart.action';
import crt from "./cart.module.css" 

const Cart = () => {
  const data = useSelector((store) => store.cartManager.data);
  const dispatch = useDispatch();

  // const handleTotal = (arr) => {
  //   let pr = 0; 
  //   arr.forEach((e) => {
  //     let x = e.price
  //     let a = x.split(".")
  //     let z = a[0].split(",").join(""); 
  //     pr += +z; 
  //     setTotal((el) => el + (Number(z)));
  //   })
  //   console.log(total); 
  //   handleTotalAmt(pr);  
  // }

  // const handleTotalAmt = (x) => {   
  //   const toIndianCurrency = (num) => {
  //     const curr = num.toLocaleString('en-IN', {
  //       style: 'currency',
  //       currency: 'INR'
  //     });
  //     return curr;
  //   };
  //   let ans = toIndianCurrency(x);   
  //   setInTotal(ans); 
  // } 

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    dispatch(getCartProducts())
  }


  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCartProducts())
    }

  }, [data.length, dispatch])


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
              </div>
              <div>
                <h2> ₹{el.price} </h2>
                <h2 id={crt.strikethrough}> M.R.P: {el.mrp} <span> Inclusive of all taxes </span> </h2>
              </div>
            </div>
            <div className={crt.cartbutton}>
              <button onClick={() =>{handleDelete(el.id)}}>Remove</button>
              <button> Move to wishlist </button>
            </div>
          </div>
        ))}
      </div>
      <div className={crt.checkoutbox}>
        <button id={crt.checkoutbtn}> Checkout </button>
        <div className={crt.finalout}>
          <div id={crt.coupon}>
            <input type="text" placeholder='Coupon Code' />
            <button> APPLY </button>
          </div>
          <div id={crt.pricebox}>
            <h4> PRICE DETAILS </h4>
            <div>
              <h4>Price (2 Items) </h4>
              {/* <h4> {inTotal} </h4> */}
            </div>
            <div>
              <h4>Delivery Charges</h4>
              <h4> FREE </h4>
            </div>
            <hr />
            <div>
              <h5> AMOUNT PAYABLE </h5>
              {/* <h5> {inTotal} </h5>  */}
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className={crt.bottom}>
        {/* <button> Total: {inTotal} </button> */}
        <button> Checkout </button>
      </div>
    </div>
  )
}

export default Cart
import React from 'react'
import wsh from "./wish.module.css"
import { FaHome } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Wishlist = () => {
  return (
    <div className={wsh.topbox}>
      <div className={wsh.hometop}> <FaHome /> <IoIosArrowForward /> My Account </div>
      <div className={wsh.main}>
        <div>
          <div className={wsh.myinfo}>
            <h2> Tushit </h2>
            <p> tushitsaxena4@gmail.com </p>
          </div>
          <div className={wsh.links}>
            <h4> <h6 to="/myacc"> My Account</h6> </h4>
            <Link className={wsh.lnk} to="/myprofile" > My Profile </Link>
            <Link className={wsh.lnk} to="/mywishlist" > My Wishlist </Link>
            <Link className={wsh.lnk} to="/myacc" > My Order </Link>
            <Link className={wsh.lnk} to="/myacc" > My Address </Link>
            <Link className={wsh.lnk} to="/myacc" > ROne Loyalty Points </Link>
            <Link className={wsh.lnk} to="/myacc" > My Credit </Link>
            <button> Logout <FiLogOut /> </button>
          </div>
        </div>
        {/* box2 */}
        <div>
          <div className={wsh.heading}>
            <h3> My Account </h3>
          </div>
          <div className={wsh.option}>
            <div>
              <div>
                <h3> Tushit's Profile </h3>
                <p> tushit4@gmail.com </p>
              </div>
              <img
                src="https://www.reliancedigital.in/build/client/images/my-account/my_profile.jpg"
                alt=""
              />
            </div>
            <div>
              <div>
                <h3> My Order </h3>
                <p> Track your order and history </p>
              </div>
              <img src="https://www.reliancedigital.in/build/client/images/my-account/my-orders.jpg" alt="img2" />
            </div>
            <div>
              <div>
                <h3> My Address </h3>
                <p> Add, Edit your address </p>
              </div>
              <img src="https://www.reliancedigital.in/build/client/images/my-account/my-address.jpg" alt="img2" />
            </div>
            <div>
              <div>
                <h3> My Wishlist </h3>
                <p> Create, Edit and custom Wishlist </p>
              </div>
              <img src="https://www.reliancedigital.in/build/client/images/my-account/my-wishlist.jpg" alt="img2" />
            </div>
            <div>
              <div>
                <h3> ROne Loyalty Points </h3>
                <p> Review your loyalty points </p>
              </div>
              <img src="https://www.reliancedigital.in/build/client/images/my-account/rone-points.jpeg" alt="img2" />
            </div>
            <div>
              <div>
                <h3> My Credit </h3>
                <p> Review your store point </p>
              </div>
              <img src="https://www.reliancedigital.in/build/client/images/my-account/my-credit.jpg" alt="img2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
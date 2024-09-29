import React, { useContext } from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader'
import { Link } from "react-router-dom";
import { StateContext } from "../DataProvider/DataProvider";
function Header() {

  const [{ basket }, dispatch] = useContext(StateContext);
  const totalItem = basket?.reduce((amount,item)=> {
    return item.amount + amount
  },0)
  // console.log(basket);
  
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo section*/}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>

              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BiSearch size={25} />
          </div>
          {/* other section */}

          <div className={classes.order__container}>
            <Link to="#" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/signup">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;

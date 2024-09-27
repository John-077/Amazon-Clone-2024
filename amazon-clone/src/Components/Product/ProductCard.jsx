import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";
import { UseStateValue } from "../../Components/DataProvider/DataProvider";
function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;
  // console.log(product.image);
  // console.log(title);
  // console.log(product);

  const [{ basket }, dispatch] = UseStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && (
          <div className={classes.description} style={{ maxWidth: "550px" }}>
            {description}
          </div>
        )}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

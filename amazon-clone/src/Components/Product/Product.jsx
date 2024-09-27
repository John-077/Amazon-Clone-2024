import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  const [Products, setProducts] = useState([]);
  // console.log(Products);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
        // console.log(setProducts);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {
               Products?.map((singleProduct) => {
            return (
              <ProductCard 
              product={singleProduct} 
              key={singleProduct.id}
              renderAdd={true} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;

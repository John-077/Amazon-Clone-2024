import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const [producting, setproduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  // console.log(productId);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res);
        setproduct(res.data);
        setIsLoading(false);
        console.log(setIsLoading(false));
        
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={producting} flex={true} renderDesc={true} />
      )}
    </>
  );
}

export default ProductDetail;

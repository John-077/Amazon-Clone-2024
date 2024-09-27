import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
import classes from '../../Components/Product/Product.module.css'
import LayOut from '../../Components/LayOut/LayOut'
function Results() {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams();
   const [isLoading, setIsLoading] = useState(false);
  // console.log(categoryName);
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false)
        // console.log(res);
      }).catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}> Category / {categoryName}</p>
      <hr />
      {isLoading? (<Loader/>)
       : (
         <div className={classes.products_container}>
        {results?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      )
      }
     
    </section>
    </LayOut>
  );
}

export default Results;

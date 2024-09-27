import React from 'react'
import Product from '../../Components/Product/Product'
import Carousels from '../../Components/Carousel/CarouselEffect'
import Category from '../../Components/Category/Category'
import LayOut from '../../Components/LayOut/LayOut'
function Linding() {
  return (
    <LayOut>
        <Carousels/>
        <Category/>
      <Product/>
    </LayOut>
  )
}

export default Linding

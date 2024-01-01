import React from 'react'
import './ProductCard.scss'

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-header">
          <div className="product-price">{product.price} $</div>
          
        </div>
        <div className="product-image">
          <img src={product.image} alt="" />
          <div className="product-info">
          <h3>{product.title}</h3></div>
        </div>
        {/* <div className="product-info">{product.title}</div> */}
      </div>
    </div>
  )
}

export default ProductCard

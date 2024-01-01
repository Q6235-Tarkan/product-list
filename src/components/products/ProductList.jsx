
import './ProductList.scss'
import ProductCard from './ProductCard.jsx'

const ProductList = ({ products,handleChange }) => {

  return (
    <div className="product-list-container">
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={(e)=>handleChange(e)}
      />
      <div className="container">
        {products.map(product => {
          return <ProductCard product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default ProductList

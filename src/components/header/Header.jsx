
import React from 'react'
import {categories} from "../../helper/data.js"
import './Header.scss'


const Header = ({handleClick}) => {
   

  return (
    <div className='header'>
    
    <h1>Product List</h1>
    <div className='category-container'>
    {categories.map((category,i)=>{
        return(
            <button key={i} className='btn' onClick={handleClick}>
           {category.toLocaleUpperCase()}
           {/* {category} */}

        </button>

        )
    })}
        
       
    </div>
    </div>
  )
}

export default Header
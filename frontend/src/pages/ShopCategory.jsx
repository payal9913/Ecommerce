import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdwon_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort"> 
        <p>
          <span>Showing 1-12</span>Out of 36 Product
        </p>
        <div className="shopcategory-sort">
          Short by <img src={dropdwon_icon} alt="" />
        </div>
        </div>
        <div className="shopcategory-products">
            {all_product.map((item,i)=>{
              if(props.category===item.category){
                  return <Item key={i} id={item.id} name={item.name} image={item.image}
                  new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
            })}
        </div>
      </div>
    

  )
}

export default ShopCategory
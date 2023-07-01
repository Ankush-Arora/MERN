import { Button } from 'bootstrap'
import React, { useState } from 'react'
import {useDispatchCart,useCart} from './ContextReducer'

const CardC = (props) => {

    let dispatch=useDispatchCart();
    let data=useCart();
    let foodItem=props.foodItemProp;

    const [quantity,setQuantity]=useState(1);
   
    const handleAddToCart=async ()=>{
        alert('Item added to cart')
            await dispatch({type:"ADD",id:foodItem._id,
            name:foodItem.name,description:foodItem.description,quantity:quantity,totalPrice:totalPrice })
            console.log('in cart',data)
       // alert('added to cart');
    }

    let totalPrice=quantity*parseInt(foodItem.description);

 
  return (
    <div>
       <div className="card m-3 " style={{width: '12rem',height:'20rem'}}>
                {/* <img src={'images/ep1.jpeg'} className="card-img-top h-50 p-2" alt="..." /> */}
                <img src={foodItem.img} className="card-img-top h-50 p-2 " alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{foodItem.name}</h5>
                    {/* <p className="card-text">our imp data</p> */}
                   <div className='container w-100'>
                   <span className=''><b>₹&nbsp;&nbsp;{foodItem.description}</b> </span>&nbsp;&nbsp;
                    <select  className='m-1 h-100 w-20 bd-dark rounded' onChange={(e)=>setQuantity(e.target.value)}>
                        {
                            Array.from(Array(6),(e,i)=>{
                                return(
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })
                        }
                    </select>
                    {/* <select  className='m-1 h-100 w-30 bd-dark rounded'>
                    <option  value='half'>Half</option>
                    <option  value='full'>Full</option>
                    </select> */
                     
                    //  console.log(typeof( parseInt(foodItem.description)))
                    }
                    
                    <hr/>
                   </div> <button className='btn btn-success ' onClick={handleAddToCart}>Add to cart</button> 
                </div>
            </div>
            
    </div>
  )
}

export default CardC

import { Button } from 'bootstrap'
import React from 'react'

const CardC = (props) => {

    const handleAddToCart=()=>{
        alert('added to cart');
    }
  return (
    <div>
       <div className="card m-3" style={{width: '12rem',height:'20rem'}}>
                {/* <img src={'images/ep1.jpeg'} className="card-img-top h-50 p-2" alt="..." /> */}
                <img src={props.foodItemProp.img} className="card-img-top h-50 p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItemProp.name}</h5>
                    {/* <p className="card-text">our imp data</p> */}
                   <div className='container w-100'>
                    <select  className='m-1 h-100 w-20 bd-dark rounded'>
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
                    </select> */}
                    <span className=''><b>₹.</b> </span>
                    <hr/>
                   </div> <button className='btn btn-success ' onClick={handleAddToCart}>Add to cart</button> 
                </div>
            </div>
    </div>
  )
}

export default CardC

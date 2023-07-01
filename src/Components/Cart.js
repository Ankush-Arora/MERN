import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../Styles/style.css'
import { Button } from 'react-bootstrap';
import { useCart, useDispatchCart } from './ContextReducer';
import DeleteBtn from './DeleteBtn';


const Cart = () => {


  useEffect(()=>{
    setTempData(data);
  })

  let data = useCart();
  let dispatch = useDispatchCart();
  const [tempData,setTempData]=useState();

  const [coupon, setCoupon] = useState('');
  const [apply, setApply] = useState('NO')

  function giveDiscount() {
    coupon === 'ANKUSH30' ? setApply('YES') : alert('Please enter valid coupon')
  }

  function getInput(input) {
    // console.warn('In getInput method',input.target.value)
    setCoupon(input.target.value)
  }

  const handleCheckOut=async ()=>{
    let userEmail=localStorage.getItem("userEmail");
    let response=await fetch("http://localhost:3001/newOrder",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
          order_data:data,email:userEmail,order_date: new Date().toDateString()
        })
      
    });
    console.log("Order Response",response)
    if(response.status === 200){
      dispatch({type:"DROP"})
    }
  }

  

  if (data.length === 0) {
    return (
      <div>
        <img src={'images/emptycart.png'} className="card-img-top h-50 p-2 " alt="notfound" />
      </div>
    )
  }
  let totalPrice= data.reduce((total, food) => total + parseInt(food.description) * food.quantity, 0)
  // {
  //   totalPrice= apply === 'YES' ? totalPrice=totalPrice*0.7:totalPrice
  // }
  return (
    <div className='cart-page  m-12 p-15'>
      <marquee className="blink" direction="right" scrollamount="5" behavior="alternate" bgcolor="yellow">
        Apply coupon ANKUSH30 to get 30%off</marquee>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Items</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>₹</th>
            <th>Total</th>
            <th> <DeleteBtn /> </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((food, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.description}</td>
                <td>{food.quantity * food.description}</td>
                {/* onClick={()=>{dispatcher({type:"REMOVE",index:idx})}} */}
                <td><button onClick={() => { dispatch({ type: "REMOVE", index: idx }) }}>
                  <DeleteBtn /></button></td>
              </tr>

            ))}
            <tr><td colSpan={6}>
                {apply === 'NO' ? <div>
                  <input type='text' className='apply-coupon' placeholder='enter coupon here' onChange={getInput} />
                  <Button className='apply-button' onClick={giveDiscount}>Apply</Button>
                </div> : <h6> Coupon Applied! Got 30% off</h6>}
              </td></tr>
        </tbody>
      </Table>
      <div className='cart-btn'>
        {apply === 'YES' ? <h3>Total Price = ₹&nbsp;{totalPrice=(0.7 * totalPrice).toFixed(0)} </h3> : <h3>Total Price = ₹&nbsp;{totalPrice} </h3>}
        <Button onClick={handleCheckOut}>Order</Button>

      </div>
    </div>
  )
}

export default Cart

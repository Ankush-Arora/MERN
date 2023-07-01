import React, { useState } from 'react'
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './ContextReducer';
import '../Styles/style.css'
// import Badge from 'react-bootstrap'
 
const Navbarc = () => {

  let data=useCart();
    const navigate=useNavigate();
  function handleLogOut()
  {
localStorage.removeItem("authToken");
navigate('/login')
  }

  const [displaySignUp,setDisplaySignUp]=useState(true);
  return (
     <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid fs-5">
    <Link className="navbar-brand fs-2 fst-italic" to="/">FOODIFY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav me-auto">
        <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        {
          (localStorage.getItem("authToken"))?
        <Link className="nav-link" aria-current="page" to="/myOrders">Orders</Link>:""
        }
        <Link className="nav-link text-danger" to="/" onClick={()=>alert(`Your user'id is ${localStorage.getItem("userEmail")}`)}>
         {
         (localStorage.getItem("authToken"))?
         localStorage.getItem("userEmail").substring(0, localStorage.getItem("userEmail").indexOf('@')) :""
         } </Link> 
      </div>
      
      {
        (!localStorage.getItem("authToken"))?
      <div className='credentials'>
      {
      displaySignUp===true ? <Link className="btn bg-white text-success mx-2" to="/signUp" onClick={()=>setDisplaySignUp(!displaySignUp)}>Sign up</Link>:
      <Link className="btn bg-white text-success mx-2" to="/login" onClick={()=>setDisplaySignUp(!displaySignUp)}>Log in</Link> }
      </div>:
       <div>
      {/* /<Link className="btn bg-white text-danger mx-2" to="/" onClick={()=>alert(`Your user'id is ${localStorage.getItem("userEmail")}`)}>
      //   {
      //   localStorage.getItem("userEmail").substring(0, localStorage.getItem("userEmail").indexOf('@')) 
      //   } </L/ink> */}
        <Link className="btn bg-white text-success mx-2" to="/cart">Cart
      <Badge pill bg="success" className='btn mx-1'>{data.length}</Badge>
      </Link>
      <Link className="btn bg-white text-danger mx-2" to="/login" onClick={handleLogOut}>Logout</Link>
      
      </div>
        }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbarc

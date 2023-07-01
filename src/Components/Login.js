import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [credentials,setCredentials]=useState({email:"",password:""})
    let navigate=useNavigate();
    const handleSubmit=async(e)=>{
            e.preventDefault();
            const response= await fetch("http://localhost:3001/userLogin",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email:credentials.email,password:credentials.password})
            });

            const json=await response.json();
            // console.log(json)

            if(!json.success){ alert('Please enter valid credentials');setCredentials({email:'',password:''});}
            
            if(json.success){
              localStorage.setItem("authToken",json.authToken);
              localStorage.setItem("userEmail",credentials.email);
              
              // console.log(localStorage.getItem("authToken"));
              // console.warn(localStorage.getItem("userEmail"));
                navigate('/');
            }
    }

    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <div>
      <div className='signup' >
      <form onSubmit={handleSubmit}>
       <h4>Log in</h4>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} aria-describedby="emailHelp" placeholder='enter email' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Enter Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} placeholder='enter password' onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-success">Login</button>
  <Link to='/signUp' className='m-3 btn btn-primary '>SignUp</Link>
</form>
    </div>
    </div>
  )
}

export default Login

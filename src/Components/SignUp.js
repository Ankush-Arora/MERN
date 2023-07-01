import React, { useState } from 'react'
import '../Styles/style.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const [credentials,setCredentials]=useState({name:"",email:"",password:""})

    const handleSubmit=async(e)=>{
            e.preventDefault();

            let  found=await checkUserIsPresentOrNot(credentials.email);
            if(found === true){ alert('Email already exist'); return;}
            // console.log("Checking email in handle submit ",credentials.email)

            const response= await fetch("http://localhost:3001/addUser",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
            });

            const json=await response.json();
            // console.log(json)

            if(!json.success){ alert('User created') ;setCredentials({name:'',email:'',password:''});}
            
    }

    async function checkUserIsPresentOrNot(newEmail)
    {
      const response= await fetch("http://localhost:3001/getUsers",{
                method:'GET',
                headers:{'Content-Type':'application/json'} 
            });
            const json=await response.json();

            for(let i=0;i<json.length;i++)
            {
              console.log(json[i].email);
                if(json[i].email === newEmail) {
                  //  console.log('User email already exist ');  
                   return true;}
            }
           //   console.log('User email does not exist ')
            return false;

    }

    const onChange=(event)=>{
      // console.warn("email is = ",event.target.value);
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    
  return (
    <div className='signup' >
      <form onSubmit={handleSubmit}>
      <h4>Sign Up</h4>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Enter Name:</label>
    <input type="text" className="form-control" name='name' value={credentials.name}  placeholder='enter name' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} aria-describedby="emailHelp" placeholder='enter email' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Enter Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} placeholder='enter password' onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to='/login' className='m-3 btn btn-primary' >Already a user</Link>
</form>
    </div>
  )
}

export default SignUp

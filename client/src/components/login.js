import React,{ useState }from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './login.css'
function Login(){
   const[password,setPassword]=useState()
    const[email,setEmail]=useState()

  const navigate= useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault()
    
    if (!email || !password) {
      alert('All fields are required.');
      return;
    }

 axios.post('http://localhost:3001/user/login',{email,password})
 .then(result=>{console.log(result)
 navigate('/home')
  })
  .catch((err) => {
    console.log('Login failed:', err);
    alert('Login failed. Please check your credentials.');
  });
};
//  .catch(err=>console.log(err))
//   }

    return(
        <div className="container1">
           <h1>Login </h1> 

            <form >
            <label>
        Email
        <input
          type="email"
          name="email"
          value={email} placeholder="enter email"  required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />

      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}  placeholder="enter password" required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

  <Link to='/home'>
      <button type="submit"  onClick={handleSubmit}>Login</button> </Link>
            </form>
  <p>Not a member?  <Link to='/register'> Sign Up </Link></p>
        
        </div>
    )

}

export default Login;
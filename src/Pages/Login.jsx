import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Login() {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');


const url= 'http://localhost:9020/api/v1/login';

const redirect=useNavigate();
const login = async (e)=>{
  e.preventDefault();
  const res=   await fetch(url,{
        method: 'POST',
  headers: {"Content-Type":"application/json"},
  body:JSON.stringify({ email,password}),
  })
  const data = await res.json();
  
  if(data.token){
    localStorage.setItem( "token",JSON.stringify(data.token) );
    console.log(data);
    redirect('/Dashboard')
  }
  if (data.errors){
    setEmailError(data.errors.email);
    setPasswordError(data.errors.password);

  }

}

  return (
    <div className='w-100'>
            <div className="align-items-center justify-content-center sigpi">
                <div className='cont text-center'>
                <Container className=' marg align-items-center'>
                        <div className=''>
                            <h1 className='welcome'>Welcome Back</h1>
                        </div>
                        <form onSubmit={login} >
                        <div>
                  <h5 className="mt-5 username"><label htmlFor="username">Your Email Adrress</label></h5>
                </div>
                <div className="">
                  <input
                    type="text"
                    required
                    id="email"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    className="imp w-100"
                  />
                  <p style={{color:'red'}}>{emailError}</p>
                </div>
                <div className="">
                  <h5 className="mt-5 username">
                    <label htmlFor="password">Password</label>
                  </h5>
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    required
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    className="imp w-100"
                  />
                  <p style={{color:'red'}}>{passwordError}</p>
                </div>
                <button type="submit"  onClick={login} className="mt-5 w-100 btn3  text-white">
                  Continue
                </button> 
                        </form>
                        <div className='mt-5  '>
                            <h4>No account? <Link to='/SignUp'><span style={{color: "#0086B0" }}>Sign Up</span> </Link></h4>

                        </div>
                        </Container>
                    </div>        
            </div>
    </div>
  )
}

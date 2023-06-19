import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




export default function SignUp() {
  


const [username,setUsername]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

// const form =document.querySelector('form')

// const emailError = document.querySelector({errors})
// const passwordError = document.querySelector({errors})



const url= 'http://localhost:9020/api/v1/register'

const redirect = useNavigate();
const register = async(e) => {
  e.preventDefault()
const res = await fetch(url,{
  method: 'POST',
  headers: {"Content-Type":"application/json"},
  body:JSON.stringify({username, email,password}),
});
const data = await res.json();
console.log(data);  
 if (data.errors){
  setEmailError(data.errors.email);
  setPasswordError(data.errors.password);

}else{
  redirect('/Login')
}
}



  return (
    <div className="w-100">
      <div className="align-items-center justify-content-center sigpi">
        <div className="cont ">
          <Container className=" marg align-items-center   ">
      
            <div className="text-center  d-flex gap-3  align-items-center justify-content-center">
              <h2 className="join">
                Jion Post<span style={{ color: "#0086B0" }}>it</span>
              </h2>
            </div>
            <div className="text-center mt-3">
              <p className="w-100 enter">
                Enter you email address to create an account on Post
                <span className="" style={{ color: "#0086B0" }}>
                  it
                </span>
              </p>
            </div>

            <div className="align-items-center justify-content-center text-center">
              <form onSubmit={register}>
                <h5 className="mt-5 username"><label htmlFor='username'>Username</label> </h5>

                <input
                  type="text"
                  required
                  id="username"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)} 
                  className="w-100 imp"
                />
                    <div>
                <h5 className="mt-5 username">
                  <label htmlFor="email">Your email adress</label>
                  </h5>
                </div>
                <div className="">
                  <input
                    type="text"
                    required
                    id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} 
                    className="imp w-100"
                    
                  />
                  <p style={{color:'red'}}>{emailError}</p>
                </div>
                <div className="">
                  <h5 className="mt-5 username">
                    <label htmlFor="password">Password</label>
                  </h5>
                </div>
                <div className="mt-5 ">
                  <input
                    type="password"
                    required
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="imp w-100"
                  />
                  <p className=""style={{color:'red'}}>{passwordError}</p>
                </div>
                <button onClick={register} type="submit" className="mt-5 w-100 btn2  text-white">
                  Continue
                </button>
                <div className="mt-5">
                  <h4 className="already">
                    Already have an account?{" "}
                    <Link to="/Login">
                      <span className="" style={{ color: "#0086B0" }}>
                        Sign In
                      </span>
                    </Link>{" "}
                  </h4>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

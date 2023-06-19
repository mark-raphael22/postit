import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/Postit 1.svg'
import { Link } from 'react-router-dom'
import pro from '../images/profile.svg'
import  Profile  from '../images/profile.svg'




export default function Navhead({text1, text2,text3}) {
    const redirect=useNavigate();
        const logout= ()=>{
           localStorage.removeItem("token");
           redirect('/')      
        }

  return (
    
    <div className='position-fixed w-100 top-0 pui ' style={{background:'white'}}>
    <div className="d-flex align-items-center mt-3 justify-content-between px-5 tour ">
        <div>
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
        </div>
        <div className=" d-flex align-items-center justify-content-between  gap-4 ">
            <Link to='/Mystory'>
            <h5><a href="/stories" className=' text text-black top'>{text1}</a></h5>
            </Link>
            <h5><a href="/contact"className=' text text-black top'>{text2}</a></h5>
            <div className='mb-3 mt-3 ' >
            <button onClick={logout} type='submit'  size='sm' className='navb2 gap-4 text-danger  border-rounded rounded-5' style={{background:"#0086B0",fontSize:'20px'}}> {text3}</button>
            </div>
                 <img src={Profile} alt="" /> 


        </div>

    </div>

    </div>
  )
}
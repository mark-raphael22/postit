import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../images/Postit 1.svg'
import { Link } from 'react-router-dom'
import pro from '../images/profile.svg'


export default function Navhead({text1, text2, text3, text4}) {
  return (
    
    <div className='position-fixed w-100 top-0 pui ' style={{background:'white'}}>
    <div className="d-flex align-items-center  gap-md-5 justify-content-between px-5 tour ">
        <div>
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
        </div>
        <div className="text d-flex align-items-center justify-content-between  gap-4 ">
            <div className='d-flex align-items-center justify-content-between gap-md-4'>
            <h5><a href="/stories" className='text-black top'>{text1}</a></h5>
            <h5><a href="/contact"className='text-black top'>{text2}</a></h5>
            <h5><a href="/login"className='text-black top'>{text3}</a></h5>
           <div className='gap-md-4'>
            <NavLink to='/SignUp'><Button type="submit" size='sm' className='gap-3 start  mb-3'>{text4}</Button></NavLink>
            </div>
                  


        </div>
        </div>
    </div>

    </div>
  )
}
import React from 'react'
import {Container} from 'react-bootstrap'
import logo from '../images/About Postit..svg'
import {BsInstagram,} from 'react-icons/bs'
import {CiTwitter,CiFacebook} from 'react-icons/ci'
import {BsArrowBarRight}from 'react-icons/bs'

export default function footer() {
  return (
    <div className='  fotmage w-100' >
     
      <div className='px-5  d-flex'>
        <div className='py-3 pad'>
          <img src={logo} alt="" />
        
          <div className='text-white py-4 textj'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Tincidunt id sem vel quis in turpis sit eget pellentesque.<br></br> Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt <br></br> neque fusce vitaenisi aliquet. que maeae tortoere<br></br> necsem commodo ac.</p></div>
      </div>
      <div className='text-white py-3 ps-5  gap-4  justify-content-between padi'>
        <h4 className='quickmenu '>Quick Menu</h4>
        <div className='mt-3 gap topic '>
          <h5>Home</h5>
          <h5>Stories</h5>
          <h5>Trending Stories</h5>
          <h5>Popular Stories</h5>

        </div>

        </div>
        <div className='text-white gro py-5 gap-3 mt-3   ps-5 text-center padir'>
          <h5>Sign Up</h5>
          <h5>Login</h5>
          <h5>Contact Us</h5>

        </div>
        <div className='text-white py-3 '>
          <h4>Subscribe to our newsletter</h4>
            <div className='position-relative'>
              <input type="text" placeholder='Email address ' className='ps-3 subscribe w-100 mt-3 position-relative'style={{}}  /><button className=' button position-absolute' ><p className='text-white'style={{
}}>Subscribe <BsArrowBarRight/></p></button>
            </div>
        </div>
       
      </div >
      <div className='px-5'>
      <hr   className='hr'/>
      <div className='text-white d-md-flex align-items-center gap-2 poli justify-content-center'>
        <div className='d-md-flex gap-4 align-self-end logo'>
          <p className='py-2 term'>Terms and Policy</p>
        <h3><a href='https://twitter.com'><BsInstagram/></a></h3>
        <h3><a href="https://instagram.com"><CiFacebook/></a></h3>
        <h3><a href="https://instagram.com"><CiTwitter/></a></h3>
        </div>
     

     </div>
      </div>
     
     
     
        </div>
  )
}

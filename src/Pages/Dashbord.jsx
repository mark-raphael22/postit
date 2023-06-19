import React from 'react'
import Navbar2 from '../Component/Navbar2'
import Footer from '../Component/footer'
import logo from '../images/unsplash_Z2bJeJQRbW0.svg'
import {Link} from 'react-router-dom'



export default function Dashbord() {

  

  return (

    <>  
    <Navbar2
    text1="Stories"
    text2="Contact"
      text3="Logout"
    />
 

      <div className=' w-100 '>
        <div className='pic py-3 align-items-center'>
          <div>
          <div className= 'd-flex align-items-center  justify-content-around'>
            <div className=' class px-2  mt-5 '>
              <div className=''>
            <h1 className='wel '>Welcome to pos<span style={{color: "#0086B0"}}>it</span></h1>
            </div>
            <div>
            <p className='font mt-4'>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur<br></br>
            egestas massa velit aliquam. Molestim bibendum <br/>
            hnt ipsum orci, platea aliquam id ut. </p>
            </div>
            <div className='d-flex gap-3 mt-4'>
              <Link to='/Mystory'>
              <button className='text-white bt1'  type="submit" size='sm' style={{background:'#0086B0',width:'180px',height:'45px ',fontSize:'22px' }}>My Stories</button>
              </Link>
                <Link to='/Allstory'>
              <button  type="submit" size='sm' className='text-dark bt1' style={{ width:'180px',height:'45px',fontSize:'22px' ,borderColor:'#0086B0'}}>Go to Feed</button>
              </Link>
              </div>
            
            </div>
             <div className='mt-5  '>
            <img src={logo} alt="" className='' style={{height:'500.33px',width:'747.19px'}}/>
            </div>
         
          </div>
          

          </div>

         
       
        </div>

      </div>
      <Footer/> 
    </>
  )
}

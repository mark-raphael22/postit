import React from 'react'
import Navbar2 from '../Component/Navbar2'
import logo from '../images/unsplash_Z2bJeJQRbW0.svg'
import {useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import logo2 from '../images/smalluserprof.svg'
import logo3 from '../images/Vector (1).svg'
import { Link } from 'react-router-dom'

export default function AllUsersStory() {
  const url='http://localhost:9020/api/v1/story'
  const token= JSON.parse(localStorage.getItem("token"));
   
  const [story, setStory]=useState([])

    const fetchdata= async () =>{
       const res= await fetch(url, {
        method: 'GET',
        headers:{
         'authorization':`Bearer ${token}`
        }
       })
        const data =  await res.json()
        setStory(data.story)
        
    }

    useEffect(() => {
      fetchdata()
    },[])


  return (
    <>

        <Navbar2 
    text1="Stories"
    text2="Contact"
      text3="Logout"
    />


      <div className='w-100'>
        <div className='pic py-3 align-items-center'>
          <div className='d-flex  ' style={{padding:'50px'}}>
            <div className='px-5 tex-dark mt-5 py-5'>
             <h1  className='pst'style={{marginTop:'35px'}}>You’ve got a story,<br/> <span style={{color:'#0086B0'}}>Postit.</span></h1>
             <div><p className='font'> Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur<br/> egestas massa velit aliquam. Molestim bibendum<br/> hnt ipsum orci, platea aliquam id ut. </p></div>
              </div>
            <div className='px-5 '><img src={logo} alt="" style={{height:'500.33px',width:'747.19px'}} /></div>
       

          </div>

        </div>


      </div>

      <div className='d-flex'>
      {story.map((stories)=> {
      const { _id, title, paragraph, tags,image }=stories;

      return (
        <div key={_id} className=''>
        <div className='  mt-5 px-5 '>
          <div className=' d-flex align-items-center   '>
            <div className='  ps-5 '>
            <Image
            src={image}
            alt=''
            className='img3'
            />
            <div className='mt-3'><h4>{title}</h4></div>
             <div className='d-flex align-items-center'>
                <img src={logo2}alt="" />


             </div>
             <div className='mt-2 '>
              <p className='texts'>{paragraph.slice(0,80)}</p>
             </div>
             <Link to={`/Single/${_id}`}>  
             <div className='d-flex align-items-center gap-3'>
        
              <div><img src={logo3} alt="" /></div>
         
              <div>
              <h4 className='mt-2' style={{fontSize:'18px',color:'#0086B0'}}>Read More...</h4>
              </div>
            
             </div>
             </Link>
            </div>
            </div>
           

          </div>
 
    
      </div>
    
      );
          })}
          </div>
    </>
  )
}

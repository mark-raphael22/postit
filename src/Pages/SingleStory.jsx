import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar2 from '../Component/Navbar2'
import Footer from '../Component/footer';
import {Carousel, Container, Image} from 'react-bootstrap'

export default function SingleStory() {


  const [story,setStory]=useState([]);

  const {id}= useParams();

  const url=`http://localhost:9020/api/v1/story/${id}`
  const token= JSON.parse(localStorage.getItem("token"));
  const fetchStory=  async ()=>{
    const res= await fetch(url,{
    headers:{
      'authorization':`Bearer ${token}`
    },
  })
  const data =  await res.json()
  setStory(data.story)
  console.log(data);

}
useEffect(()=>{fetchStory()},[])



  return (


    <>
       <Navbar2 
    text1="Stories"
    text2="Contact"
    text3="Logout"
    />


         
              <div className='mt-5 py-5'>
                 <div div className='px-5 mt-5'>
                  <div>
                    <button className='text-white'style={{height: '38px',width: '140px',background:'#6397E5' ,borderRadius:'6px',fontSize:'22px'}}>Technology</button>
                  </div>

                  <div className='mt-4 ' >
                    <h1 className=''>{story.title}</h1>
                  </div>
                  <div className=' mb-5'>
                    <hr  className='line' style={{color:'grey ',marginTop:'80px'}}/>
                  </div>
                  <div>
                    <Image
                    src={story.image}
                    alt=''
                  className='w-100 img2'
                    />


                  </div>
                  <div className='mt-5'>
                    <p className='texts'style={{fontSize:'28px'}}>{story.paragraph}</p>

                  </div>

                 </div>


              </div>
    

  
  
    
  

    <Footer/>
    </>
  )
}

import React from 'react'
import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Navbar2 from '../Component/Navbar2'


export default function Edit() {

   const [title,SetTitle]=useState('');
   const [tags,SetTags]=useState('');
      const [paragraph,SetParagraph]=useState('');



      const {id} = useParams();

        const url=`http://localhost:9020/api/v1/story/${id}`
        const token= JSON.parse(localStorage.getItem("token"));
      const fetchStory=  async ()=>{
        const res= await fetch(url,{
        headers:{
          'authorization':`Bearer ${token}`
        },
      })
      const {story}= await res.json();
      SetTitle(story.title);
      SetTags(story.tags);
      SetParagraph(story.paragraphs);
         }
      

      ;
      useEffect(() =>{fetchStory()},[]);

      const redirect=useNavigate();

      const HandleUpdate= async (e)=>{
        const url=`http://localhost:9020/api/v1/story/${id}`
        const token= JSON.parse(localStorage.getItem("token"));
        e.preventDefault();
        const res= await fetch(url,{
          method: 'PATCH',
          
          headers:{
            "Content-Type":"application/json",
            'authorization':`Bearer ${token}`
           },
           body: JSON.stringify({title, tags, paragraph}) 
           
        })
        const data=await res.json();
        console.log(data);
          redirect('/Mystory')
      }


  return (

    <>
        <Navbar2 
    text1="Stories"
    text2="Contact"
      text3="Logout"
    />


      <div className='mt-5 px-5 py-5  align-items-center'>
      <form>
      <label htmlFor="title" className='px-4 fs-5 fw-1'></label><br/>
      <div className='position-relative'>
        <input type="text" className='w-100 fs-5 border2 ' required id='title' value={title} onChange={(e)=>SetTitle(e.target.value)} style={{height:'61px',marginTop:'30px'}}/>
        <h3 className='position-absolute px-3'style={{bottom:'10px',color:'#A1A0A0'}}>Title:</h3>
        </div>
    
        <label htmlFor="tags"></label>
        <div className='position-relative'>
        <input type="text" className='w-100 fs-5 border2' required id='tags ' value={tags} onChange={(e)=>SetTags(e.target.value)}  style={{height:'61px',marginTop:'30px'}}/>
        <h3 className='position-absolute px-3'style={{bottom:'10px',color:'#A1A0A0'}}>Tags;</h3>
        </div>
        <label htmlFor="paragraph"></label>
        <textarea type="text" className='w-100 fs-5 border2' required id='paragraph' value={paragraph} onChange={(e)=>SetParagraph(e.target.value)}  style={{height:'568px',marginTop:'30px'}}/>
       
      </form>

      <div className='d-flex align-items-center justify-content-center mt-5' >  
        <button onClick={HandleUpdate} type='submit' className='text-white fw-2' style={{width:'290px',height:'47px' ,background:'#0086B0',fontSize:'25px'}}>Publish Story</button>
      </div>

      </div>

    </>
  )
}

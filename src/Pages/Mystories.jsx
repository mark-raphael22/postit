import {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar2 from '../Component/Navbar2'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {FaRegEdit} from 'react-icons/fa'
 
export default function Mystories() {

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

    const redirect=useNavigate();

    const handleDelete = (id) => {
      const url = `http://localhost:9020/api/v1/story/${id}`;
      const token= JSON.parse(localStorage.getItem("token"));
      fetch(url, {
        method: 'DELETE',
        headers:{
          'authorization':`Bearer ${token}`
         }
      }).then (() =>{
        redirect('/Dashboard')
      })
    }

  return (
    

    <>
         <Navbar2 
    text1="Stories"
    text2="Contact"
      text3="Logout"
    />
    <div className='mt-5 align-items-center  px-5'>
      <div className='d-flex py-5 align-items-center justify-content-between   '>
        <div><h1>My Stories</h1></div>
        <Link to='/CreateStory'>
        <div><button className='text-white createstory'style={{ width:'182px',height:'45px',}}>Write Story</button></div>
        </Link>
      </div>
      <div className='d-flex gap-5'>
        <h4 style={{fontSize:'27px',color:'dark'}}>All</h4>
        <h4 style={{color:'#757575',fontSize:'27px'}}>Drafts</h4>
        <h4 style={{color:'#757575',fontSize:'27px'}}>Published</h4>
       
      </div>
      <hr className='line' style={{color:'grey '}}/>




    </div>
    {story.map((stories)=> {
      const { _id, title, paragraph, tags}=stories;

      return (
        <div key={_id} className='px-5'>
      <div className='mt-5  align-items-center d-flex justify-content-between'>
        <p className='mt-3 tit'>{title}</p>
        <div className='d-flex gap-3  '>

        <Link to={`/Edit/${_id}`}>
          <button className= 'sbtn fs-5 mt-3 text-white'><FaRegEdit/> Edit</button>
          </Link>
          <button className='sbtn2 fs-5 mt-3 text-white' onClick={()=>handleDelete(_id)}>Delete <RiDeleteBin5Line/> </button>
            </div>
          
          


      </div>
      <div className='mt-3'>
            

              <p className='texts'>{paragraph}</p>
              <p className='texts'>{tags}</p>



        </div>
        
      </div>
      );

    })}
    </>
  )
}




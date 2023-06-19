import {useState} from 'react'
import Navbar2 from '../Component/Navbar2'
import Logo from '../images/edit.svg'
import Footer from '../Component/footer'
import { useNavigate } from 'react-router-dom'


export default function CreateStory() {

  const [title,SetTitle]=useState('')
  const  [tags,SetTags]=useState('')
  const  [paragraph,SetParagraph]=useState('');
  const [image, SetImage]=useState(null);



  
    const url = 'http://localhost:9020/api/v1/story'
    const token= JSON.parse(localStorage.getItem("token"));


 
    
  const redirect = useNavigate();

 
  const HandleCreate = async (e)=>{
    e.preventDefault();
    
    const formData= new FormData();
    formData.append('title',title);
    formData.append('paragraph',paragraph);
    formData.append('tags',tags);
    formData.append('image',image);
    try {
      const res= await fetch (url,{
        method: 'POST',
         body:formData,
         headers:{
          'authorization':`Bearer ${token}`
         },
       
        
      });
      await res.json();
      ;
        redirect('/Mystory')
     
    
    } catch (error) {
      console.log(error);
    }


  }
  return (
    <>
            <Navbar2 
    text1="Stories"
    text2="Contact"
      text3="Logout"
    />

    <div className=' mt-5 px-5 align-items-center '>
            <div className='py-5   '>

             <div>
                <h1 className='wel'>Create <span style={{color: "#0086B0"}}>Story</span></h1>
             </div>
                <div className='py-2 '>
                    <form encType='multipart/form-data' onSubmit={HandleCreate}>
                    <label htmlFor="title" className='fw-1 title'>Title</label>
                    <div className='position-relative'>
                    <input type="text" name='title' value={title}   onChange={(e)=>SetTitle(e.target.value)} required id='title' placeholder='Please Enter a Title' className='w-100 fs-5 ps-3 line ' style={{height:'59px',borderRadius:'7px',}}/>
                    <img src={Logo} alt="" className='position-absolute' style={{left:'18px',height:'22px',bottom:'44px'}}/>
                    </div>
                    <label htmlFor="tags"className='mt-4 fw-1 title'>Tags</label>
                    <div className='position-relative'> 
                    <input type="text" name='tags' required  value={tags} onChange={(e)=>SetTags(e.target.value)} id='tags' placeholder='Please Type a Tag' className='w-100 fs-5 ps-3 line  'style={{height:'59px',borderRadius:'7px',}}/>
                    <img src={Logo} alt="" className='position-absolute' style={{left:'18px',height:'22px',bottom:'44px'}}/>
                    </div>
                    <label htmlFor="tags"className='mt-4 fw-1 title'>Paragraph</label>
                    <div className='position-relative'> 
                    <textarea type="text" name='paragraph' value={paragraph} onChange={(e)=>SetParagraph(e.target.value)} required id='paragraph' placeholder='Write a Story ..... ' className='w-100 fs-5 ps-3 line2 'style={{height:'568px',borderRadius:'7px',}}/>
                    <img src={Logo} alt="" className='position-absolute' style={{left:'18px',height:'22px',bottom:'559px'}}/>
                    </div>
                    <label htmlFor="image"></label>
                    <input type="file" accept='image/*' name='image' id='image' onChange={(e)=>SetImage(e.target.files[0])} className='mt-5  fw-1 title5 border-none ps-3 rounded-5' placeholder='Choose File' style={{borderRadius:'5px'}}/>
                    <div className=' align-items-center d-flex  justify-content-center mt-5' >
                        <button  type='submit' className='text-white fw-2' style={{width:'290px',height:'47px' ,background:'#0086B0',fontSize:'25px'}}>Publish Story</button>
                    </div>
                   
                    </form>
             </div>
            </div>
        <Footer/>
    </div>

    
    </>
  )
}

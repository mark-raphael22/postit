import React from "react";
import { Container, Button } from "react-bootstrap";
import Logo from "../images/Rectangle 5.svg";
import Navhead from "../Component/Navhead";
import { Link } from "react-router-dom";
import Logo2 from "../images/Group 5 (1).svg";
import Logo3 from "../images/smallimage2.svg";
import Logo4 from "../images/Group 5 (2).svg";
import Logo5 from "../images/tecnology.svg";
import Logo6 from "../images/techsmall.svg";
import trypos from '../images/Try Postit..svg'
import Footer from "../Component/footer";


export default function Home() {
  return (
    <>
    
      <Navhead
        text1="Stories"
        text2="Contact"
        text3="Sign In"
        text4="Get Started "

        
      />
   
     

      {/* for the image */}
      <div className=" mt-3 py-5 w-100">
        {/* for the text */}
        <div className=" picture   py-5 align-items-center">
          <div className="  align-items-center  mt-5  p-5">
            <div>
              <h1 className="w-100 fw-bolder text ">Stay Curious.</h1>
            </div>
            <p className="textp">
              {" "}
              no go they whine tech oo, happiness run from there<br></br>{" "}
              because it highly requires constant practice and the level of
              dedocation you show into it could be .<br></br> really fustrating
              at times but never the less give up on it <br></br> trust me he
              could be another step up for you inlife.
            </p>
            <Link to="/SignUp">
              <Button
                type="submit"
                size="sm"
                className="but"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* <div className='px-5'>
      <img src={Logo} alt=""className='img-fluid px-5 align-items-center mt-5 w-100 ' />
      </div>
       */}
        <div className="  px-5  mt-5  ps-5 parent">
          <Container className="d-flex  boder   ">
            <Container className=" d-flex ">
              <div className="px-3 mt-2 d-flex width-100 ">
                <img src={Logo} alt="" />

                <div className="">
                  <img src={Logo2} alt="" className="mt-3 ps-3" />
                  <h5 className="mt-3 ps-3">
                    The 20 Biggest Fashion <br></br>Companies In Nigeria 2023
                  </h5>
                </div>
              </div>
              <div className="gap-5 ">
                <div className="px-3 mt-2 d-flex ps-5 width-100 ">
                  <img src={Logo3} alt="" />

                  <div className="">
                    <img src={Logo4} alt="" className="mt-3 ps-3" />
                    <h5 className="mt-3 ps-3">
                      The 20 Biggest Fashion <br></br>Companies In Nigeria 2023
                    </h5>
                  </div>
                </div>
              </div>
              <div className="gap-5">
                <div className="px-3 mt-2 d-flex ps-5  ">
                  <img src={Logo5} alt="" />

                  <div className="">
                    <img src={Logo6} alt="" className="mt-3 ps-3" />
                    <h5 className="mt-3 ps-3">
                      The 20 Biggest Fashion <br></br>Companies In Nigeria 2023
                    </h5>
                  </div>
                </div>
              </div>
            </Container>
          </Container>

        </div>
        <div className="px-5 mt-5 ps-5">
          <div className="d-flex  align-items-center mt-5 justify-content-center boders background">
            <div className=" ">
            <div className=" text-center"style={{height:'145px'}}>
            <img src={trypos} alt=""className=" "style={{}} />
            <div className="mt-3">
              <h4 className="tert">Do you want to write or discover stories from writers from any topics? </h4>
            </div>
            <div className="d-flex justify-content-center mt-5 post">

          <input type="text"  placeholder='Enter your email address' /><Link to="/SignUp">
             <button className="btn_create text-white">Get Started</button></Link>
              </div>
            
            </div>
           
            </div>
           
          </div>
        </div>
      </div>

      <Footer/>
    </> 

  );
}

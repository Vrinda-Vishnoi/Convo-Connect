import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareYoutube } from "react-icons/fa6";

const Lower = () => {
  return (
    <div className='Lower'>
      <div className="about">
        <h1>About Company</h1>
        <h2>
          ConvoConnect
          <p><i>Sign Up Now!!!</i></p>
        </h2>
        <p>Automate expert-evaluated asynchronous video interviews and remote live coding, and provide structured comments in as little as five minutes. Utilize our integrated platform to outsource screening on a wide scale.</p>
        <a href="#"><FaFacebook style={{fontSize:'2rem', color:'orange'}} /></a>
        <a href="#"><FaSquareXTwitter style={{fontSize:'2rem' ,color:'orange'}}/></a>
        <a href="#"><CgMail style={{fontSize:'2rem',color:'orange'}}  /></a>
        <a href="#"><TiSocialLinkedinCircular  style={{fontSize:'2rem',color:'orange'}} /></a>
        <a href="#"><FaSquareYoutube style={{fontSize:'2rem',color:'orange'}}  /></a>
      </div>



      <div className="Company">
        <h1>Company</h1><br />
        <a href="">We're hiring</a><br />
        <a href="#">Mission</a><br />
        <a href="#">Slack Community</a><br />
        <a href="#">Help center</a><br />
        <a href="#">Contact Us</a><br />
        <a href="#">Privacy Policy</a><br />
        <a href="#">Our terms</a><br />

      </div>
      <div className="Use Cases">
        <h1>Use Cases</h1><br />
        <a href="">System design interviews</a><br />
        <a href="#">Product manager interviews </a><br />
        <a href="#">Lateral hiring </a><br />
        <a href="#">Campus hiringr</a><br />


      </div>

      <div className="posts">
        <h1>Solutions</h1>
        <a href="#"><span><br /></span>Startups</a>
        <a href="#"><span><br /></span>IT staffing</a>
        <a href="#"><span><br /></span>IT services</a>
        <a href="#"><span><br /></span>Campuses</a>
        <a href="#"><span><br /></span>Coding Schools</a>
      </div>
      <div className="contact">
        <h1>Contact us</h1>
        <p>123 New Line, London UK</p>
        <p>convoconnect@gmail.com</p>
        <p>xxxxxxxxxx<br />+44 00 00 1234</p>

      </div>

    </div>

  )
}

export default Lower

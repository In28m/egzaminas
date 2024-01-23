
import React from 'react';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from 'react-icons/si';
import { FaCheckDouble, FaArrowRightLong } from 'react-icons/fa6';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram   } from 'react-icons/ti';


import './home.scss';

const Home = () => {
  return (
    <section className='container'>
      <div className='travelLogo'>
        <Link to="/" className='logo'>
          <h1><SiYourtraveldottv />Travel</h1>
        </Link>
      </div>

      <div className="btnDiv">
        <button className='btn'>
          <Link to="/check-in">Check in <FaCheckDouble className='icon' /></Link>  
        </button>

        <button className='btn'>
          <Link to="/get-start">Get started <FaArrowRightLong className='icon' /></Link>
        </button>
      </div>

      <div className="soc-media">
        <TiSocialFacebook className='fb' />
        <TiSocialLinkedin className='lin' />
        <TiSocialTwitter className='twit' />
        <TiSocialInstagram  className='insta' />
      </div>
    </section>
  )
}

export default Home;

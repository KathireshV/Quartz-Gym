import React from 'react';
import './Footer.css';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className='footer-container' id='footer'>
      <section className='footer-subscription'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              QUARTZ
            </Link>
          </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Services : <CallIcon className='iiii'/> 91+ 1408921336</Link>
            <Link to='/'>Queries : <CallIcon className='iiii'/>91+ 1456248651</Link>
            <Link to='/'><MailIcon className='iiii'/>  Email : quartz@gmail.com</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/'><InstagramIcon/> Instagram</a>
            <a href='https://www.facebook.com/'><FacebookIcon/> Facebook </a> 
            <a href='https://www.twitter.com/'><XIcon/> Twitter</a>
          </div>
        </div>
      </div>
      <br/>
      <div className='footer-link-wrapper'>
        <h4 style={{color:'white',wordSpacing:"5"}}>
          Australia         &nbsp;&nbsp;&nbsp;&nbsp;
          France            &nbsp;&nbsp;&nbsp;&nbsp;
          Germany           &nbsp;&nbsp;&nbsp;&nbsp;
          Italy             &nbsp;&nbsp;&nbsp;&nbsp;
          Japan             &nbsp;&nbsp;&nbsp;&nbsp;
          Netherlands       &nbsp;&nbsp;&nbsp;&nbsp;
          Poland            &nbsp;&nbsp;&nbsp;&nbsp;
          Singapore         &nbsp;&nbsp;&nbsp;&nbsp;
          United Kingdom    &nbsp;&nbsp;&nbsp;&nbsp;
          United States
        </h4>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <p className='website-rights'>QUARTZ © 2016</p>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

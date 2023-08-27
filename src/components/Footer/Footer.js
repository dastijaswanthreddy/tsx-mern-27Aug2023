import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
       <div style={{display: 'flex',justifyContent: 'center',marginTop: '7px'}}>
          <div className='footer-icons'>
            <a href="mailto:jaswanthreddydasti@gmail.com" target="_blank" rel="noopener noreferrer" ><i className="fa-solid fa-envelope"></i></a>
          </div>
          <div className='footer-icons'>
            <a href="https://www.facebook.com/dastijr/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-facebook"></i></a>
          </div>
          <div className='footer-icons'>
             <a href="https://www.linkedin.com/in/dastijr/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className='footer-icons'>
             <a href='https://github.com/dastijaswanthreddy' target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-github"></i></a>
          </div>
          <div className='footer-icons'>
             <a href="https://www.instagram.com/dastijr/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-instagram"></i></a>
          </div>
       </div>
        <p>Made With <img src='https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif' alt='#' width='30px'/> By Jaswanth Reddy</p>
    </div>
  )
}

export default Footer
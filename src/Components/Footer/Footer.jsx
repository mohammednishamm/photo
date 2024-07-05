import React from 'react'
import './Footer_style.css'
import './Footer_media.css'


// __________________________________________________________
import RightArrow from './images/right-chevron.png'

import coupleImgOne from './images/carly-rae-hobbins-zNHOIzjJiyA-unsplash.jpg'
import coupleImgTwo from './images/giorgio-trovato-6rKkr2fh2-I-unsplash.jpg'
import coupleImgThree from './images/priscilla-du-preez--8UEuVWA-Tk-unsplash.jpg'
import coupleImgFour from './images/roberto-nickson-3AQoI70U9FQ-unsplash.jpg'
// _________________________________________________________________________________


// Social Media icons___________________________________
import FbIcon from './images/facebook-app-symbol.png'
import InstaIcon from './images/instagram-symbol.png'
import PinterestIcon from './images/pinterest.png'
import MailIcon from './images/envelope.png'

// right symbol
import nextIcon from './images/next.png'
// _____________________________________________



const Footer = () => {

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (

    <>
      <div className=' to-top-div' onClick={scrollToTop}>
        Back to top
      </div>

      <footer className=' col p-md-4 d-flex flex-column align-items-center  footer-main-div'>

        <div className='col-10 d-flex  footer-headlines-div'>

          <div className='col-12 col-md-7  p-3 footer-headline-left-div'>
            <h1>All the pretty on the daily:</h1>
            <h1>THE LEE INSTAGRAM</h1>
          </div>

          <div className='col-md-5 p-3 d-none d-md-flex justify-content-end align-items-end  footer-headline-right-div'>
            <span>FOLLOW ALONG @LEEPHOTOGRAPHY</span>
            <img src={RightArrow} alt="" />
          </div>

        </div>

        <div className='col-10 p-2 p-md-3   d-flex justify-content-evenly  align-items-center  footer-images-div'>
          <img src={coupleImgOne} className='  img-fluid ' alt="" />
          <img src={coupleImgTwo} className='  img-fluid ' alt="" />
          <img src={coupleImgThree} className='  img-fluid ' alt="" />
          <img src={coupleImgFour} className='  img-fluid ' alt="" />
        </div>

        <div className='col-10 d-flex p-3  address-mail-contact-main-div'>

          <div className='col-md-4 p-3 d-none d-md-flex  justify-content-center align-items-end bg-body  mail-div'>
            <span>ljphorography@gmail.com</span>
          </div>

          <div className='col-md-4 p-3 text-center d-flex flex-column align-items-center  address-div'>
            <h3>PHOTOGRAPHY</h3>

            <p>Based in South Louisiana, but travels to MS, FL, UT, Europe, and more.</p>

            <div className=' col-8  d-flex justify-content-evenly align-items-center  socialmedia-icons-div'>
              <img src={FbIcon} alt="" />
              <img src={InstaIcon} alt="" />
              <img src={PinterestIcon} alt="" />
              <img src={MailIcon} alt="" />

            </div>

          </div>

          <div className='col-md-4 p-3 d-none d-md-flex flex-column  justify-content-end align-items-end   journal-div'>

            <p>READ THE LATEST ON THE JOURNAL</p>

            <div>
              <span>take me there</span>
              <img src={nextIcon} alt="" />
            </div>

          </div>

        </div>


      </footer>

      <div className='col-12 p-3 d-flex justify-content-center  align-items-center footer-bottom-div'>
        Lijith Photography 2014 - 2021
      </div>

    </>

  )
}

export default Footer

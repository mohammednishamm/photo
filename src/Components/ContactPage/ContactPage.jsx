import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './ContactPage_style.css'
import './ContactPage_media.css'
import { Audio } from 'react-loader-spinner'

import SweetAlert2 from 'react-sweetalert2';
import Spinner from 'react-bootstrap/Spinner';


// Ad Photos______________________________________________________
import photoOne from './images/anna-vi-QUi84upBhoc-unsplash.jpg'
import photoTwo from './images/nathan-dumlao-5BB_atDT4oA-unsplash.jpg'

// Thanks Giving box __________________________________________________
import cheersImg from './images/cheers1.jpg'




const ContactPage = () => {

  const [swalProps, setSwalProps] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [currentImage, setCurrentImage] = useState('');

  const [inputValues, setInputValues] = useState({})

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    eventType: '',
    budget: '',
    hearAboutUs: '',
    TellAboutEvent: ''
  });

  console.log(formData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const requiredFields = ['name', 'email', 'phone', 'eventDate', 'eventLocation', 'eventType', 'budget', 'hearAboutUs', 'TellAboutEvent'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setSwalProps({
          show: true,
          title: 'Error',
          text: `Please fill out the ${field} field.`,
          icon: 'error',
          onConfirm: () => setSwalProps({ show: false }),
        });

        return;
      }
    }
    setIsLoading(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwOeGS7Kr0e0UNcPhc0zvujR2Idq60JV-b9oBEvyKJymQ_n7Pj_ozdlZxk74ZyGBje0/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        // alert('Form submitted successfully');
        setSwalProps({
          show: true,
          title: 'Form Submitted',
          text: 'Your form was submitted successfully!',
          icon: 'success',
          onConfirm: () => window.location.reload(),
        });

      } else {
        setSwalProps({
          show: true,
          title: 'Error',
          text: 'There was an error submitting your form.',
          icon: 'error',
        });
      }
    } catch (error) {
      setSwalProps({
        show: true,
        title: 'Error',
        text: 'There was an error submitting your form.',
        icon: 'error',
      });
      console.error(error);
    }
    finally {
      // Reset loading state
      setIsLoading(false);
    }
  };


  // Define an array of image URLs
  const imageUrls = [
    photoOne,
    photoTwo,
  ];

  // Define a state to track the index of the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the image after some seconds
  useEffect(() => {
    // Define a timer to change the image every 5 seconds (5000 milliseconds)
    const timer = setInterval(() => {
      // Increment the index to get the next image
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Change image every 5 seconds

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearInterval(timer);
  }, [currentIndex, imageUrls.length]);

  // Update the current image URL when the index changes
  useEffect(() => {
    setCurrentImage(imageUrls[currentIndex]);
    console.log(inputValues)
  }, [currentIndex, imageUrls]);


  return (

    <>
      <div className='container-fluid p-0 contact-Ad-photos-div'>
        <img className=' img-fluid ' src={currentImage} alt="" />

      </div>


      {/* Contact Description ________________________________________________ */}
      <div className='container-fluid p-4 p-md-5 d-flex justify-content-center  contactUs-description-div'>
        <div className='col-md-6 p-3  p-md-4 gap-3 d-flex flex-column justify-content-between'>
          <h1>Contact Us</h1>
          <span>INQUIRE ABOUT YOUR UPCOMING EVENT</span>
          <p>We're absolutely thrilled that you're considering us to capture your upcoming event. Photography holds a unique place as one of the few tangible items you'll have to remember your special occasion. It not only preserves cherished family memories but is also a responsibility we hold with the utmost care and dedication. Please take a moment to complete the contact form below, and let's start a conversation about how we can make your event unforgettable through our lens.</p>
        </div>
      </div>



      {/* Contact Form  _____________________________________________________________________*/}

      <form onSubmit={handleSubmit} className='container-fluid p-5 d-flex flex-column align-items-center  contact-form-div'>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Full name *</label>
          <input className=' w-100 ' name='name' value={formData.name} onChange={handleChange} type="text" placeholder='Your Name Here' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Email *</label>
          <input className=' w-100 ' name="email" value={inputValues.email} onChange={handleChange} type="text" placeholder='Email Here' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Phone number</label>
          <input className=' w-100 ' name='phone' value={formData.phone} onChange={handleChange} type="text" placeholder='Your Phone number' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Event date</label>
          {/* <input className=' w-100 ' type="text" placeholder='MM/DD/YY' /> */}
          <input className=' w-100  date-input' name='eventDate' value={formData.eventDate} onChange={handleChange} type="date" placeholder='MM/DD/YY' />

        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Event Location</label>
          <input className=' w-100 ' name='eventLocation' value={formData.eventLocation} onChange={handleChange} type="text" placeholder='Event Location Address' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">What type of session are you looking for?</label>
          {/* <input className=' w-100 ' type="text" placeholder='select an option' /> */}

          <select name="eventType" value={formData.eventType} onChange={handleChange}>

            <option value="">Select an option</option>
            <option value="Event">Event</option>
            <option value="Family">Family</option>
            <option value="Party">Party</option>
            <option value="Design">Design</option>

          </select>

        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Budget</label>
          <input className=' w-100 ' name='budget' value={formData.budget} onChange={handleChange} type="text" placeholder='$1000' />
        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">How did you hear about us?</label>
          {/* <input className=' w-100 hear-about-input' type="text" placeholder='Select an option' /> */}

          <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} >
            <option value="">Select an option</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
          </select>

        </div>

        <div className='col-12 col-md-8 p-3  d-flex flex-column  justify-content-evenly   contact-form-sub-div'>
          <label htmlFor="">Tell me more about your session or event</label>
          <textarea cols="10" rows="3" name='TellAboutEvent' value={formData.TellAboutEvent} onChange={handleChange} placeholder='   What are you envisioning?'></textarea>
        </div>

        <div className='col-md-4 p-5  d-flex justify-content-center form-button-div'>
          <button type='submit'>SEND</button>
        </div>
        <SweetAlert2 {...swalProps} />


        {isLoading &&
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }

      </form>



      {/* Thanks giving box___________________________________________________ */}


      <div className='container-fluid p-3 p-md-5 d-flex flex-wrap justify-content-evenly align-items-center   thanks-giving-box'>

        <div className='col-md-5 p-4 h-75 '>
          <h2>Thanks for contacting us.
            We will be in touch soon!
          </h2>
          <p>If you don't hear back within 48 hrs please email us at leephotography@gmail.com</p>

        </div>

        <div className='col-md-6 p-3 p-md-5 '>
          <img className='img-fluid w-md-100 ' src={cheersImg} alt="" />
        </div>
      </div>


    </>
  )
}

export default ContactPage


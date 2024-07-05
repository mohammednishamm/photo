import React, { useEffect, useState } from 'react'
import './Services_style.css'
import './Services_media.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'

// Services Ad photos____________________________________________________________
import PhotoOne from './images/kate-gPnlJYEb6VI-unsplash.jpg'
import PhotoTwo from './images/pars-sahin-GOCOhaYRjf0-unsplash.jpg'
// ______________________________________________________________________________


// Experience _____________________________________________
import weddingGroupPic from './images/asdrubal-luna-_i-nSeDMJYk-unsplash.jpg'

// FAQ___________________________________________________________________________
import weddingtableImg from './images/table.jpg'





const Services = () => {


    const [currentImage, setCurrentImage] = useState('');

    // Define an array of image URLs
    const imageUrls = [
        PhotoOne,
        PhotoTwo,
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
    }, [currentIndex, imageUrls]);

    return (
        <>
            <div className='services-back-image service-backImage'>

            </div>

            <div className='sevices-main'>

                {/* Services Ad photos _________________________________________________________ */}

                <div className='continer-fluid p-0 service-ad-photos-div'>
                    <img className='img img-fluid ' src={currentImage} alt="" />
                    <h1 className='services-logo-text'>LEE PHOTOGRAPHY</h1>

                </div>

                {/* ______________________________________________________________________ */}



                {/* About Experience Box ____________________________________________ */}

                <div className=' container-fluid p-5 d-flex flex-wrap  justify-content-evenly  experience-main-div'>

                    <div className='col-md-4 text-white experience-description-div'   >
                        <h1>Lee  Experience</h1>

                        <p>As a photographer, my primary goal is to ensure that your wedding journey is as stress-free as possible. From the very beginning to the final moments, I'm committed to guiding you every step of the way. To foster a comfortable and trusting relationship, most of our packages include a complimentary engagement session.</p>

                        <p>This serves as an opportunity for us to meet, get acquainted, and allow you to become at ease in front of my camera. Consequently, when I arrive on your wedding day, I'm not just a stranger but a familiar face ready to capture your special moments.</p>

                    </div>

                    <div className='col-md-6 p-3'>
                        <img className=' w-100' src={weddingGroupPic} alt="" />
                    </div>

                </div>

                {/* Our Offering_______________________________________________________ */}

                <div className=' container-fluid p-5 d-flex justify-content-center our-offering-main-div'>
                    <div className='col-md-7 p-3 text-center  our-offering-sub-div'>
                        <h2>Our Offerings</h2>
                        <span>WEDDING / ENGAGEMENTS / DESTINATIONS / FAMILIES / SOCIAL</span>
                        <p>We provide a diverse range of services, and our passion for travel shines through in our work. We specialize in wedding photography that embraces an organic approach, capturing moments exactly as they unfold, with a genuine and unscripted style. We capture family sessions  with a lifestyle approach, aiming to authentically reflect your family's unique personality and dynamics.</p>
                        <span>OUR WEDDING INVESTMENTS BEGIN AT $4800
                            OUR FULL PORTRAIT SESSIONS BEGIN AT $500
                        </span>

                    </div>
                </div>



                {/*  Chat ? Enquire box ________________________________ */}

                <div className='contianer-fluid p-md-5 d-flex  justify-content-center  inquire-main-div'>
                    <div className='col-md-8  p-5  inquire-sub-div'>
                        <h1>Are you ready to chat?</h1>

                        <span>INQUIRE HERE</span>
                        <img src={require('./images/right-arrow.png')} alt="" />
                    </div>
                </div>


                {/* FAQ box ___________________________________________________________----- */}

                <div className=' container-fluid p-5 d-flex flex-wrap  justify-content-evenly FAQ-main-div'>

                    <div className='col-md-6 d-flex p-4 '>
                        <img className='img img-fluid ' src={weddingtableImg} alt="" />
                    </div>

                    <div className='col-md-4 text-white FAQ-decription-div'>
                        <h1>FAQ 01 / How do we receive our photos? Do we receive all of them?</h1>

                        <p>
                            All of your photos are uploaded to an online gallery that you will have access to. On that gallery, you'll be able to download the entire gallery to a computer or individual photos to your phone. It's a very simple process! You also have the option to buy prints, canvases, and other goodies directly on the gallery, but you're not obligated to. Depending on the type of session you book, we typically promise about 100 images per hour (this may vary).</p>
                    </div>

                </div>


                


            </div>



        </>
    )
}

export default Services
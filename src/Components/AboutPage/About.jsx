import React, { useEffect, useState } from 'react'
import './About_style.css'
import './About_media.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'

// Ad Photos____________________________________________________________
import photoOne from './images/ivan-cabanas--E2nk5pNJ1g-unsplash.jpg'
import photoTwo from './images/scott-webb-Wa0tqJ8vvuw-unsplash.jpg'

// About_________________________________________________________________________
import coupleHands from './images/drew-coffman-llWjwo200fo-unsplash - Copy.jpg'
import photographer from './images/grapher.jpg'

// Portfolio part____________________________________________________________________
import rightArrow from './images/right-arrow.png'
import girlDesertImg from './images/neom-8Ln8oMv_LLI-unsplash.jpg'

const About = () => {

    const [currentImage, setCurrentImage] = useState('');

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
    }, [currentIndex, imageUrls]);


    return (
        <>

            <div className='container-fluid about-backside-image about-backImage'>

            </div>

            {/*_______________________________________________________________  */}


            <div className="aboutPage-main">


                {/* About Ad Photos____________________________________ */}
                <div className=' container-fluid p-0 d-flex justify-content-center  align-items-center  about-potos-ad-div'>
                    <img className='img img-fluid' src={currentImage} alt="" />
                    <h1 className='about-logo-text'>LEE PHOTOGRAPHY</h1>
                </div>
                {/* ______________________________________________________________ */}





                {/* About Details___________________________________________________________________________________ */}

                <div className='container-fluid pt-5 gap-5 d-flex flex-column  justify-content-center align-items-center about-content-div'>

                    <div className='container row-cols-md-6  d-flex justify-content-between  flex-wrap  about-content-top-div' >

                        <div className='col-md-4 p-3  about-top-description-div'>

                            <h4 className=' text-white'> Creating intimate and refined images for the timeless couple.</h4>
                            <p>Driven by authentic connections and dedicated to crafting enduring memories, Alexi is a proficient photographer adept in both film and digital mediums. Her expertise lies in capturing intimate, elegant, and timeless imagery that resonates deeply with couples in love.</p>

                        </div>

                        <div className='col-md-7  d-flex justify-content-center align-items-center  about-top-image-div'>
                            <img className='img img-fluid' src={coupleHands} alt="" />

                        </div>

                    </div>

                    {/* Bottom_________________________________________________________ */}

                    <div className=' col-10 p-md-3  row-cols-md-6 d-flex flex-wrap-reverse  about-content-bottom-div'>

                        <div className='col-md-5 p-5 p-md-5 d-flex justify-content-center align-items-center  about-bottom-image-div'>
                            <img className='img  img-fluid d-flex justify-content-center' src={photographer} alt="" />

                        </div>

                        <div className='col-md-5 p-3  p-lg-5 text-center  text-md-start d-flex flex-column  justify-content-between   text-white about-bottom-description-div'>

                            <h2 className=' text-white '> LIJITH J</h2>
                            <span>FOUNDER + PHOTOGRAPHER</span>
                            <p>My time is divided between two enchanting locations: the serene landscapes of South Louisiana and the picturesque Gulf Coast of Mississippi. I'm often accompanied by my son, Grayson, and myl golden retriever , Rose'.</p>
                            <p>During my leisure time, I relish the quieter moments in life. I find joy in watching sunsets, savoring quality family time, and exploring the world through travel. My ideal Sunday would involve a leisurely brunch followed by a visit to a charming farmer's market</p>
                            <p>In my childhood, I would run around the yard, capturing everything and everyone with disposable cameras. This early experience ignited my deep passion for film photography.</p>

                        </div>
                    </div>



                </div>




                {/* About gap view__________________________________________________________________ */}

                <div className=' container-fluid p-3 d-flex justify-content-center  about-gapview-div'>
                    <div className='container col-md-2 p-3'>
                        <h1>Sunsets
                            Mimosas
                            Family
                            Traveling <br />
                            A Good Book
                            Brunch</h1>
                    </div>
                </div>
                {/* ________________________________________________________________________________ */}



                {/* About Portfolio _________________________________________________________________________ */}

                <div className=' container-fluid p-5 d-flex flex-wrap  justify-content-evenly  about-portfolio-div'>

                    <div className='col-md-5 p-5  about-portfolio-left-div'>
                        <h1>Get to know us & explore our recent travel galleries</h1>
                        <span>OUR PORTFOLIO</span>
                        <img src={rightArrow} alt="" />

                    </div>

                    <div className='col-md-6 p-4 d-flex justify-content-center  align-items-center'>
                        <img className='img img-fluid ' src={girlDesertImg} alt="" />
                    </div>

                </div>


            </div>


        </>
    )
}

export default About

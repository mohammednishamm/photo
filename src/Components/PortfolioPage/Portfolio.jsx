import React, { useEffect, useState } from 'react'
import './Portfolio_style.css'
import './Portfolio_media.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'


// Ad Photos____________________________________________________________________
import photoOne from './images/alvin-mahmudov-NSVJAAXOYHs-unsplash (1) (1) (1).jpg'
import photoTwo from './images/jeremy-wong-weddings-464ps_nOflw-unsplash (1) (1).jpg'
// ____________________________________________________________________________________

// Our Portfolio______________________________________________________________________

import pic1 from './images/all images/42752.jpg'
import pic2 from './images/all images/allef-vinicius-Iv3yJpmOmZc-unsplash.jpg'
import pic3 from './images/all images/jonathan-borba-SM5sKMxoJAs-unsplash.jpg'
import pic4 from './images/all images/jonathan-borba-XDpOvTZhDTg-unsplash.jpg'
import pic5 from './images/all images/jonathan-borba-i2gom1zDv5Y-unsplash.jpg'
import pic6 from './images/all images/jonathan-borba-pqcw351eV_U-unsplash.jpg'
import pic7 from './images/all images/mei-bakker-UgOSM6gye3E-unsplash (1).jpg'
import pic8 from './images/all images/olivia-bauso-30UOqDM5QW0-unsplash.jpg'
import pic9 from './images/all images/samantha-gades-2TdhwS6Y3pU-unsplash (1).jpg'

const Portfolio = () => {

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


    const portfolioImages = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
        pic9,
    ]

    return (
        <>

            <div className=' container-fluid p-0 portfolio-Ad-photos-div'>
                <img className=' img-fluid' src={currentImage} alt="" />

            </div>
            {/* ___________________________________________________________________________ */}


            {/* Our Portfolio Box _____________________________________________________________________  */}

            <div className='container-fluid p-5  d-flex justify-content-center Our-portfolio-main-div'>
                <div className='col-md-6 p-4 text-center'>
                    <h1>Our Portfolio</h1>
                    <span>WEDDING + COUPLES</span>
                    <p>Our approach to weddings is to authentically capture the unfolding moments as they happen. Our style is characterized by timelessness, an organic feel, and a touch of dreaminess, ensuring your memories are preserved beautifully for years to come.</p>
                </div>
            </div>
            {/* ________________________________________________________________ */}

            {/* Our Portfolio All Photos______________________________________________________________________ */}

            <div className='container-fluid p-5 d-flex justify-content-center  portfolio-images-main-div'>

                <div className=' gap-2 col-10  portfolio-images-gallery-div '>

                    <div className=' col-4 gap-2  image-column'>

                        <div className=' portfolio-image-div' >
                            <img className=' img-fluid ' src={pic1} alt="" />
                        </div>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic6} alt="" />
                        </div>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic9} alt="" />
                        </div>

                        
                    </div>


                    <div className='col-4 gap-2 image-column'>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic4} alt="" />
                        </div>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic3} alt="" />
                        </div>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic5} alt="" />
                        </div>

                    
                    </div>


                    <div className='col-4 gap-2 image-column'>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic7} alt="" />
                        </div>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic8} alt="" />
                        </div>

                        <div className='  portfolio-image-div' >
                            <img className=' img-fluid ' src={pic2} alt="" />
                        </div>
                       
                    </div>


                </div>

            </div>


        </>
    )
}

export default Portfolio
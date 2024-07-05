import React from 'react'
import './Blog_style.css'
import './Blog_media.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import Navbar from '../Navbar/Navbar'


const Blog = () => {


    return (
        <>

            <div className=' container-fluid blogPage-back-image-div blog-backImage'>

            </div>
            {/* ________________________________________________________________ */}

            <div className=' container-fluid p-0 blog-main'>



                {/* Blog Title______________________________________________________________________ */}
                <div className=' container-fluid p-5 d-flex justify-content-center align-items-center blog-title-main-div'>

                    <div className='col-md-6 p-5 text-center  d-flex flex-column align-items-center blog-title-sub-div'>
                        <span>LEE PHOTOGRAPHY</span>
                        <br />

                        <div className='line-div'>

                        </div>

                        <br />

                        <p>WELCCOME TO THE</p>

                        <h1>Lee Photography Blog</h1>
                    </div>
                </div>
                {/* ___________________________________________________________________________ */}




                {/*  Work Histories ___________________________________________________________________ */}

                <div className=' container-fluid p-3 p-md-5 work-history-main-div' >

                    <div className='container d-flex flex-column align-items-center   work-history-sub-div' >


                        <div className='col-md-10 p-md-3  text-center  workHistory-title-div'>
                            <span>JULY 5 , 2023</span>

                            <h1>MORGAN & JOSH | COVIGTON, LA</h1>
                            <br />
                            <span>FILED IN : <span className='filled-in-link'> WEDDING PHOTOGRAPHY </span></span>

                        </div>


                        <div className=' work-history-image-div'>
                            <img src={require('./images/work History images/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg')} alt="" />
                        </div>

                        <div className='col-12 col-md-7 p-5 d-flex justify-content-evenly align-items-center  work-history-bottom-div'>

                            <span>OPEN POST</span>

                            <div className=' col-7 openPost-Line'>

                            </div>

                            <img className='img-fluid' src={require('./images/work History images/next.png')} alt="" />


                        </div>

                    </div>
                </div>
                {/* ____________________________________________________________________________________________________________ */}

                {/*  Work Histories ___________________________________________________________________ */}

                <div className=' container-fluid p-3 p-md-5 work-history-main-div'>

                    <div className='container d-flex flex-column align-items-center   work-history-sub-div'>


                        <div className='col-md-10 p-md-3  text-center  workHistory-title-div'>
                            <span>JULY 5 , 2023</span>

                            <h1>MORGAN & JOSH | COVIGTON, LA</h1>
                            <br />
                            <span>FILED IN : <span className='filled-in-link'> WEDDING PHOTOGRAPHY </span></span>

                        </div>


                        <div className=' work-history-image-div'>
                            <img src={require('./images/work History images/olivia-bauso-30UOqDM5QW0-unsplash.jpg')} alt="" />
                        </div>

                        <div className='col-12 col-md-7 p-5 d-flex justify-content-evenly align-items-center  work-history-bottom-div'>

                            <span>OPEN POST</span>

                            <div className=' col-7 openPost-Line'>

                            </div>

                            <img className='img-fluid' src={require('./images/work History images/next.png')} alt="" />


                        </div>

                    </div>
                </div>
                {/* ____________________________________________________________________________________________________________ */}

                {/*  Work Histories ___________________________________________________________________ */}

                <div className=' container-fluid p-3 p-md-5 work-history-main-div'>

                    <div className='container d-flex flex-column align-items-center   work-history-sub-div'>


                        <div className='col-md-10 p-md-3  text-center  workHistory-title-div'>
                            <span>JULY 5 , 2023</span>

                            <h1>MORGAN & JOSH | COVIGTON, LA</h1>
                            <br />
                            <span>FILED IN : <span className='filled-in-link'> WEDDING PHOTOGRAPHY </span></span>

                        </div>


                        <div className=' work-history-image-div'>
                            <img src={require('./images/work History images/allef-vinicius-Iv3yJpmOmZc-unsplash.jpg')} alt="" />
                        </div>

                        <div className='col-12 col-md-7 p-5 d-flex justify-content-evenly align-items-center  work-history-bottom-div'>

                            <span>OPEN POST</span>

                            <div className=' col-7 openPost-Line'>

                            </div>

                            <img className='img-fluid' src={require('./images/work History images/next.png')} alt="" />


                        </div>

                    </div>
                </div>
                {/* ____________________________________________________________________________________________________________ */}


                

                {/* Pagination part ________________________________________________________________ */}
                <div className='container-fluid p-3 d-flex justify-content-center pagination-main-div'>

                    <div className=' col-6 p-2 d-flex  justify-content-between'>
                        <img src={require('./images/dot-left-arrow.png')} alt="" />
                        <img src={require('./images/dot-right-arrow (1).png')} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Blog
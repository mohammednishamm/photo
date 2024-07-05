import React, { useState } from 'react'

import './Navbar_style.css'
import './Navbar_media.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import { Link, Outlet } from 'react-router-dom'

import optionIcon from './images/horizontal-bars.png'
import closeIcon from './images/close (1).png'
import facebookIcon from './images/facebook-app-symbol.png'
import instaIcon from './images/instagram-symbol.png'
import pintersetIcon from './images/pinterest.png'
import mailIcon from './images/envelope.png'


const Navbar = () => {

    const [navModal, setNavModal] = useState(false)

    return (
        <>

            <div className='col-12 navigation-bar '>

                <div className='col-4  logo-div'>
                    <Link to={'/'} className='navbar-brand'><h3>PHOTOGRAPHY</h3></Link>

                    <img className='img-fluid nav-options-icon' src={optionIcon} onClick={() => setNavModal(true)} />

                </div>


                <div className='col-7 navigation-links-div'>

                    <Link to='/' className='nav-item'><span >HOME</span></Link>
                    <Link to='/about' className='nav-item'><span >ABOUT</span></Link>
                    <Link to='/portfolio' className='nav-item'><span >PORTFOLIO</span></Link>
                    <Link to='/services' className='nav-item'><span >SERVICES</span></Link>
                    <Link to='/contact' className='nav-item'><span >CONTACT</span></Link>
                    <Link to='/blog' className='nav-item'><span >BLOG</span></Link>
                    
                </div>





            </div>


            {
                navModal && (
                    <div className='container-fluid col p-0 nav-modal'>

                        <div className="col-12 nav-modal-head">
                            <h3 className='logo-text' >PHOTOGRAPHY</h3>
                            <img  src={closeIcon} onClick={() => setNavModal(false)} />
                        </div>


                        <div className='col-12 navModal-content-div'>
                            <div className='col-12 modal-navlinks-div'>

                                <Link to='/' className='modal-nav-item links' onClick={()=>setNavModal(false)}><span >HOME</span></Link>
                                <Link to='/about' className='modal-nav-item' onClick={()=>setNavModal(false)}><span >ABOUT</span></Link>
                                <Link to='/portfolio' className='modal-nav-item' onClick={()=>setNavModal(false)}><span >PORTFOLIO</span></Link>
                                <Link to='/services' className='modal-nav-item' onClick={()=>setNavModal(false)}><span >SERVICES</span></Link>
                                <Link to='/contact' className='modal-nav-item' onClick={()=>setNavModal(false)}><span >CONTACT</span></Link>
                                <Link to='/blog' className='modal-nav-item' onClick={()=>setNavModal(false)}><span >BLOG</span></Link>
                            


                            </div>

                            <div className='col-8 p-5 nav-Modal-footer'>

                                <div className='  social-media-icons-div'>
                                    <img src={facebookIcon} alt="" />
                                </div>
                                <div className='social-media-icons-div'>
                                    <img src={instaIcon} alt="" />
                                </div >
                                <div className='social-media-icons-div'>
                                    <img src={pintersetIcon} alt="" />
                                </div>
                                <div>
                                    <img src={mailIcon} alt="" />
                                </div>


                            </div>

                        </div>

                    </div>
                )

            }

           




            <Outlet />
        </>
    )
}

export default Navbar

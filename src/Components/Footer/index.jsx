import React from 'react'
import Logo from '../../assets/Logo.png';
import './style.css'

const Footer = () => {
  return (
       <footer className='mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='footer-1'>
                        <div><img src={Logo} alt="" /></div>
                        <p>Our vision is to provide convenience and help increase your sales business.</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='footer-2'>
                        <div>
                            <h4>About</h4>
                            <p>How it works</p>
                            <p>Featured</p>
                            <p>Partnership</p>
                            <p>Bussiness Relation</p>
                        </div>
                        <div>
                            <h4>Community</h4>
                            <p>Events</p>
                            <p>Blog</p>
                            <p>Podcast</p>
                            <p>Invite a friend</p>
                        </div>
                        <div>
                            <h4>Socials</h4>
                            <p>Discord</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='row'>
                <div className='col-6'>©2022 MORENT. All rights reserved</div>
                <div className='col-6'>
                    <span>Privacy & Policy</span>
                    <span>Terms & Condition</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
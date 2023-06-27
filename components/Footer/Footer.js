import React from 'react'
import './Footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer_wrapper py-5'>
      <div className='container'>
        <div className='row gx-2 footer-block-1'>
            <div className='col-12 col-lg-4 mb-4'>
                <div>
                    <Image src="/footer-logo.png" width={200} height={158} alt='footer logo' />
                </div>
                <div className='my-4 footer-text'>Subscribe to email alerts. We promise not to spam your inbox.</div>
                <div class="footer-input-group">
                    <input type="email" class="subscribe-input form-control" placeholder="Enter your email"/>
                    <span class="input-group-btn ml-auto">
                    <button class="btn subscribe-btn" type="submit">Subscribe</button>
                    </span>
                </div>
            </div>
           <div className='col-12 col-lg-8'>
                <div className='row gx-1 d-flex flex-wrap'>
                    <div className='col-6 col-md-4 mb-4 order-2 order-md-1'>
                            <div className='link-items'>
                                <div className='footer-main-text mb-4'>Information</div>
                                    <div className='footer-links footer-text'>Blog</div>
                                    <div className='footer-links footer-text'>Offers & Contest Details</div>
                                    <div className='footer-links footer-text'>Help & FAQs</div>
                                    <div className='footer-links footer-text'>About JewelOne</div>
                            </div>
                    </div>
                    <div className='footer-contact-block col-6 col-md-5 mb-4 order-3 order-md-2'>
                        <div className='footer-main-text mb-4'>Contact Us</div>

                                    <div  className='footer-links footer-text  d-flex gap-2'><span>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.7 16.4002C22.7 17.7002 21.6 18.8002 20.3 18.8002H6.09999L1.29999 23.6002V4.6002C1.29999 3.3002 2.39999 2.2002 3.69999 2.2002H20.4C21.7 2.2002 22.8 3.3002 22.8 4.6002V16.4002H22.7Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        </span> <span>Chat with Us</span></div>
                                        
                                        <div className='footer-links footer-text d-flex gap-2'><span>
                                        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26 20.1998V23.7998C26 25.0998 24.9 26.1998 23.6 26.1998C23.5 26.1998 23.4 26.1998 23.4 26.1998C19.7 25.7998 16.1 24.4998 13 22.4998C10.1 20.6998 7.6 18.1998 5.8 15.2998C3.7 12.1998 2.4 8.5998 2 4.8998C1.9 3.4998 2.9 2.3998 4.2 2.2998C4.3 2.2998 4.3 2.2998 4.4 2.2998H8C9.2 2.2998 10.2 3.1998 10.4 4.3998C10.6 5.5998 10.8 6.6998 11.2 7.7998C11.5 8.6998 11.3 9.6998 10.7 10.2998L9.2 11.7998C10.9 14.7998 13.4 17.2998 16.4 18.9998L17.9 17.4998C18.6 16.7998 19.6 16.5998 20.4 16.9998C21.5 17.3998 22.6 17.6998 23.8 17.7998C25.1 17.8998 26 18.9998 26 20.1998Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        </span> <span>1800 1033916</span></div>

                                        <div  className='footer-links footer-text d-flex gap-2'><span>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_661_816)">
                                            <path d="M25.999 5.00098H1.99902C1.72288 5.00098 1.49902 5.22483 1.49902 5.50098V22.501C1.49902 22.7771 1.72288 23.001 1.99902 23.001H25.999C26.2752 23.001 26.499 22.7771 26.499 22.501V5.50098C26.499 5.22483 26.2752 5.00098 25.999 5.00098Z" stroke="white"/>
                                            <path d="M26.246 5.24902L14.334 18.03C14.2931 18.074 14.2436 18.1091 14.1886 18.1331C14.1335 18.157 14.0741 18.1694 14.014 18.1694C13.954 18.1694 13.8946 18.157 13.8395 18.1331C13.7845 18.1091 13.7349 18.074 13.694 18.03L1.75104 5.24902" stroke="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_661_816">
                                            <rect width="27.999" height="27.999" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </span> <span>customercare@jewelone.in</span></div>
                    </div>
                    <div className='col-12 col-md-3 mb-4 order-1 order-md-3'>
                            <div className='mb-3 footer-main-text text-center-mobile'>
                            Swarna Shakti App Download
                            </div>
                            <div className="appStore d-flex gap-3 flex-md-column">
                                <div>
                                    <Image className='w-100 h-auto' width={133} height={43} src="/app-store.png" alt='App Store'/>
                                </div>
                                <div>
                                <Image className='w-100 h-auto' width={133} height={43} src="/google-play.png" alt='App Store'/>

                                </div>
                            </div>
                    </div>
                </div>
                <div className='row gx-2 follow-us'>
                    <div className='col-12 col-md-6 mb-4'>
                        <div className='footer-main-text'>Follow Us</div>
                        <div>
                            social links
                        </div>
                    </div>
                    <div className='col-12 col-md-6 footer-copy-text'>
                        <div className='footer-text'>
                        © 2023 JewelOne. All Rights Reserved.
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

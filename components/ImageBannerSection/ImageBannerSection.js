import React from 'react'
import './ImageBannerSection.css'
import Image from 'next/image'
const ImageBannerSection = () => {
  return (
    <div className='image-banner-section'>
        <div className='container-fluid px-0'>
            <div className='image-banner__item col-12'>
                <Image className='w-100 h-auto' width={1920} height={890} src="/image-banner-1.webp" alt="Image Banner"/>
                <div className='image-banner__item-content col-lg-5  p-4 d-none d-lg-block'>
                   <div>
                   <div className='text-center'>
                        <div className='mb-2'>
                            <Image width={294} height={79} src="/logo.png" alt="Logo" />
                        </div>
                        <div className='mb-2 book-slot-text'>
                        Book Your Slot
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 mb-2'>
                            <label for="first-name">First name*</label>
                            <input  className='form-control'type="text" id='first-name' name="first-name" value=""/>
                        </div>
                        <div className='col-6 mb-2'>
                        <label for="first-name">Last name*</label>
                            <input className='form-control' type="text" id='last-name' name="last-name" value=""/>
                        </div>
                        <div className='col-6 mb-2'>
                            <label for="city">City</label>
                                <select id='city' className='form-control'>
                                    <option disabled value="">Enter your city</option>
                                    <option value="ap">Andhra Pradesh</option>
                                    <option value="ts">Telengana</option>

                                </select>
                        </div>
                        <div className='col-6 mb-2'>
                        <label for="phone-num">Phone Number*</label>
                            <input className='form-control' type="tel" id='phone-num' name="phone-num" value=""/>
                        </div>
                        <div className='col-12 mb-2'>
                            <label for="email">Email address*</label>
                            <input  className='form-control'type="email" id='email' name="email" value=""/>
                        </div>
                        <div className='col-6 mb-2'>
                            <div>Factory Visit:</div>
                            <div>
                            <label for="yes">Yes</label>
                            <input  className='ms-1' type="checkbox" id="yes" name="yes" value="yes"/>
                            <label className='ms-3' for="no">No</label>
                            <input  className='ms-1' type="checkbox" id="no" name="no" value="no"/>
                            </div>
                        </div>
                        <div className='col-6 mb-2'>
                            <div className=''>
                            <input className='btn btn-danger w-100' type="button" value="Submit"/>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageBannerSection

import React from 'react'
import './LocateUsSection.css'

const LocateUsSection = () => {
  return (
    <div className='lus_wrapper py-5'>
      <div className='container px-0'>
        <div className='col-12 text-center'>
            <div className='main-title mb-4'>Locate Us</div>
        </div>
        <div className='row g-0'>
            <div className='col-12'>
                <div className='google-maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.288030512359!2d76.96141777432874!3d11.01700278914676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858ff7c0bb403%3A0x54541764995a4ffe!2sJewelOne%20Coimbatore!5e0!3m2!1sen!2sin!4v1687844163036!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LocateUsSection

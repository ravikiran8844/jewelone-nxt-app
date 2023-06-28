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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.521614448136!2d76.93437822390382!3d11.10319933241776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f717364ce6c1%3A0xbbc8bb13a578fe3e!2sJewelOne%20Experience%20Centre!5e0!3m2!1sen!2sin!4v1687932126725!5m2!1sen!2sin" width="1200" height="513" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LocateUsSection

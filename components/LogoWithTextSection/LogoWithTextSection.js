import React from 'react'
import Image from 'next/image'
import './LogoWithTextSection.css'

const LogoWithTextSection = () => {
  return (
    <div className='lwts-wrapper py-5'>
        <div className='container'>
            <div className='row g-0'>
                <div className='col-12 text-center'>
                    <div className='main-title mb-5'>Distinctive Features</div>
                </div>
            </div>
            <div className='row gx-4'>
                <div className='col-6 col-md-3 lwts-item'>
                    <div className='text-center'>
                        <Image width={150} height={150} src="/logo1.png" alt="6,00,000+ Designs" />
                        <div className='my-3 main-text'>
                        6,00,000+ Designs
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-3 lwts-item'>
                    <div className='text-center'>
                        <Image width={150} height={150}  src="/logo2.png" alt="Endless Customisation" />
                        <div className='my-3 main-text'>
                        Endless Customisation
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-3 lwts-item'>
                    <div className='text-center'>
                        <Image width={150} height={150}  src="/logo3.png" alt="12000+ SQ ft Showroom" />
                        <div className='my-3 main-text'>
                        12000+ SQ ft Showroom
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-3 lwts-item'>
                    <div className='text-center'>
                        <Image width={150} height={150}  src="/logo4.png" alt="Unmatched Finish" />
                        <div className='my-3 main-text'>
                        Unmatched Finish
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoWithTextSection
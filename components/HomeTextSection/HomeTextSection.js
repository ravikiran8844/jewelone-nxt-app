import React from 'react'
import './HomeTextSection.css'
import Image from 'next/image'

const HomeTextSection = () => {
  return (
    <div className='home-text-section py-5'>
      <div className='container'>
            <div className='hts-item_wrapper col-12 col-md-10 col-lg-8 mx-auto'>
                <div className='text-center'>
                    <div className='home-text-sec-title d-block d-md-none'>
                    Women deserves to
                    </div>
                    <div className='home-text-sec-title d-block d-md-none'>
                    {/* <span><Image src="/jewel-ring.png" width={83} height={72} alt="logo" /></span> */}
                        <span className='ms-3'>shine bright in</span>
                    </div>
                    <div className='home-text-sec-title d-block d-md-none'>
                    own unique style
                    </div>
                    <div className='home-text-sec-title d-none d-md-block'>
                    You Dream it,
                    </div>
                    <div className='home-text-sec-title d-none d-md-block'>
                    {/* <span><Image src="/jewel-ring.png" width={83} height={72} alt="logo" /></span> */}
                        <span className='ms-3'>We Make it</span>
                    </div>
                    {/* <div className='home-text-sec-title d-none d-md-block'>
                    let yours shine bright
                    </div> */}
                    <div className='home-caption-text mt-5 mb-3'>
                    About JewelOne Experience Center
                    </div>
                    <div className='home-text mb-3'>
                    Welcome to our Jewelry Experience Center, where beauty meets elegance and sophistication. Step into a world of shimmering brilliance as you explore our extensive collection of gold, silver, diamond and platinum jewelry. 
                    </div>
                    {/* <div className='d-none d-md-block home-text'>
                    Whether you&rsquo;re seeking a statement piece for a special occasion or a daily adornment that reflects your unique style, our experience center offers something for everyone.
                    </div> */}
                </div>
                <div className='hts-img-wrapper d-none d-md-block'>
                    <Image className=' d-none d-md-block' width={1200} height={1200} src="/bg-ring.png" alt="background ring"/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default HomeTextSection

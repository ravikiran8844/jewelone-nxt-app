import React from 'react'
import './MapSection.css'
import Image from 'next/image'
import Link from 'next/link'

const MapSection = () => {
  return (
    <div className='lus_wrapper py-5'>
      <div className='container px-0'>
        <div className='col-12 text-center'>
            <div className='main-title mb-4'>Locate Us</div>
        </div>
        <div className='row g-0'>
            <div className='col-12'>
                <div className='map-item'>
                    <Image className='img-fluid' width={1606} height={613} src="/map.webp" alt='map' />
                    <div className='card_wrapper'>
                        <div>
                            <div className='map-item-title mb-2'>
                            JewelOne Experience Centre
                            </div>
                            <div className='map-item-text'>
                            SF. NO. 460, 461/1 Kathirnaickenpalayam Road, Post, Thoppampatti, Coimbatore, Tamil Nadu 641017
                            </div>
                            <div className='mt-2'>
                                <div>
                                   <Link target='_blank' href="https://goo.gl/maps/rgCNRx3UivasMbu4A">Get Directions</Link> 
                                </div>
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

export default MapSection

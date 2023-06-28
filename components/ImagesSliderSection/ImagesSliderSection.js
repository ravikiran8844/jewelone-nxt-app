"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import './ImagesSliderSection.css'

const flickityOptions = {
    contain: true,
    cellAlign: 'left',
    groupCells: true,
    pageDots: false

}


const ImagesSliderSection = () => {
  return (
    <div className='images-slider-section py-5'>
    <div className='container'>
        <div  className='col-12'>
            <div className='main-caption'>
            A Piece of Jewellery 
            </div>
            <div className='main-title mb-4'>
            for all your Wedding Moments
            </div>
        </div>
        <div  className='row'>
            <Flickity className={'images-slider'} 
                elementType={'div'} 
                options={flickityOptions} 
                disableImagesLoaded={false} 
                reloadOnUpdate 
                static >

                <div className='col image-slider-item mb-4 text-center'>
                    <div className='image-slider-item-img_wrapper'>
                        <Image src="/image-slider-1.png" width={300} height={400} alt="Sparkling Engagement" />
                        <div className='image-slider-item_text'>Sparkling Engagement</div>
                    </div>  
                </div>
                <div className='col image-slider-item mb-4 text-center'>
                    <div className='image-slider-item-img_wrapper'>
                        <Image src="/image-slider-2.png" width={300} height={400} alt="Vibrant Haldi" />
                        <div className='image-slider-item_text'>Vibrant Haldi</div>
                    </div>  
                </div>
                <div className='col image-slider-item mb-4 text-center'>
                    <div className='image-slider-item-img_wrapper'>
                        <Image src="/image-slider-3.png" width={300} height={400} alt="Exquisite Mehendi" />
                        <div className='image-slider-item_text'>Exquisite Mehendi</div>
                    </div>  
                </div>
                <div className='col image-slider-item mb-4 text-center'>
                    <div className='image-slider-item-img_wrapper'>
                        <Image src="/image-slider-4.png" width={300} height={400} alt="Enchanting Sangeet" />
                        <div className='image-slider-item_text'>Enchanting Sangeet</div>
                    </div>  
                </div>
                <div className='col image-slider-item mb-4 text-center'>
                    <div className='image-slider-item-img_wrapper'>
                        <Image src="/image-slider-3.png" width={300} height={400} alt="Momentous Muhurtham" />
                        <div className='image-slider-item_text'>Momentous Muhurtham</div>
                    </div>  
                </div>
               
                </Flickity>
        </div>
    </div>
</div>
  )
}

export default ImagesSliderSection

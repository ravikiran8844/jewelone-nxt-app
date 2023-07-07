"use client"

import React from 'react'
import './CollectionsSection.css'
import Image from 'next/image'
import Link from 'next/link'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";

const flickityOptions = {
    contain: true,
    cellAlign: 'left',
    groupCells: true,
    pageDots: false

}


const CollectionsSection = () => {
   

  return (
    <div className='collections-section py-5'>
        <div className='container'>
            <div  className='col-12'>
                <div className='main-caption'>
                Jewellery 
                </div>
                <div className='main-title mb-4'>
                Collections
                </div>
            </div>
            <div  className='row'>
                <Flickity className={'collection-slider'} 
      elementType={'div'} 
      options={flickityOptions} 
      disableImagesLoaded={false} 
      reloadOnUpdate 
      static >

                    <div className='col collection-section_item mb-4 text-center'>
                        <div>
                            <Image src="/gold.png" width={284} height={284} alt="Gold" />
                        </div>
                        <div className='small-bold-text my-3'>
                        Gold
                        </div>
                        <div className='know-more-link mb-3'>
                            <Link href="https://jewelone.in/gold.html">Know More..</Link>
                        </div>
                    </div>
                    <div className='col collection-section_item mb-4 text-center'>
                        <div>
                            <Image src="/silver.png" width={284} height={284} alt="Gold" />
                        </div>
                        <div className='small-bold-text my-3'>
                        Silver
                        </div>
                        <div className='know-more-link mb-3'>
                            <Link href="https://jewelone.in/silver.html">Know More..</Link>
                        </div>
                    </div>
                    <div className='col collection-section_item mb-4 text-center'>
                        <div>
                            <Image src="/diamond.png" width={284} height={284} alt="Gold" />
                        </div>
                        <div className='small-bold-text my-3'>
                        Diamond
                        </div>
                        <div className='know-more-link mb-3'>
                            <Link href="https://jewelone.in/diamond.html">Know More..</Link>
                        </div>
                    </div>
                    <div className='col collection-section_item mb-4 text-center'>
                        <div>
                            <Image src="/platinum.png" width={284} height={284} alt="Gold" />
                        </div>
                        <div className='small-bold-text my-3'>
                        Platinum
                        </div>
                        <div className='know-more-link mb-3'>
                            <Link href="https://jewelone.in/platinum.html">Know More..</Link>
                        </div>
                    </div>
                   
                    </Flickity>
            </div>
        </div>
    </div>
  )
}

export default CollectionsSection

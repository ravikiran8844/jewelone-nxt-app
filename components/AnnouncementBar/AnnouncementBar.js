import React from 'react'
import Link from 'next/link';
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  return (
    <div className='announcmentBar col-12 py-2'>
      <div className='container text-center d-flex justify-content-center align-items-center'>
        <div className='m-auto'>
        <Link href="/sale">Thanksgiving Sale</Link> save up to 57% on select products! <Link href="/collections">view on sale products</Link>
        </div>
        <div className='d-block d-md-none'>
          <Link href="/book-now"><button className='ms-2 px-3 py-2 book-now'>Book Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
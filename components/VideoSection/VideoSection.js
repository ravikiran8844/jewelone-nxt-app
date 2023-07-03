import React from 'react'
import './VideoSection.css'

const VideoSection = () => {
  return (
    <div className='video_wrapper col-12'>
    <video className='video_item w-100 h-auto' mute poster="/home-video-banner.webp">
            <source src="" type="video/mp4"/>
            <source src="" type="video/ogg"/>
            Your browser does not support the video tag.
    </video>
    <div className='video_item_content container d-flex align-items-center'>
        <div className='video_item_textBox d-none d-lg-block'>
            <div className='video_item_title mb-4'>
            A Journey Inside Our Dazzling Jewelry Factory!
            </div>
            <div className='video_item_text'>
            Meet the passionate individuals behind the scenes, whose expertise and craftsmanship breathe life into every creation.
            </div>
        </div>
    </div>
    <div className='video_item_svg'>
            <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M54.2254 0.5625C83.9693 0.569488 108.021 24.6143 108 54.2668C107.979 83.9438 84.3223 107.248 55.7909 107.982C24.7786 108.775 0.478852 83.8075 0.562716 54.169C0.646581 24.6108 24.5689 0.635871 54.2254 0.5625ZM54.3338 100.969C80.1291 101.008 101.074 79.9014 100.997 54.141C100.92 28.4122 79.9124 7.54675 54.2289 7.5782C28.4616 7.60964 7.44658 28.6777 7.57937 54.5289C7.71216 80.1634 28.6573 101.064 54.3338 100.969Z" fill="white" fillOpacity="0.7"/>
            <path d="M38.9385 28.2866C53.9607 36.9584 68.9061 45.5848 83.9737 54.2845C68.9131 62.9773 53.9607 71.6106 38.9385 80.2824C38.9385 62.9284 38.9385 45.6616 38.9385 28.2866Z" fill="white" fillOpacity="0.7"/>
            </svg>

        </div>
    </div>
  )
}

export default VideoSection
import Image from 'next/image'
import styles from './page.module.css'
import LogoWithTextSection from '@/components/LogoWithTextSection/LogoWithTextSection'
import VideoSection from '@/components/VideoSection/VideoSection'
import LocateUsSection from '@/components/LocateUsSection/LocateUsSection'
import ImageBannerSection from '@/components/ImageBannerSection/ImageBannerSection'
import CollectionsSection from '@/components/CollectionsSection/CollectionsSection'
import Test from '@/components/Test/Test'
import ImagesSliderSection from '@/components/ImagesSliderSection/ImagesSliderSection'
import HomeTextSection from '@/components/HomeTextSection/HomeTextSection'

export default function Home() {
  return (
   <div>
    {/* <Test/> */}
    <ImageBannerSection/>
    <HomeTextSection/>
    <LogoWithTextSection/>
    <ImagesSliderSection/>
    <CollectionsSection/>
    <VideoSection/>
    <LocateUsSection/>
   </div>
  )
}

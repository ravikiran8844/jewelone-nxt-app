import Image from 'next/image'
import styles from './page.module.css'
import LogoWithTextSection from '@/components/LogoWithTextSection/LogoWithTextSection'
import VideoSection from '@/components/VideoSection/VideoSection'
import LocateUsSection from '@/components/LocateUsSection/LocateUsSection'

export default function Home() {
  return (
   <div>
    <LogoWithTextSection/>
    <VideoSection/>
    <LocateUsSection/>
   </div>
  )
}

import { getMainBanners } from '@/lib/repositories/banner-repo'
import React from 'react'
import HomeBannerSlider from './home-banner-slider';


const HomeBanner = async () => {
  const mainBanners = await getMainBanners();

  if(!mainBanners || mainBanners.length === 0) {
    return <div></div>
  }

  return (
    <div className='w-full h-[280px] bg-white'>
      <HomeBannerSlider banners={mainBanners} />
    </div>
  )
}

export default HomeBanner
import React from 'react'
import CustomImage from './CustomImage'
import Image from 'next/image'
import nextImage from '../../../public/next.svg'
import placeholderImage1 from '../../../public/item1.jpg'
import placeholderImage2 from '../../../public/item2.jpg'
import placeholderImage3 from '../../../public/item3.jpg'
import placeholderImage4 from '../../../public/item4.jpg'
import placeholderImage5 from '../../../public/item5.jpg'
import placeholderImage6 from '../../../public/item6.jpg'
import placeholderImage7 from '../../../public/item7.jpg'
import placeholderImage8 from '../../../public/item8.jpg'
import placeholderImage9 from '../../../public/item9.jpg'


function HeroSection() {

  const images=[
      placeholderImage1,
      placeholderImage2,
      placeholderImage3,
      placeholderImage4,
      placeholderImage5,
      placeholderImage6,
      placeholderImage7,
      placeholderImage8,
      placeholderImage9,
  ]

  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>What We Are About</h1>
            <p className='info'>
                FoodyHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. So start exploring now.
            </p>
            <button className='btn'>explore now</button>
        </div>
        <div className='col gallery'>
          {images.map((src,index)=>(
            <CustomImage key={index} imgSrc={src} pt={"90%"} />
          ))}
        </div>
    </div>
  )
}

export default HeroSection
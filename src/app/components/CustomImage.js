import React from 'react'
import Image from 'next/image'

function CustomImage({imgSrc,pt}) {
  return (
    <div className='custom-image' style={{paddingTop:pt}}>
        <Image src={imgSrc} className='img' width={"100%"} />
    </div>
  )
}

export default CustomImage
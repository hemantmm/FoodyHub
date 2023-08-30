import React from 'react'
import ChiefCard from './ChiefCard'
import nextImage from '../../../public/next.svg'

function ChiefsSection() {

  const chiefs=[
    {
      name:"hiiii",
      img: nextImage,
      recipesCount:"10",
      cuisine:"Mexican"
    },
    {
      name:"hiiii",
      img: nextImage,
      recipesCount:"10",
      cuisine:"Mexican"
    },
    {
      name:"hiiii",
      img: nextImage,
      recipesCount:"10",
      cuisine:"Mexican"
    },
    {
      name:"hiiii",
      img: nextImage,
      recipesCount:"10",
      cuisine:"Mexican"
    },
    {
      name:"hiiii",
      img: nextImage,
      recipesCount:"10",
      cuisine:"Mexican"
    },
    {
      name:"hiiii",
      img: nextImage,
      recipesCount:"10",
      cuisine:"Mexican"
    },
  ]

  return (
    <div className='section chiefs'>
        <h1 className="title">Our Top chiefs</h1>
        <div className='top-chiefs-container'>
            {/* <ChiefCard />
            <ChiefCard />
            <ChiefCard />
            <ChiefCard />
            <ChiefCard />
            <ChiefCard /> */}
            {chiefs.map(chief=> <ChiefCard key={chief.name} chief={chief} />)}
        </div>
    </div>
  )
}

export default ChiefsSection
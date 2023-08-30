import Image from 'next/image'
import React from 'react'
import logo from '../../../public/1.png'
import {BsFacebook, BsTwitter} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-regular-svg-icons'

function ChiefCard({chief}) {
  return (
    <div className='chief-card'>
        <div className='chief-card-image'>
            <Image src={chief.img} />
        </div>
        <div className='chief-card-info'>    
        <h3 className='chief-card-name'>{chief.name}</h3>
        <p className='chief-recipe-count'>Recipes: <b>{chief.recipesCount}</b></p>
        <p className='chief-cuisine'>cuisine: <b>{chief.cuisine}</b></p>
        <p className='chief-icons'>
          <BsFacebook size={20} color='#0063f7' />
          <AiFillTwitterCircle size={23} color='#13b4ff' />
          <AiFillInstagram size={23} color='#ff0056' />
            {/* <FontAwesomeIcon icon={faFacebook} /> */}
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
        </p>
        </div>
    </div>
  )
}

export default ChiefCard
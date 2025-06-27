import React from 'react'
import { assets } from '../assets/assets'

const StarRatting = ({ratting = 4}) => {
  return (
    <>
        {Array(5).fill(0).map((_, index) => (
            <img src={ratting > index ? assets.starIconFilled : assets.starIconOutlined} alt="star" className='w-4.5 h-4.5' />
))}
    </>
  )
}

export default StarRatting
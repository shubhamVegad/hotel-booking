import React from 'react'
import { useNavigate } from 'react-router-dom'
import StarRatting from '../components/StarRatting';
import { assets, roomsDummyData } from '../assets/assets';

const AllRooms = () => {

    const navigate = useNavigate(); 

  return (
    <div className='flex flex-col-reverse lg:fle-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div>
                <div className='flex flex-col items-start text-left'>
                    <h1 className='font-playfair text-4x1 md:text-[40px]'>Hotel Rooms</h1>
                    <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
                </div>
                {roomsDummyData.map((room) => (
                    <div>
                        <img onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0, 0)}}
                            src={room.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
                            <div>
                                <p className='text-gray-500'>{room.hotel.city}</p>
                                <p onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0, 0)}} className='text-gray-500 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
                                <div className='flex items-center'>
                                    <StarRatting></StarRatting>
                                    <p className='ml-2'>200+ reviews</p>
                                </div>
                                <div>
                                    <img src={assets.locationIcon} alt="" />
                                    <span>{room.hotel.address}</span>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
            <div></div>
        </div>
    )
}

export default AllRooms
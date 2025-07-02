import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData)

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title='My Bookings' subtitle='Easily manage your past, current and upcoming hootels reservation in one place. Plan your trips seamlessly with just a few clicks' align='left'></Title>

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className="w-1/3">Hotels</div>
                    <div className="w-1/3">Date & Timings</div>
                    <div className="w-1/3">Payment</div>
                </div>

                {bookings.map((booking) => (
                    <div key={booking._id} className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t gap-6">
                        {/* ------ Hotel Details ---- */}
                        <div className='flex gap-4'>
                            <img
                                src={booking.room.images[0]}
                                alt="hotel-img"
                                className="w-36 h-28 rounded shadow object-cover flex-shrink-0"
                            />
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <p className='font-playfair text-2xl flex items-baseline gap-2'>
                                        {booking.hotel.name}
                                        <span className='font-inter text-sm text-gray-500'>{booking.room.roomType}</span>
                                    </p>
                                    <div className='flex items-center gap-1 text-sm text-gray-500 mt-1'>
                                        <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                                        <span>{booking.hotel.address}</span>
                                    </div>
                                    <div className='flex items-center gap-1 text-sm text-gray-500 mt-1'>
                                        <img src={assets.guestsIcon} alt="guests-icon" className="w-4 h-4" />
                                        <span>Guests: {booking.guests}</span>
                                    </div>
                                </div>
                                <p className='font-medium mt-2'>Total : <span className="font-semibold">${booking.totalPrice}</span></p>
                            </div>
                        </div>
                        {/* ------ Date & Timings ---- */}
                        <div className='flex flex-col justify-center gap-2'>
                            <div>
                                <p className="font-medium">Check-In:</p>
                                <p className="text-gray-500 text-sm">
                                    {new Date(booking.checkInDate).toDateString()}
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">Check-Out:</p>
                                <p className="text-gray-500 text-sm">
                                    {new Date(booking.checkOutDate).toDateString()}
                                </p>
                            </div>
                        </div>
                
                        {/* ------ Payment Status ---- */}
                        <div className='flex flex-col items-start justify-center gap-2'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                                <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                                    {booking.isPaid ? "Paid" : "Unpaid"}
                                </p>
                            </div>
                            {!booking.isPaid && (
                                <button
                                    className='px-4 py-1.5 mt-2 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'
                                >
                                    Pay Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings 
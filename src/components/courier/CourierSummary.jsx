import { Button } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { bookCourier } from '../utils/CourierApi'
const CourierSummary = ({booking,isFormValid,onConfirm}) => {
  const [isBookingConfirmed,setIsBookingConfirmed]=useState(false)
  const [isProcessingPayment,setIsProcessingPayment]=useState(false)
  const navigate =useNavigate();
  const handleBooking=async ()=>{
    try{
      const courierTrackingId=await bookCourier(booking)
      navigate('/bookingSuccess',{state:{message:courierTrackingId}})
    }catch(error){
      navigate('/bookingSuccess',{state:{error:error.message}})
    }
  }
    
  return (
    <div className='card card-body mt-5'>
        <h4><strong>Booking Summary</strong></h4>
        <p>Sender Name : {booking.senderName}</p>
        <p>Sender Email : {booking.senderEmail}</p>
        <p>Reciver Name : {booking.recieverName}</p>
        <p>Reciever Contact: {booking.recieverContact}</p>
        <p>Courier Weight : {booking.courierWeight}</p>
        <p>Courier Type : {booking.courierType}</p>
        <p>Expected Pickup-Date: {booking.bookingDate}</p>
        <p>Expected Delivery-Date: {booking.expectedDeliveryDate}</p>
        <p>Pickup Address: {booking.pickupAddress}</p>
        <p>Delivery Address: {booking.deliveryAddress}</p>
        <p>Total Payment: {booking.totalCost}</p>

        {isFormValid && !isBookingConfirmed?(
          <Button variant='success' onClick={handleBooking}>
            {isProcessingPayment?(
              <>
              <span className='mr-2' role='status'
              aria-hidden="true"> </span>
              Booking Confirmed, redirecting to payment .....
              </>
            ):(
              "Confirm Booking & Proceed to payment"
            )}
            </Button>

          
        ):isBookingConfirmed?(
          <div className='d-flex justify-content-center align-items-center'>
            <div className='spinner-border text-primary' role='status'>
                <span className='sr-only'>
                    Loading
                </span>
            </div>
        </div>
        ):null}


        
        
      
    </div>
  )
}

export default CourierSummary

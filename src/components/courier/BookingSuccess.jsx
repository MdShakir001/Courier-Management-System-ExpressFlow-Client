import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BookingSuccess = () => {
    const location=useLocation()
    const message=location.state?.message
    const error=location.state?.error
    const navigate=useNavigate()
    useEffect(()=>{
      setTimeout(()=>{
        navigate("/")
      },10000)
    })
  return (
    <div className='container mt-2'>
        {message && <p className='text-success'>Courier Tracking id is <b>{message}</b> and you will recieve it on your email </p>}
        {error&& <p className='text-danger'>{error}</p>}
        <p>You will be Redirected to home page</p>

      
    </div>
  )
}

export default BookingSuccess

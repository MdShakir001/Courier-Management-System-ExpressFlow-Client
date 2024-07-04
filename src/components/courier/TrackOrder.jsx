import React from 'react'
import { useState } from 'react'
import { Form,Col } from 'react-bootstrap'
import { trackCourier } from '../utils/CourierApi'
const TrackOrder = () => {
    const [courier,setCourier]=useState({
        pickupAddress:"",
        currentStatus:"",
        deliveryAddress:""
    })
    const[errorMessage,setErrorMessage]=useState("")
    const [trackingId,setTrackingId]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const handleInputChange=(e)=>{
        setTrackingId(e.target.value)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        try{
            const response=await trackCourier(trackingId)
            setCourier(response)
            console.log(response)
            setErrorMessage("")
            setIsLoading(false)
        }catch(error){
            setErrorMessage(error.message)
            setIsLoading(false)
        }
        setTimeout(()=>{
            setIsLoading(false)
            setErrorMessage("")
        },2000)
    }
  return (
    <div className='container d-flex flex-column mt-4 align-items-center'>
        <h2 className='text-center mb-2'>Track Order</h2>
        <Form onSubmit={handleSubmit} className='col-md-4'>
            <div className='input-group'>
              
              <Form.Control
                    required
                    type='text'
                    id='trackingId'
                    name='trackingId'
                    value={trackingId}
                    placeholder='Enter tracking Id'
                    onChange={handleInputChange}
                    style={{height:'40px' ,fontSize:'20px'}}
                />
            <button type='submit' className='button' style={{fontSize:'15px' ,color:'white'}}><b>Get Status</b> </button>
            </div>
        </Form>
        {isLoading && (<p>Loading......</p>)}
        {errorMessage && (<p className='text-danger'>{errorMessage}</p>)}
        {courier && courier.pickupAddress!=="" &&
        <div className='card mt-3 col-md-4'>
            <h5 className='mb-2'>Source- {courier.pickupAddress}</h5>
            <h5 className='mb-2'>Current Status- {courier.currentStatus ? courier.currentStatus:"Will be updated Soon"}</h5>
            <h5 className='mb-2'>Destination- {courier.deliveryAddress}</h5>
        </div>
}

      
    </div>
  )
}

export default TrackOrder

import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import moment from 'moment'
import CourierSummary from './CourierSummary'
import { useLocation } from 'react-router-dom'

const AddCourier = () => {
  const location=useLocation()
  const payment=location.state?.payment
  const today=new Date()
  const pickUp=new Date(today.getTime()+24*60*60*1000).toISOString().split('T')[0];
  const delivery=new Date(today.getTime()+72*60*60*1000).toISOString().split('T')[0];
    const [courier,setCourier]=useState({
        senderName:"",
        senderEmail:"",
        recieverName:"",
        recieverContact:"",
        courierWeight:"",
        courierType:"",
        bookingDate:today.toISOString().split('T')[0],
        pickupAddress:"",
        deliveryAddress:"",
        pickupDate:pickUp,
        expectedDeliveryDate:delivery,
        totalCost:payment==null?0:payment
    })
    
    const [isValidated,setIsValidated]=useState(false)
    const [isSubmitted,setIsSubmitted]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const handleInputChange =(e)=>{
        setCourier({...courier,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      const form=e.currentTarget
      if(form.checkValidity()){
        setIsSubmitted(true)
      }else{
        e.stopPropagation()
      }
      setIsValidated(true)

    }
   

  return (
    <>
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card card-body mt-5'>
            <h4 className='card-title'><strong>Book a parcel</strong></h4>
            <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          <b>Sender Name</b>
        </Form.Label>
        <Col sm="9">
           <Form.Control 
                     required
                     type='text'
                     id='senderName'
                     name='senderName'
                     value={courier.senderName}
                     placeholder='Enter Your Name'
                     onChange={handleInputChange}/> 
                     <Form.Control.Feedback type='invalid'>
                            Please Enter Sender Name
                        </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          <b>Sender Email</b>
        </Form.Label>
        <Col sm="9">
           <Form.Control 
                     required
                     type='email'
                     id='senderEmail'
                     name='senderEmail'
                     value={courier.senderEmail}
                     placeholder='Enter your email'
                     onChange={handleInputChange}/> 
                     <Form.Control.Feedback type='invalid'>
                            Please Enter your email
                        </Form.Control.Feedback>
        </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          <b>RecieverName</b>
        </Form.Label>
        <Col sm="9">
           <Form.Control 
                     required
                     type='text'
                     id='recieverName'
                     name='recieverName'
                     value={courier.recieverName}
                     placeholder='Enter Reciever Name'
                     onChange={handleInputChange}/> 
                     <Form.Control.Feedback type='invalid'>
                            Please Enter Reciever Name
                        </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          <b>Contact No.</b>
        </Form.Label>
        <Col sm="9">
           <Form.Control 
                     required
                     type='number'
                     id='recieverContact'
                     name='recieverContact'
                     value={courier.recieverContact}
                     placeholder='Enter Reciver Contact No'
                     onChange={handleInputChange}/> 
                     <Form.Control.Feedback type='invalid'>
                            Please Enter Reciver Contact
                        </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm='3'><b>Pick Up Address</b></Form.Label>
        <Col sm='9'>
        <Form.Control
        required
         as="textarea" 
         rows={2} 
         id='pickupAddress'
         name='pickupAddress'
         value={courier.pickupAddress}
         placeholder='Enter Pick Up Address'
         onChange={handleInputChange}
         />
         <Form.Control.Feedback type='invalid'>
                            Please Enter Pickup Address
                        </Form.Control.Feedback>
      
        </Col>
        </Form.Group>
       
      <Form.Group as={Row} className="mb-3">
      <Form.Label column sm='3'><b>Deliver At</b></Form.Label>
        <Col sm='9'>
        <Form.Control
        required
         as="textarea" 
         rows={2} 
         id='deliveryAddress'
         name='deliveryAddress'
         value={courier.deliveryAddress}
         placeholder='Enter Complete Delivery Address'
         onChange={handleInputChange}
         />
         <Form.Control.Feedback type='invalid'>
                            Please Enter Delivery Address 
                        </Form.Control.Feedback>
        </Col>
        
        
      </Form.Group>
      
      <fieldset style={{border:'2px'}}>
                            
                            <div className='row'>
                                <div className='col-6'>
                                
                            <Form.Label htmlFor='courierType'><b>Courier Type</b></Form.Label>
                            <Form.Control
                        required
                        type='text'
                        id='courierType'
                        name='courierType'
                        value={courier.courierType}
                        placeholder='Enter type'
                        onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please Enter courierType
                        </Form.Control.Feedback>
                                </div>
                                <div className='col-6'>
                                
                            <Form.Label htmlFor='courierWeight'><b>Courier Weight</b></Form.Label>
                            <Form.Control
                        required
                        type='number'
                        id='courierWeight'
                        name='courierWeight'
                        value={courier.courierWeight}
                        placeholder='Enter Weight'

                        onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please Enter Weight
                        </Form.Control.Feedback>
                                </div>
                            </div>
                            </fieldset>
                            <div className='form-group mt-5 '>
                                    <button type='submit' className='btn btn-success'> Confirm & Proceed</button>
                                    </div>
            </Form>

        </div>
        </div>
        
          <div className='col-md-6'>
            {isSubmitted && (
               <CourierSummary booking={courier} payment={payment} isFormValid={isValidated} onConfirm={handleSubmit}/>
            )}
          </div>
        
      </div>
      
    </div>
    </>
  )
}

export default AddCourier

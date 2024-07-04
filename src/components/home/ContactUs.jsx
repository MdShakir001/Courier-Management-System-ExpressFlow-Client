import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const ContactUs = () => {
  const [contactForm,setContactForm]=useState({
    email:"",
    title:"",
    issue:""
  })
  const[message,setMessage]=useState("")
  const handleInputChange=()=>{
    setContactForm[{...contactForm,[e.target.name]:e.target.value}]
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setMessage("We will be touch with you in 24hrs Please be patient")
    setContactForm({
      email:"",
    title:"",
    issue:""
    })
    e.target.reset()
    setTimeout(()=>{
      setMessage("")
    },2000)
  }
  return (
    <div className='container col-md-5 mt-3 mb-3'>
      {message&& <p className='text-success'><b>{message}</b></p>}
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Label>
            <b>Your Email</b>
          </Form.Label>
          <Form.Control
          required
          type='email'
          id='email'
          name='email'
          onChange={handleInputChange}
          placeholder='Issue Title'
          

          />
          <Form.Control.Feedback type='invalid'>
                            Please Enter Issue Title
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <b>Issue Title</b>
          </Form.Label>
          <Form.Control
          required
          type='text'
          id='title'
          name='title'
          onChange={handleInputChange}
          placeholder='Issue Title'

          />
          <Form.Control.Feedback type='invalid'>
                            Please Enter Issue Title
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <b>Describe Your Issue</b>
          </Form.Label>
          <Form.Control
          required
          as='textarea'
          rows={3}
          id='issue'
          name='issue'
          onChange={handleInputChange}
          placeholder='Describe Your Issue'
          />
          <Form.Control.Feedback type='invalid'>
                            Please Enter Issue Description
          </Form.Control.Feedback>
        </Form.Group>
        <button type='submit' className='btn btn-success m-2'>
          Send Request

        </button>

      </Form>

    </div>
  )
}

export default ContactUs

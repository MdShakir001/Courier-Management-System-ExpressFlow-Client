import React, { useEffect, useState } from 'react';
import getLatLongForPincode from '../utils/getLatLongForPincode';
import distancepng from '../../assets/images/distance.png'
import {Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const ShipCourier = () => {
  const [distance,setDistance]=useState({
    pickupCity:"",
    deliveryCity:"",
  })
  const [payment,setPayment]=useState(0)
  const[totalDistance,setTotalDistance]=useState(0)
  const [isSubmitted,setIsSubmitted]=useState(false)
  const[errorMessage,setErrorMessage]=useState("")
  const navigate=useNavigate()
  const handleInputChange=(e)=>{
    setDistance({...distance,[e.target.name]:e.target.value})
    setIsSubmitted(false)
  }
  const calculateDistance = async () => {
    // Call a function to fetch latitude and longitude for pin codes
    const latLong1 = await getLatLongForPincode(distance.pickupCity);
    const latLong2 = await getLatLongForPincode(distance.deliveryCity);
   
    if (latLong1 && latLong2) {
      // Calculate distance using Haversine formula
      const dLat = toRadians(latLong2.lat - latLong1.lat);
      const dLon = toRadians(latLong2.lng - latLong1.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(latLong1.lat)) *
          Math.cos(toRadians(latLong2.lat)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance1 = 6371 * c; // Earth's radius in km

      // Update state with the calculated distance
      setTotalDistance(distance1.toFixed(2));
      setPayment(5*distance1.toFixed(2)) // Round to 2 decimal places
      setIsSubmitted(true)
    } else {
      // Handle error if coordinates are not available
      setDistance({
        pickupCity:"",
      dropCity:"",
      totalDistance:"",
      });
      setPayment(0)
      setIsSubmitted(false)
      console.error('Error: Could not calculate distance. Please enter valid pin codes.');
      setErrorMessage("Error: Could not calculate distance. Please enter valid city.")
    }
  };
  const handleNavigate=()=>{
    navigate("/placeCourier",{state:{payment:payment}})
  }
  // Function to convert degrees to radians
  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };
  return (
    <div className='container col-md-4 mt-4 ' style={{left:0}}>
      <div className=' card card-body'>
      <h2 style={{left:0, marginBottom:'10px', marginTop:'0px'}} >Ship Personal Courier</h2>
      <div  className='row'>
        <div className='col-md-3'> 
          <img style={{marginTop:'5px',width:'100px'}} src={distancepng} 
          alt="distance" />
        </div>
        <div className='col-md-9' >
          
          
          <Form.Control required className='mb-4' style={{height:'50px' ,fontSize:'20px'}}  id='pickupCity' name='pickupCity' type="text" placeholder='Enter pickup City' onChange={handleInputChange}/>
          <Form.Control required className='mb-4' style={{height:'50px',fontSize:'20px'}}  id='deliveryCity' name='deliveryCity' type="text" placeholder='Enter Delivery City' onChange={handleInputChange} />
          
        
        </div>
        <button className='mt-2' style={{backgroundColor:"black",color:"white", fontSize:'100%'}} onClick={calculateDistance}>Estimate Cost </button>
        {isSubmitted && (
          <button className='btn btn-success mt-3' onClick={handleNavigate}>Continue...<b> Rs </b> 
          {payment} </button>
        )}
      </div>
      


      </div>
        

      
      
    </div>
  );
};

export default ShipCourier;

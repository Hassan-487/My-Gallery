import React from 'react';
import bb from './back.jpg'; 

export default function Back() {
  return (
    <div className='back'> 
      <img src={bb} alt="back" />
      <h1 className='text'>The best free stock photos, royalty free</h1>
      <h1 className='text'>  images & videos shared on H.Gallery by creators .</h1>
    </div>
  );
}
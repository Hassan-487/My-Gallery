import axios from 'axios';
import React, { useState,useEffect } from 'react'

export default function Vide({query}) {
const [userdata1,setdata1]=useState([]);
//const[qu,setqu]=useState('Nature');
//const qu='Nature';
useEffect(() => {
  const client=axios.create({  
    baseURL:'https://api.pexels.com/videos/',
    headers:{
        Authorization:'XHw1yapwFavEpEewiZc6Ub5GliRcET8BwU26phpCojyYka9WkPTHHFOP'
    }
  });

  const fetchdata=async () => {
   try {
    const resp=await client.get(`search`,{
        params:{query:query,per_page:30}
    });
    setdata1(resp.data.videos);
    console.log(resp.data.videos);
   } catch (error) {
    console.error('error',error)
   } 
  }
  fetchdata();
}, [query])


  return (
    <>
    
   <div className='videos'>
    <ul className='dat'>
    {userdata1.map((video) => (
          <li key={video.id}>
            <video controls width="250">
              <source src={video.video_files[0].link} type="video/mp4" />
             
            </video>
          </li>
          
        ))}
    </ul>
    </div>
    
    </>
  );
}

import React, { useEffect, useState } from 'react';

import axios from 'axios';



export default function Photo({query}) {
  const [userdata, setdata] = useState([]);
 // const [query, setquery] = useState('qury');
  //const [searchQuery, setSearchQuery] = useState('Nature');

 

  useEffect(() => {
    const client = axios.create({
      baseURL: 'https://api.pexels.com/v1/',
      headers: {
        Authorization: 'XHw1yapwFavEpEewiZc6Ub5GliRcET8BwU26phpCojyYka9WkPTHHFOP'
      }
    });

    const fetchData = async () => {
      try {
        const res = await client.get(`search`, {
          params: { query: query, per_page: 42 }
        });
        setdata(res.data.photos);
        console.log(res.data.photos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="photo">     
      <ul className='dataa'>
        {userdata.map((data) => (
          <li key={data.id}>
            <img src={data.src.medium} alt={data.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

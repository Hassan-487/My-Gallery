import React from 'react';

import logo from './Pexels.png';
import { useNavigate } from 'react-router-dom';
import {FaBell} from'react-icons/fa';
//import {Link} from 'react-router-dom';
function Navbar({ query, setQuery }) {
  const navigate=useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     setQuery(query);
  };
 const handleonchange=(e)=>{
  navigate(`/${e.target.value}`);
 };

  return (
    <div className='navbar'>
      <img className='img' src={logo} alt="logo" />
      <form className='fom' onSubmit={handleSubmit}>
        <label>
          <strong style={{ color: 'black', marginLeft: '8px', marginRight: '80px', fontSize: '20px' }}>
            H.Gallery
          </strong>
          <select className='selec' onChange={handleonchange}>
          <option  className='opt' value='back'>Select</option>
            <option  className='opt' value='photo'>Photos</option>
             <option className='opt' value='video'> Videos</option>
          </select >
          <input
            className='inputt'
            type="text"
            placeholder='Search'
            onChange={handleChange}
            value={query}
          />
        </label>
        <button className='select' type="submit">Submit</button>
        
        <FaBell className="bell-icon" />
        <button className='log'  value='loginn' type='submit'>Login</button>
        <button className='download' type='download'>Download</button>
        
      </form>
    </div>
  );
}

export default Navbar;
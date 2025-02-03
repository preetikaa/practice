import React, { useState } from 'react';
import './inputUrl.css';
import Dashboard from '../Dashboard/Dashboard';

function InputUrl() {
  const [address, setAddress] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('this is the url', address);
  };

  return (
    <>
      <Dashboard/>
      <div className="container1">
      <p className='title1'>Enter URL</p>
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
          <i className="fas fa-link"></i>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Paste URL here"
              className="search-input"
            />
          </div>
          <button type="submit" className="search-button">
          Check &rarr;	
          </button>
        </form>
      </div>
    </>
  );
}

export default InputUrl;
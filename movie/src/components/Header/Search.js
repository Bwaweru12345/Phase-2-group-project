import React, { useState } from 'react';
import './SearchList.css'


function SearchListings() {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [minBathrooms, setMinBathrooms] = useState('');
  const [listings, setListings] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleMinBedroomsChange = (event) => {
    setMinBedrooms(event.target.value);
  };

  const handleMinBathroomsChange = (event) => {
    setMinBathrooms(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    let endpoint = 'http://localhost:3000/properties';

    if (location) {
      endpoint += `?city=${location}`;
    }

    if (minPrice) {
      endpoint += `&min_price=${minPrice}`;
    }

    if (maxPrice) {
      endpoint += `&max_price=${maxPrice}`;
    }

    if (minBedrooms) {
      endpoint += `&min_bedrooms=${minBedrooms}`;
    }

    if (minBathrooms) {
      endpoint += `&min_bathrooms=${minBathrooms}`;
    }

    const response = await fetch(endpoint);
    const data = await response.json();
    setListings(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          Minimum Price:
          <input type="number" value={minPrice} onChange={handleMinPriceChange} />
        </label>
        <br />
        <label>
          Maximum Price:
          <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
        </label>
        <br />
        <label>
          Minimum Bedrooms:
          <input type="number" value={minBedrooms} onChange={handleMinBedroomsChange} />
        </label>
        <br />
        <label>
          Minimum Bathrooms:
          <input type="number" value={minBathrooms} onChange={handleMinBathroomsChange} />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <br />
      <ul>
        {listings.map(listing => (
          <li key={listing.id}><img src={listing.image} alt={listing.name} />
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>Price: ${listing.price}</p>
            <p>Bedrooms: {listing.bedrooms}</p>
            <p>Bathrooms: {listing.bathrooms}</p>
            <p>Location: {listing.city}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchListings;

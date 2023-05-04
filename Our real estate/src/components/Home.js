import React, { useState, useEffect } from "react";
import "./List.css"

function PropertiesList() {
  const [properties, setProperties] = useState([]);
  const [bedroomsFilter, setBedroomsFilter] = useState("");
  const [bathroomsFilter, setBathroomsFilter] = useState("");
  const [expandedPropertyId, setExpandedPropertyId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);
  
  const handleBedroomsFilterChange = (event) => {
    setBedroomsFilter(event.target.value);
  };

  const handleBathroomsFilterChange = (event) => {
    setBathroomsFilter(event.target.value);
  };

  const toggleExpansion = (propertyId) => {
    if (propertyId === expandedPropertyId) {
      setExpandedPropertyId(null);
    } else {
      setExpandedPropertyId(propertyId);
    }
  };

  const filteredProperties = properties.filter((property) => {
    if (bedroomsFilter && property.bedrooms !== parseInt(bedroomsFilter)) {
      return false;
    }

    if (bathroomsFilter && property.bathrooms !== parseInt(bathroomsFilter)) {
      return false;
    }

    return true;
  });

  return (
    <div className="container">
      <div className="filters">
        <label htmlFor="bedroomsFilter">Bedrooms:</label>
        <select id="bedroomsFilter" value={bedroomsFilter} onChange={handleBedroomsFilterChange}>
          <option value="">Any</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>

        <label htmlFor="bathroomsFilter">Bathrooms:</label>
        <select id="bathroomsFilter" value={bathroomsFilter} onChange={handleBathroomsFilterChange}>
          <option value="">Any</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>
      </div>

      <div className="properties-card">
        {filteredProperties.map((property) => (
          <div className={`property-card ${expandedPropertyId === property.id ? 'expanded' : ''}`} key={property.id}>
            <img src={property.image} alt={property.name} />
            <div>
              <h2>{property.name}</h2>
              <p>{property.description}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Price: {property.price}</p>
              <button onClick={() => toggleExpansion(property.id)}>{expandedPropertyId === property.id ? 'Hide Details' : 'Details'}</button>
              {expandedPropertyId === property.id && (
                <div className="expanded-content">
                  <p>Address: {property.address}</p>
                  <p>Square footage: {property.squareFootage}</p>
                  <p>Year built: {property.yearBuilt}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertiesList;

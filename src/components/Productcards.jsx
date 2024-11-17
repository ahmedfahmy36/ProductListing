import React from 'react';

const Productcards = ({ image, name, price }) => (
  <div className="bg-gray-100 rounded-lg shadow-md p-4">
  <img 
    src={image} 
    alt={name} 
    className="w-full h-40 card-image rounded-md mb-4" 
  />
  <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
  <p className="text-gray-600">${price}</p>
</div>
);

export default Productcards;

import React from 'react';

const Card = ({ imageUrl, name, email }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
      </div>
    </div>
  );
};

export default Card;

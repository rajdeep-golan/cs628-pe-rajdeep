import React from 'react';

export default function Home() {
  return (
    <div className="text-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Cities App!</h2>
      <p className="text-xl text-gray-600">
        This application allows you to manage a list of cities around the world.
        You can view a list of cities, add new ones, and see details for each city.
      </p>
    </div>
  );
}
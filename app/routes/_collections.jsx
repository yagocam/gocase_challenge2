// src/routes/Collections.js
import React, { useState, useEffect } from 'react';
import CollectionList from '../components/CollectionList';

const Collections = () => {
  const [collectionData, setCollectionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/collections');
        const data = await response.json();

        console.log('Received data:', data.data);  // Adicione esta linha para inspecionar os dados

       
          setCollectionData(data.data?.collections?.nodes || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Collections Page</h1>
      {collectionData ? (
        <CollectionList collections={collectionData} />
      ) : (
        <p>Loading collections...</p>
      )}
    </div>
  );
};

export default Collections;

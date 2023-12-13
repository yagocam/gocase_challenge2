// src/components/CollectionList.jsx
import React from 'react';

const CollectionList = ({ collections }) => {
  return (
    <div>
      <h2>Collection List</h2>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id} style={{ marginBottom: '20px' }}>
            <p>Handle: {collection.handle}</p>
            <p>ID: {collection.id}</p>

            {collection.image && collection.image.src && (
              <div>
                <p>Image ID: {collection.image.id}</p>
                <img
                  src={collection.image.src}
                  alt={`Collection: ${collection.handle}`}
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;

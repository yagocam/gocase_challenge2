// src/routes/index.jsx
import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Index = () => {
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products?limit=${limit}`);
      const data = await response.json();
      setProducts(data.data?.products?.edges || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div>
      <div>
        <label htmlFor="limitInput">Limit:</label>
        <input
          type="number"
          id="limitInput"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
        <button onClick={handleButtonClick}>Fetch Products</button>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default Index;

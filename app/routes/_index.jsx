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

  const sendData = async () => {
    const url = 'http://localhost:3000/createProduct';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Produto Teste',
          status: 'active',
          descriptionHtml: 'Descrição do produto...',
        }),
      });
  
      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
    sendData();
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

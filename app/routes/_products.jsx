import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Index = () => {
  const [limit, setLimit] = useState(10);
  const [title, setTitle] = useState('Produto Teste');
  const [status, setStatus] = useState('active');
  const [descriptionHtml, setDescriptionHtml] = useState('Descrição do produto...');
  const [alt, setAlt] = useState('teste');
  const [originalSource, setOriginalSource] = useState('');
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
          title: title,
          status: status,
          descriptionHtml: descriptionHtml,
          alt: alt,
          originalSource: originalSource
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
  };

  const handleSendDataClick = () => {
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
      <div>
        <label htmlFor="titleInput">Title:</label>
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Adicione campos adicionais conforme necessário */}
      </div>
      <button onClick={handleSendDataClick}>Send Data</button>
      <ProductList products={products} />
    </div>
  );
};

export default Index;
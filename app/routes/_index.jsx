// src/routes/index.jsx
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

// Interface para a forma dos dados dos produtos
const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/images'); // Atualize a URL conforme necessário
        const data = await response.json();

        // Diretamente definir o estado products com a resposta
        setProducts(data.data?.products?.edges || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <ProductList products={products} />;
};

export default Index;

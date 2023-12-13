// src/components/ProductList.jsx
import React from 'react';

const ProductList = ({ products }) => {
  const imageStyle = {
    width: '200px', // Defina o tamanho desejado
    height: '200px', // Defina o tamanho desejado
    objectFit: 'cover', // Para manter a proporção da imagem
    marginBottom: '10px', // Adicione um espaçamento inferior entre as imagens
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>
            <p>ID: {product.node.id}</p>
            <p>Handle: {product.node.handle}</p>
            <p>Images:</p>
            <ul>
              {product.node.images.nodes.map((image, index) => (
                <li key={index}>
                  <img src={image.src} alt={`Image ${index}`} style={imageStyle} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

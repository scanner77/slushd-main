import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements'; //Here we imported all the styling from the products elements

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer> {/* Main section */}
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle> {/* You can get this from data.js */}
                <ProductDesc>{product.desc}</ProductDesc> {/* You can get this from data.js */}
                <ProductPrice>{product.price}</ProductPrice>{/* You can get this from data.js */}
                <ProductButton>{product.button}</ProductButton>{/* You can get this from data.js */}
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper> 
    </ProductsContainer>
  );
};

export default Products;



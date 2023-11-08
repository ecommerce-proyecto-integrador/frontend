'use client';
import React, { useState, useEffect } from 'react';
import { products } from "../../../../utils/products";
import Container from '@/app/components/Container';
import Products from '@/app/components/product/Products';
  
  const ProductsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const product = [products];

    return (  
      <Container>
          <Products />
      </Container>
    );
};

export default ProductsPage;

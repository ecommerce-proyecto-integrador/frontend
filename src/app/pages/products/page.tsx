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
        <div>
          <div>
            <input className='peer w-[800px] p-4 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70
            disabled:cursor-not-allowed' type='text' placeholder='Search products ...' value={searchTerm}/>
          </div>
          <Products />
        </div>
      </Container>
    );
};

export default ProductsPage;

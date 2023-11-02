'use client';
import React, { useState, useEffect } from 'react';
import { Product, productsData, categoriesData } from './fake-data'
  
  const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(productsData);
    const [categories, setCategories] = useState<string[]>(categoriesData);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    
    const filteredProducts = products.filter((product) => {
      // Apply category filter if selected
      if (selectedCategory && selectedCategory !== 'All') {
        return product.category === selectedCategory;
      }
      // Apply search query filter
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filter Sidebar */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Filter by Category</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-lg font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

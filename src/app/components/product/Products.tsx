import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../../../../utils/products';

const Products: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    // Extracting unique categories and brands from products
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    const uniqueBrands = Array.from(new Set(products.map(product => product.brand)));

    setCategories(['', ...uniqueCategories]); // Include an option for all categories
    setBrands(['', ...uniqueBrands]); // Include an option for all brands
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrandFilter(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter(parseInt(e.target.value, 10));
  };

  const filteredProducts = products.filter(product => {
    return (
      (categoryFilter === '' || product.category === categoryFilter) &&
      (brandFilter === '' || product.brand === brandFilter) &&
      (priceFilter === 0 || product.price <= priceFilter)
    );
  });

  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4">
      <div className="bg-white margin p-5 rounded-xl mb-10">
        <div className='flex justify-between items-center'>
          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="block py-2.5 px-0 w-[200px] text-sm font-semibold text-gray-500
            bg-transparent border-0 border-b-2 border-gray-200 appearance-none
            dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === '' ? 'All Categories' : category}
              </option>
            ))}
          </select>

          {/* Brand Filter */}
          <select
            value={brandFilter}
            onChange={handleBrandChange}
            className="block py-2.5 px-0 w-[200px] text-sm text-gray-500 font-semibold
            bg-transparent border-0 border-b-2 border-gray-200 appearance-none
            dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand === '' ? 'All Brands' : brand}
              </option>
            ))}
          </select>

          {/* Price Filter */}
          <input
            type="number"
            value={priceFilter || ''}
            onChange={handlePriceChange}
            placeholder="Max Price"
            className="block py-2.5 px-0 w-[200px] text-sm text-gray-500 font-semibold
            bg-transparent border-0 border-b-2 border-gray-200 appearance-none
            dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

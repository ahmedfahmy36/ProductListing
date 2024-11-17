import React, { useState } from 'react';
import Productcards from './Productcards.jsx';

const CardGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState(100);
  const cards = [
    { id: 1, image: 'https://maxcom.pl/en/media/2022/04/mBook-m4-MAXCOM-2_2.jpg', name: 'Laptop', price: 25, category: 'Electronics' },
    { id: 2, image: 'https://wittee.in/wp-content/uploads/2023/08/front-64e998cd22cab-Black_S_Oversized_T-shirt.jpg', name: 'T-shirt', price: 50, category: 'Clothing' },
    { id: 3, image: 'https://www.lenleys.co.uk/wp-content/uploads/2023/08/19921-jpg.webp', name: 'Sofa', price: 75, category: 'Furniture' },
    { id: 4, image: 'https://tv-it.com/storage/manar-gamal/1-9-2024/honor-x6a-silver/honor-x6a-mobile-26.webp', name: 'Mobile Phone', price: 20, category: 'Electronics' },
    { id: 5, image: 'https://www.barbanerastyle.com/wp-content/uploads/2020/07/bandito-slim-fit-selvedge-jeans-light-01.jpg', name: 'Jeans', price: 40, category: 'Clothing' },
    { id: 6, image: 'https://m.media-amazon.com/images/I/71JsaaMDMJL._AC_SX679_.jpg', name: 'Desk Table', price: 60, category: 'Furniture' },
  ];
  const categories = ['All', 'Electronics', 'Clothing', 'Furniture'];

  const filteredProducts = cards.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });
  return (
    <>
    <div className="bg-gray-200 min-h-screen p-8">
    <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Max Price: ${maxPrice}</label>
          <input
            id="price"
            type="range"
            min="0"
            max="100"
            step="5"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Productcards
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default CardGrid;

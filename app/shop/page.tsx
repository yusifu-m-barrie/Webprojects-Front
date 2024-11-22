"use client";

import Link from 'next/link';

// Extended sample product data
const products = [
    {
        id: 1,
        name: 'Mango',
        description: 'This is a short description of Mango.',
        image: 'images/product1.png',
        price: 'Le100',
    },
    {
        id: 2,
        name: 'Orange',
        description: 'This is a short description of Product 2.',
        image: 'images/product2.png',
        price: 'Le150',
    },
    {
        id: 3,
        name: 'Banana',
        description: 'This is a short description of Product 3.',
        image: 'images/product3.png',
        price: 'Le200',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'This is a short description of Product 4.',
        image: 'images/product4.png',
        price: 'Le250',
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'This is a short description of Product 5.',
        image: 'images/product5.png',
        price: 'Le300',
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'This is a short description of Product 6.',
        image: 'images/product6.png',
        price: 'Le350',
    },
];

const Shop = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Shop Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded p-4 shadow hover:shadow-md transition">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-700 mb-2">{product.description}</p>
                        <p className="font-bold text-lg mb-4">{product.price}</p>
                        <Link
                            href={`/product/${product.id}`}
                            className="bg-green-400 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;

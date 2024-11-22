"use client";

import { useRouter } from 'next/navigation';

const products = [
    {
        id: 1,
        name: 'Mango',
        description: 'This is a detailed description of Product 1.',
        image: 'images/product1.png',

    },
    {
        id: 2,
        name: 'Orange',
        description: 'This is a detailed description of Product 2.',
        image: 'images/product2.png',
    },
    {
        id: 3,
        name: 'Banana',
        description: 'This is a detailed description of Product 3.',
        image: 'images/product3.png',
    },
];

const ProductDetail = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const productId = parseInt(params.id, 10);
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="container mx-auto py-8">
            <div className="border border-gray-300 rounded-lg p-6 shadow-md">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded mb-4"
                />
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <button
                    onClick={() => router.push('/auth/login')}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;

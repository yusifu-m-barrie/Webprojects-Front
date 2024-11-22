import Link from 'next/link';

const products = [
    {
        id: 1,
        name: 'Mango',
        description: 'This is a short description of Mango',
        image: 'images/product1.png',
    },
    {
        id: 2,
        name: 'Orange',
        description: 'This is a short description of Orange',
        image: 'images/product2.png',
    },
    {
        id: 3,
        name: 'Banana',
        description: 'This is a short description of Banana',
        image: 'images/product3.png',
    },
];

const ProductList = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border border-gray-300 rounded-lg p-4 shadow-md">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <Link href={`/products/${product.id}`} className="mt-2 inline-block bg-green-600 text-white py-2 px-4 rounded m-1">
                            View Details
                        </Link>

                        <Link href="/auth/login" className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                            Order Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

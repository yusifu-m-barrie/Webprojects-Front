'use client';

import React, { useState } from 'react';
import { FaHome, FaBox, FaShoppingCart, FaUsers, FaChartPie, FaCog } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 ${
                isOpen ? 'w-64' : 'w-16'
            }`}
        >
            {/* Sidebar Toggle Button */}
            <button
                className="p-2 text-lg bg-gray-700 hover:bg-gray-600"
                onClick={toggleSidebar}
            >
                {isOpen ? '<<' : '>>'}
            </button>

            {/* Navigation Links */}
            <nav className="flex-1 mt-4">
                <ul>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link href="/admin-dashboard" className="flex items-center">
                            <FaHome className="mr-4" size={20} />
                            {isOpen && <span>Dashboard</span>}
                        </Link>
                    </li>

                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link href="/admin-products" className="flex items-center">
                            <FaBox className="mr-4" size={20} />
                            {isOpen && <span>Products</span>}
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link href="/admin-orders" className="flex items-center">
                            <FaShoppingCart className="mr-4" size={20} />
                            {isOpen && <span>Orders</span>}
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <Link href="/admin-customers" className="flex items-center">
                            <FaUsers className="mr-4" size={20} />
                            {isOpen && <span>Customers</span>}
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

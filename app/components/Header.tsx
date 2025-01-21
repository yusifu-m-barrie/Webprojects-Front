
"use client";

import { useRouter } from "next/navigation"; // Use `next/navigation` instead of `next/router`
import { useEffect, useState } from "react";

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if the user is authenticated
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token
        setIsAuthenticated(false);
        router.push("/auth/login"); // Redirect to login page
    };

    return (
        <header className="bg-blue-500 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">E-Commerce</h1>
                <nav>
                    {!isAuthenticated ? (
                        <>
                            <a href="/" className="px-4">
                                Home
                            </a>
                            <a href="/shop" className="px-4">
                                Shop
                            </a>
                            <a href="/auth/login" className="px-4">
                                Login
                            </a>
                            <a href="/auth/register" className="px-4">
                                Register
                            </a>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 rounded text-white"
                        >
                            Log Out
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;

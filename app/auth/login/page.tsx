"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        router.push(`/user?email=${email}`); // Redirect to a user page with a welcome message
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 border rounded shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Login
                </button>
                <p className="text-center mt-4">
                    Don’t have an account?{' '}
                    <Link href="/auth/register" className="text-blue-500 underline">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

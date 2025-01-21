"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Default email and password check
        if (email === 'admin@dashboard.com' && password === 'admin123') {
            // Redirect to the Admin Dashboard
            router.push(`/admin-dashboard`);
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md max-w-sm mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
            <p className="mt-4 text-center">
                Don't have an account?{' '}
                <a href="/auth/register" className="text-blue-500 underline">
                    Register
                </a>
            </p>
        </div>
    );
};

export default Login;

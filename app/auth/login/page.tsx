'use client';

import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('default@example.com'); // Default email
    const [password, setPassword] = useState('password123'); // Default password
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset error state
        setError(null);

        // Validate email format
        if (!emailRegex.test(email)) {
            setError('Enter correct email');
            return;
        }

        // Validate password (at least 6 characters for this example)
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        // If validations pass
        alert(`Logged in successfully with:\nEmail: ${email}\nPassword: ${password}`);
        // Add further login handling logic here
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    Login
                </h2>
                {error && (
                    <div className="mb-4 text-sm text-red-500 text-center">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="********"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

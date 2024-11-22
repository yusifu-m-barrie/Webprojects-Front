"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Here, add logic for registration if needed.
        router.push('/auth/login'); // Redirect to login after registration
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={handleRegister}
                className="bg-white p-8 border rounded shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    Register
                </button>
                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-blue-500 underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;

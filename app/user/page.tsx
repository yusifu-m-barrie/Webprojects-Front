"use client";

import { useSearchParams } from 'next/navigation';

const User = () => {
    const searchParams = useSearchParams();
    const username = searchParams.get('username') || 'User';

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Welcome, {username}!</h2>
            <p className="mt-2">You are now logged in.</p>
        </div>
    );
};

export default User;

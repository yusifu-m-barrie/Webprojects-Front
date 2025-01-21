"use client";

import { useRouter } from "next/navigation";

const AdminHeader = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token
        router.push("/auth/login"); // Redirect to login page
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 rounded text-white"
                >
                    Log Out
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;

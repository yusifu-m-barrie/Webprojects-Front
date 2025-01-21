"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Clear any previous errors

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token); // Save token in localStorage
                alert("Login successful!");
                router.push("/admin-dashboard"); // Redirect to dashboard
            } else {
                // Handle failure responses
                const errorData = await response.text();
                setError(errorData || "Invalid email or password.");
            }
        } catch (err) {
            setError("Unable to connect to the server. Please try again later.");
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md max-w-sm mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            {error && <p className="mb-4 text-sm text-red-500 text-center">{error}</p>}
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
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
            <p className="mt-4 text-center">
                Don't have an account?{" "}
                <a href="/auth/register" className="text-blue-500 underline">
                    Register
                </a>
            </p>
        </div>
    );
};

export default Login;

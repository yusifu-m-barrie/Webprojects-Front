const Header = () => {
    return (
        <header className="bg-blue-500 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">E-Commerce</h1>
                <nav>
                    <a href="/" className="px-4">Home</a>
                    <a href="/shop" className="px-4">Shop</a>
                    <a href="/auth/login" className="px-4">Login</a>
                    <a href="/auth/register" className="px-4">Register</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

// pages/index.tsx


import Banner from "@/app/components/Banner";
import ProductList from "@/app/components/ProductList";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto px-4 py-8">
                <ProductList />
            </div>
        </div>
    );
};

export default Home;

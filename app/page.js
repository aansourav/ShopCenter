import HeroSection from "@/components/HeroSection";
import Product from "@/components/Product";
import SubscribeSection from "@/components/SubscribeSection";
import products from "../public/productData.json";

export default function Home() {
    return (
        <>
            <HeroSection />
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
                    {products.products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <SubscribeSection />
        </>
    );
}

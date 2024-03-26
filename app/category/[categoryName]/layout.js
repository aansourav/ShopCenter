import CategorySidebar from "@/components/CategorySidebar";
import SubscribeSection from "@/components/SubscribeSection";

export default function Layout({ children }) {
    return (
        <>
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                <CategorySidebar />
                <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                    {children}
                </div>
            </section>
            <SubscribeSection />
        </>
    );
}

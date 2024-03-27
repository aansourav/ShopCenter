import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ShopCenter",
    description: "ShopCenter | The best place to shop online",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="">
            <body className={inter.className}>
                <Navbar />
                <Suspense fallback={<Loading />}>{children}</Suspense>
                <Footer />
            </body>
        </html>
    );
}

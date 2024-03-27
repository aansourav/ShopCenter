"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarButton = ({ category }) => {
    const pathname = usePathname();
    let activeCategory = "";
    pathname === `/category/${category.toLowerCase()}` &&
        (activeCategory = category);

    return (
        <Link href={`/category/${category.toLowerCase()}`}>
            <button
                className={`hover:border-b border-black block h-6 box-border mt-5 ${
                    activeCategory === category && "text-[#2ebb8c] font-bold"
                } `}
            >
                {category}
            </button>
        </Link>
    );
};

export default SidebarButton;

import SidebarButton from "./CategoryOption";

const CategorySidebar = () => {
    return (
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <SidebarButton category="All" />
            <SidebarButton category="Smartphones" />
            <SidebarButton category="Laptops" />
            <SidebarButton category="Fragrances" />
            <SidebarButton category="Skincare" />
            <SidebarButton category="Groceries" />
        </div>
    );
};

export default CategorySidebar;

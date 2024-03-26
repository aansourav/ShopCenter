import Product from "@/components/Product";
import products from "../../../public/productData.json";

const page = async ({ params: { categoryName } }) => {
    let categorizedProducts = [];
    if (categoryName === "all")
        return products?.products?.map((product) => (
            <Product key={product.id} product={product} />
        ));
    (await categoryName) &&
        products?.products?.map((product) => {
            if (product.category === categoryName)
                categorizedProducts.push(product);
        });

    if (categorizedProducts.length === 0)
        return (
            <h1 className="text-center">
                No products found for the category{" "}
                <span className="font-bold">{categoryName}</span>{" "}
            </h1>
        );
    return (
        <>
            {categorizedProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
};

export default page;

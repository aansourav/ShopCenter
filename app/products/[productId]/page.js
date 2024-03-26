import ProductDetailsPage from "@/components/ProductDetailsPage";
import products from "../../../public/productData.json";

const page = async ({ params: { productId } }) => {
    const product =
        (await productId) &&
        products?.products?.find((product) => product.id == productId);
    return <ProductDetailsPage product={product} />;
};

export default page;

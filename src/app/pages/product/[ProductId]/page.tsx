'use client';
import Container from "@/app/components/Container";
import { products } from "../../../../../utils/products";
import ProductDetails from "@/app/components/product/ProductDetails";
import RatingList from "@/app/components/product/RatingList";
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

interface ProductDinamicProps {
    productId?: string
}

const ProductDinamic = ({params} : {params: ProductDinamicProps}) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    const product = products.find((item) => item.id === search);
    console.log(product);

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product}/>
                <div className="flex flex-col mt-20 gap-4">
                    <div>Add Rating</div>
                    <RatingList product={product}/>
                </div>
            </Container>
        </div>
    );
};

export default ProductDinamic;
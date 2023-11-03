import Container from "@/app/components/Container";
import { product } from "../../../../../utils/product";
import ProductDetails from "@/app/components/product/ProductDetails";
import RatingList from "@/app/components/product/RatingList";

interface ProductDinamicProps {
    productId?: string
}

const ProductDinamic = ({params} : {params: ProductDinamicProps}) => {
    console.log(params);

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product = {product}/>
                <div className="flex flex-col mt-20 gap-4">
                    <div>Add Rating</div>
                    <RatingList product={product}/>
                </div>
            </Container>
        </div>
    );
};

export default ProductDinamic;
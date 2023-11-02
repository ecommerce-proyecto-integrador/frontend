import Container from "@/app/components/Container";
import { product } from "../../../../../utils/product";
import ProductDetails from "@/app/components/product/ProductDetails";

interface ProductDinamicProps {
    productId?: string
}

const ProductDinamic = ({params} : {params: ProductDinamicProps}) => {
    console.log(params);

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product = {product}/>
            </Container>
        </div>
    );
};

export default ProductDinamic;
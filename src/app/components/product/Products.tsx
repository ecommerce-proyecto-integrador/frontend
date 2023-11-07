import ProductCard from "./ProductCard";
import { products } from "../../../../utils/products";

const Products: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      );
    }

export default Products;
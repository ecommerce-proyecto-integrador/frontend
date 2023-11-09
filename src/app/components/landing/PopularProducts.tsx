import Link from "next/link";
import ProductCard from "../product/ProductCard";
import { PopularProductsList } from "../../../../utils/PopularProductList";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

type Product = {
  ID: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  inStock: boolean;
  sizeAvailable: string[];
  image: string;
  reviews: string[];
  Category: string;
};

const PopularProducts: React.FC = () => {
  //const product = [PopularProductsList];
  const [PopularProductsList, setPopularProductsList] = useState<Product[]>([]);

  const getPopularProducts = gql`
    query getTop3PopularProducts {
      getTop3PopularProducts
    }
  `;

  const { loading, error, data, refetch: refetchPopularProducts } = useQuery(
    getPopularProducts
  );

  useEffect(() => {
    if (!loading && !error && data) {
      console.log("Data", data.getTop3PopularProducts);
      const json = JSON.parse(data.getTop3PopularProducts);
      setPopularProductsList(json);
    }
  }, [loading, error, data]);
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-black mb-12">Popular Choices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {PopularProductsList.map((product) => (
          <ProductCard key={product.ID} data={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="../pages/products"
          className="bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;

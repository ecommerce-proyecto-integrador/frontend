"use client";
import Container from "@/app/components/Container";
//import { products } from "../../../../../utils/products";
import ProductDetails from "@/app/components/product/ProductDetails";
import RatingList from "@/app/components/product/RatingList";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import GraphQlProvider from "./../../../GraphQLProvider";
import client from "./../../../apolloClient";
interface ProductDinamicProps {
  productId?: string;
}

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
  stock: number;
};

const ProductDinamic = ({ params }: { params: ProductDinamicProps }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const [Product, setProduct] = useState<Product>();
  const getProduct = gql`
    query getProductById($getProductByIdInput: getProductByIdInput!) {
      getProductById(getProductByIdInput: $getProductByIdInput)
    }
  `;
  const {
    loading,
    error,
    data,
    refetch: refechProduct,
  } = useQuery(getProduct, {
    variables: {
      getProductByIdInput: {
        id: search,
      },
    },
    client: client,
  });

  useEffect(() => {
    if (!loading && !error && data) {
      console.log("Data byID", data.getProductById);
      const json = JSON.parse(data.getProductById);
      json.sizeAvailable = JSON.parse(json.sizeAvailable);
      setProduct(json);
    }
  }, [loading, error, data]);

  //const product = products.find((item) => item.id === search);
  console.log("aaa", Product);

  return (
    <GraphQlProvider children={undefined}>
      <div className="p-8">
        <Container>
          {Product ? (
            <>
              <ProductDetails product={Product} />
              <div className="flex flex-col mt-20 gap-4">
                <div>Add Rating</div>
                <RatingList product={Product} />
              </div>
            </>
          ) : (
            <></>
          )}
        </Container>
      </div>
    </GraphQlProvider>
  );
};

export default ProductDinamic;

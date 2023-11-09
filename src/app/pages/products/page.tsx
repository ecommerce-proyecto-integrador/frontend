"use client";
import React, { useState, useEffect } from "react";
import { products } from "../../../../utils/products";
import Container from "@/app/components/Container";
import Products from "@/app/components/product/Products";
import GraphQlProvider from "./../../GraphQLProvider";
const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const product = [products];

  return (
    <GraphQlProvider children={undefined}>
      <Container>
        <Products />
      </Container>
    </GraphQlProvider>
  );
};

export default ProductsPage;

'use client';

import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";
import Button from "../Button";
import ProductImage from "./ProductImage";
import { useCart } from "../../../../hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

const HorizontalLine = () => {
    return (
        <hr className=" w-[30%] my-2"/>
    )
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
    const router = useRouter();
    const {handleAddProductToCart, cartProducts} = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);
    const productRating = product.reviews.reduce((acc:number, item:any) => acc + item.rating, 0) / product.reviews.length;

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price
    });

    useEffect(() => {
        setIsProductInCart(false)

        if(cartProducts){
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if(existingIndex > -1){
                setIsProductInCart(true);
            }
        }
    }, [cartProducts])

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImg: value};});
    }, [cartProduct.selectedImg])

    const handleQuantityIncrease = useCallback(() => {
        if(cartProduct.quantity === 99) return;

        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity + 1};});
    }, [cartProduct])

    const handleQuantityDecrease = useCallback(() => {
        if(cartProduct.quantity === 1) return;

        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity - 1};});
    }, [cartProduct])

    return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
        <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect}/>
        <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-3xl font-bold text-slate-700">{product.name}</h2>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2"><Rating value={productRating} readOnly/></div>
                <div>{product.reviews.length} reviews</div>
            </div>
            <HorizontalLine/>
            <div className="text-justify">{product.description}</div>
            <HorizontalLine/>
            <div>
                <span className="font-bold">CATEGORY: </span>
                {product.category}
            </div>
            <div>
                <span className="font-bold">BRAND: </span>
                {product.brand}
            </div>
        <div className= {product.inStock ? 'text-teal-400 font-semibold :' : 'text-rose-400 font-semibold'}>{product.inStock ? 'In stock' : 'Out stock'}</div>
        <HorizontalLine/>
            {isProductInCart ? <>
                <p className="mb-2 text-slate-500 flex items-center gap-1">
                    <MdCheckCircle size={20} className="text-teal-400"/>
                    <span>Product added to cart</span>
                </p>
                <div className="max-w-[300px]">
                    <Button label="Go to cart" outline onClick={() => {router.push('/pages/cart')}}/>
                </div>
            </> : <>
                <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect} />
                <HorizontalLine/>
                <SetQuantity cartProduct={cartProduct} handleQuantityDecrease={handleQuantityDecrease} handleQuantityIncrease={handleQuantityIncrease} />
                <HorizontalLine/>
                <div className="max-w-[300px]"><Button label="Add To Cart" onClick={() => handleAddProductToCart(cartProduct)}/></div>
            </>}
        </div>
        </div>
    )
};

export default ProductDetails;
'use client';

import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import SetColor from "../products/SetColor";
import SetQuantity from "../products/SetQuantity";
import Button from "../Button";

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
    })

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
        <div>Images</div>
        <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-3xl font-bold text-slate-700">{product.name}</h2>
            <div className="flex items-center gap-2"><Rating value={productRating} readOnly/></div>
            <div>{product.reviews.lenght} reviews</div>
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
            <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect} />
            <HorizontalLine/>
            <SetQuantity cartProduct={cartProduct} handleQuantityDecrease={handleQuantityDecrease} handleQuantityIncrease={handleQuantityIncrease} />
            <HorizontalLine/>
            <div className="max-w-[300px]"><Button label="Add To Cart" onClick={() => {}}/></div>
        </div>
        </div>
    )
};

export default ProductDetails;
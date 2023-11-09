'use client';
import Image from "next/image";
import { formatPrice } from "../../../../utils/formatPrice";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {
    const router = useRouter();

    if(data.reviews == "[]"){
        data.reviews = Array.from([]);
    }
    else
    {
        data.reviews = Array.from(data.reviews);
    }
    
    const productRating = data.reviews.reduce((acc:number, item:any) => acc + item.rating, 0) / data.reviews.length;

    return ( 
        <div onClick={() => router.push(`/pages/product/${data.name}?id=${data.ID}`)} className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-lg p-2 transition hover:scale-105
        text-center text-sm shadow-2xl">
            <div className="flex flex-col items-center w-full gap-1 my-4">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image fill src={`http://localhost:8181/images/${data.images[0].image}`} alt={data.name} className="w-full h-full object-contain"/>
                </div>
                <div className="mt-4 font-semibold">{data.name}</div>
                <div>
                    <Rating value={productRating} readOnly/>
                </div>
                <div>{data.reviews.length} reviews </div>
                <div className="font-semibold">{formatPrice(data.price)}</div>
            </div>
        </div>
    );
};

export default ProductCard;

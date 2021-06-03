import React from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";


function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {
    return (
        <div className="flex">
            <Image src={image} height={180} width={200} objectFit="contain" />

            <div className="mx-6  ">
                <p className="font-bold">{title}</p>
                <div className="flex mt-2">
                    {Array(rating).fill().map((_,i) => (
                    <StarIcon className="h-dd text-yellow-500" />
                    ))}
                </div>
                <p className="text-dd mt-2">{description}</p>
            </div>
        </div>
    )
}

export default CheckoutProduct

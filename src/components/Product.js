import React from 'react';
import Image from 'next/image';
import {StarIcon} from "@heroicons/react/solid";
import {useState} from "react";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";

import {useSelector} from "react-redux";
import { useRouter } from "next/router";
import {selectItems} from "../slices/basketSlice";

function Product({id, title, price, description, category, image}) {


    const router = useRouter();

    const items = useSelector(selectItems);

    const dispatch  = useDispatch();

    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, rating, hasPrime
        };

        dispatch(addToBasket(product))
    };

    const [hasPrime] = useState(Math.random() < 0.5);

    return (
        <div className="relative flex flex-col m-4 bg-white z-30 p-10 ">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <Image onClick = {() => router.push("{/productdetail")} src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3 font-bold">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i)=>(
                    <StarIcon className="h-dd text-yellow-500" />
                    
                ))}
            </div>


            <p className="text-ss mt-2 my-2 line-clamp-2">{description}</p>

            <div className="mb-5 font-bold">
                <Currency quantity={price} currency="GBP"  />
            </div>    


            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img src="./prime.png"  className="w-12" />
                    <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                </div>
            )} 

            <button onClick={addItemToBasket} className="mt-auto  button">Add to Basket</button>

        </div>
    )
}


export default Product

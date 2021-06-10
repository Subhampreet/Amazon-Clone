import React from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import {addToBasket, removeFromBasket} from "../slices/basketSlice";



function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, category, image, hasPrime
        };
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }


    return (
        <div className="checkout-product">
            <img src={image} height={170} width={170} objectFit="contain"  className="mx-2 " />

            <div className="checkout-product-middle ">
                <p className="font-bold">{title}</p>
                <div className="flex mt-2">
                    {Array(rating).fill().map((_,i) => (
                    <StarIcon className="h-dd text-yellow-500" />
                    ))}
                </div>

                <p className="text-sm mt-2 my-2 line-clamp-3" >{description}</p>

                <div className="font-semibold">
                    <Currency quantity={price} currency="GBP"  />
                </div>               


                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img src="./prime.png"  className="w-12" />
                        <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                    </div>
                )}
            </div>

            {/* Right Add and Remove button */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end ">
                    <button className="button font-semibold" onClick={addItemToBasket}>Add to Basket</button>
                    <button className="button font-semibold" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct

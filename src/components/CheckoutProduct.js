import React from 'react';
import Image from "next/image";
import { StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import {addToBasket, removeFromBasket, removeGroupedFromBasket
} from "../slices/basketSlice";




function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime, quantity}) {


    const total = price * quantity;

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

    function removeGroupFromBasket() {
        dispatch(removeGroupedFromBasket({ id }));
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
                    <Currency quantity={total} currency="GBP"  />
                </div>               


                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img src="./prime.png"  className="w-12" />
                        <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                    </div>
                )}
            </div>

            {/* Right Add and Remove button
            <div className="flex flex-col space-y-2 my-auto justify-self-end ">
                    <button className="button font-semibold" onClick={addItemToBasket}>Add to Basket</button>
                    <button className="button font-semibold" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div> */}


            {/* Buttons on the right of the products */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <div className="flex justify-between xs:justify-start">
                    <button
                        className="button minus-button "
                        onClick={removeItemFromBasket}>
                        {/* <MinusSmIcon className="h-5 text-black" /> */}
                        <div className="minus-button-sm font-extrabold">-</div>
                    </button>
                    <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
                        Quantity: <span className="font-bold">{quantity}</span>
                    </div>
                    <button className="button minus-button  " onClick={addItemToBasket}>
                        <div className="minus-button font-extrabold">+</div>
                    </button>
                </div>
                <button className="button" onClick={removeGroupFromBasket}>
                    Remove from Basket
                </button>
            </div>

        </div>
    )
}

export default CheckoutProduct

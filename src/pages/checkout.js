import React from 'react'
import Header from '../components/Header';
import Image from "next/image";
import { selectItems, selectTotal } from '../slices/basketSlice';
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from 'next-auth/client';
import { groupBy } from "lodash";



function checkout() {

    const items = useSelector(selectItems);

    const [session] = useSession();

    const total = useSelector(selectTotal);

    const groupedItems = Object.values(groupBy(items, "id"));

    return (
        <div className="bg-gray-100">
           <Header />

           <main className="lg:flex max-w-screen-2xl mx-auto">
               <div className="flex-grow m-5 mt-2 shadow-sm">
                   <Image
                        src="/checkout_banner.png"
                        width = {1020}
                        height ={250}
                        onjectFit = "contain"
                   />

                   <div className="flex flex-col p-1 space-y-10 bg-white  ">
                       <h1 className="text-xxl border-b p-2 pl-1 font-bold">
                           {items.length == 0 ? "Your Amazon Basket is empty": "Your Shopping Basket"}
                       </h1>

                       <div className="pl-9 pr-9 ">
                            {
                                groupedItems.map((group, i) => (
                                    <CheckoutProduct
                                            key={i} 
                                            id={group[0].id}
                                            title={group[0].title}
                                            rating={group[0].rating}
                                            price={group[0].price}
                                            description={group[0].description}
                                            category={group[0].category}
                                            image={group[0].image}
                                            hasPrime={group[0].hasPrime}
                                            quantity={group.length}
                                    />
                                ))
                            }
                       </div>                  

                    </div>
               </div>


                {/* Right */}
                {items.length > 0 && (
                    <div className="flex flex-col mt-5 bg-white p-10 pt-8 shadow-md">
                    
                        <>
                            <h1 className="font-bold text-xl whitespace-nowrap" >Subtotal ({items.length} items):
                            <span className="font-bold ml-1">
                                <Currency quantity={total} currency="GBP" />
                            </span>
                            </h1>

                            <button className={`button font-semibold mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </>
                    
               </div>
                )}
               
               
           </main>
        </div>
    )
}

export default checkout

import React from 'react'
import Header from '../components/Header';
import Image from "next/image";

function checkout() {
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
                       <h1 className="text-xxl border-b pb-2 pl-1 font-bold">Your Shopping Basket</h1>
                   </div>

               </div>

               <div>

               </div>
               
           </main>
        </div>
    )
}

export default checkout

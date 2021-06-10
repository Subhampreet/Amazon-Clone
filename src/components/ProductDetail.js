import React from 'react'

import Image from 'next/image';


function ProductDetail({id, title, price, rating, description, category, image, hasPrime}) {



    return (
        <div>
            <p>{title}</p>
           

        </div>
    )
}

export default ProductDetail

import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Collections = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('/api.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="lg:mt-24">
            <div className="text-center">
            <h1 className="title text-4xl">EXPLORE THE COLLECTION</h1>
            <p className="des mt-3">Through drawings and fragrance, Peumworld’s Essences bring to life coral, pearl, bark, <br/> water lily and desert rose. A quintet of natural masterpieces.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 px-12 gap-y-16 my-12">
                {
                    products.map(product=><Product 
                    key={product.id}
                    product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Collections;
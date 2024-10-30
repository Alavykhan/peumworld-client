import { useEffect, useState } from "react";
import homeVideo from '../../../assets/videos/home.mp4'

const Banner = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(()=>{
        fetch('api.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <div className="lg:flex items-center">
           <div className="lg:w-8/12">
            <video loop autoPlay={true} muted src={homeVideo}></video>
           </div>
           <div className="lg:w-4/12 lg:px-4 space-y-6">
            <h1 className="title lg:text-4xl ">ESSENCES BY PEUMWORLD</h1>
            <p className="text-justify des">Deep in the heart of nature, scentless treasures capture the imagination and stir the senses. Peumworld infuses these gems with scent through a collection of exclusive fragrances. Five essences to smell, sense and feel.</p>
            <button className="des border-2 border-black py-2 px-4">
                Discover The Collection
            </button>
           </div>
        </div>
    );
};

export default Banner;
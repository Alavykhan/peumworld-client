
const Product = ({ product }) => {
    const { name, img, price, size, des } = product;
    return (
        <div className="w-[250px]">
            <img className="w-[250px] h-[300px]" src={img} alt="" />
            <h2 className="title text-md pt-4">{name}</h2>
            <div className="space-y-2">
            <p className="des text-gray-600 pt-2">{des}</p>
            <p className="font-small text-black">{size}ML</p>
            <p className="font-medium">{price}$</p>
            <button className="des bg-black text-white w-full py-2 px-4">
                Add To Bag
            </button>
            </div>
        </div>
    );
};

export default Product;
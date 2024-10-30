
const Product = ({ product }) => {
    const { name, img } = product;
    return (
        <div>
            <h2>{name}</h2>
            <img className="w-[200px] h-[300px]" src={img} alt="" />
        </div>
    );
};

export default Product;
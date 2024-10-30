import img1 from '../../../assets/img/feature3.jpg'

const Feature = () => {
    return (
        <div className="lg:px-12 my-20">
            <div className="flex items-center">
                <div className="lg:w-4/12">
                    <h2>Compose your gift sets</h2>
                    <p>
                    Yours to curate with care, our gift sets and boxes hold the most beautiful scented gestures.
                    The perfect gift for yourself or someone special this festive season.
                    </p>
                </div>
                <div className="lg:w-8/12">
                    <img src={img1} alt="" />
                </div>
            </div>
            
            <div className="flex items-center mt-20">
            <div className="lg:w-8/12">
                    <img src={img1} alt="" />
                </div>
                <div className="lg:w-4/12">
                    <h2>Compose your gift sets</h2>
                    <p>
                    Yours to curate with care, our gift sets and boxes hold the most beautiful scented gestures.
                    The perfect gift for yourself or someone special this festive season.
                    </p>
                </div>
                
            </div>
           
        </div>
    );
};

export default Feature;
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-white text-black">
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;
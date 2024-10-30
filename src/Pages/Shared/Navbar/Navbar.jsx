import { Link } from "react-router-dom";
import { RiUser6Fill } from "react-icons/ri";
import { BsBag } from "react-icons/bs";

const Navbar = () => {

    const nabs= <>
    <li><Link to=''>Home</Link></li>
    <li><Link to=''>Products</Link></li>
    <li><Link to=''>Login</Link></li>

    </>

    return (
        <div className="navbar bg-white border-b-2 lg:px-12">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {nabs}
            </ul>
            </div>
            <Link className="text-xl title">peumworld</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {nabs}
            </ul>
        </div>
        <div className="navbar-end gap-3">
        <RiUser6Fill className="text-xxl" />
        <BsBag className="text-1xl"/>
        </div>
        </div>
    );
};

export default Navbar;
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer flex justify-between px-12 bg-white py-10">
            <div>
                <h6 className="footer-title uppercase">Services</h6>
                <Link to=''>Our Services</Link>
                <Link to=''>Find a gift</Link>
            </div>
            <div>
                <h6 className="footer-title uppercase">Services</h6>
                <Link className="flex gap-2 items-center" to='https://www.facebook.com/'><FaFacebook /> Facebook</Link>
                <Link className="flex gap-2 items-center" to='https://www.instagram.com/'><FaInstagram /> Instagram</Link>
                <Link className="flex gap-2 items-center" to='https://www.youtube.com/'><FaYoutube /> Youtube</Link>
                <Link className="flex gap-2 items-center" to='https://www.pinterest.com/'><FaPinterest /> Pinterest</Link>
            </div>
            <div>
                <h6 className="footer-title">Legal</h6>
                <Link to=''>Terms of use</Link>
                <Link to=''>Privacy policy</Link>
                <Link to=''>Cookie policy</Link>
            </div>
            </footer>
            <footer className="footer bg-white border-t-2 px-10 py-4">
            <aside className="grid-flow-col items-center">
            <p className="title text-black text-md">

                peumworld
                </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
               <p className="text-black text-xs">All rights reserve by @<span className="title">peumworld</span></p>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;
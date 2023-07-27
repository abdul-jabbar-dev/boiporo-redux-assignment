import { Link } from "react-router-dom";

export default function Navber() {
    return (
        <nav className="w-100 bg-slate-500 py-5 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 text-xl uppercase text-gray-700">
            <div className="container mx-auto flex justify-between ">
                <div></div>
                <ul className="list-none flex justify-center gap-20">
                    <li className=" hover:underline"><Link to={'/'}>Home</Link></li>
                    <li className=" hover:underline">Login</li>
                    <li className=" hover:underline">about</li>
                </ul>
                <div>
                    <Link className="hover:underline" to={'/login'}>Login</Link> 
                </div>
            </div>
        </nav>
    )
}

import { Link } from "react-router-dom";
import { useGetUserQuery, useLogoutUserMutation } from "../../redux/fetures/booksAPI/book";

export default function Navber() {
    const { data: user } = useGetUserQuery({ token: localStorage.getItem("token") }, { refetchOnMountOrArgChange: true })
    const [logout] = useLogoutUserMutation(undefined)
    return (
        <nav className="w-100 bg-slate-500 py-5 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 text-xl uppercase text-gray-700">
            <div className="container mx-auto flex justify-between ">
                <div></div>
                <ul className="list-none flex justify-center gap-20">
                    <li className=" hover:underline"><Link to={'/'}>Home</Link></li>
                    {
                        user && <><li className=" hover:underline"><Link to={'/wishlist'}>Wishlist</Link></li>
                            <li className=" hover:underline"><Link to={'/reading'}>Reading</Link></li></>
                    }

                </ul>
                <div>
                    {
                        user ? <button onClick={() => { logout(undefined); document.location.reload() }}>Logout</button> : <Link className="hover:underline" to={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </nav>
    )
}

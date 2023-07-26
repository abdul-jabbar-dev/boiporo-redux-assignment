import { Outlet } from "react-router-dom";
import Navber from "../../components/Navber";


export default function Layout() {
    return (
        <>
            <Navber></Navber>
            <Outlet />
        </>
    )
}

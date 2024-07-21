import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <>
            <nav>
                <ul className="flex pt-1 pl-2 pb-1 bg-black">
                    <li className="mr-2 p-1 bg-amber-200">
                        <Link to="/Generator">Home</Link>
                    </li>
                    <li className="mr-2 p-1 bg-red-200">
                        <Link to="/form">Formularz</Link>
                    </li>
                    <li className="p-1 bg-red-200">
                        <Link to="/dynamicform">Dynamiczny Formularz</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}
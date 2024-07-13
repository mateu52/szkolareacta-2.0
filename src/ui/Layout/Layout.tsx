import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Generator">Home</Link>
                    </li>
                    <li>
                        <Link to="/form">Formularz</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}
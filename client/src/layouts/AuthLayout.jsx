import {Outlet} from "react-router-dom";

function AuthLayout({ children }) {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default AuthLayout;
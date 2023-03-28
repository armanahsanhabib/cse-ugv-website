import { Link, Outlet } from "react-router-dom";
import LOGO from "../../../images/logo.png";
import "../css/header.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/routine">Routine</Link>
                </li>
                <li>
                    <Link to="/students">Students</Link>
                </li>
            </ul>
        </nav>
    );
}

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo_area">
                        <a href="http://" rel="noopener noreferrer"><img src={LOGO} alt="logo" /></a>
                    </div>
                    <NavBar />
                    <div className="login_area">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-right-to-bracket"></i>
                            Login
                        </a>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Header; 
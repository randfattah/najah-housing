import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">

                <div className="nav-logo">
                    <span className="logo-box">NH</span>
                    <span className="logo-text">Najah Housing</span>
                </div>

                <nav className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Explore</a>
                    <a href="#">Map View</a>
                    <a href="#">Favorites</a>
                </nav>

                <div className="nav-actions">

                    <span className="icon">🌐</span>
                    <span className="icon">🌙</span>

                    <Link
                        to="/login"
                        className="login-link active-link"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="signup-nav-btn"
                    >
                        Sign Up
                    </Link>

                </div>

            </div>
        </header>
    );
}

export default Navbar;
import "../../styles/auth.css";
import "../../styles/footer.css";
import "../../styles/navbar.css";
import Navbar from "../../compenets/Navbar";
import Footer from "../../compenets/Footer";


function Login() {
    return (
        <>
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

                        <a href="/login" className="login-link active-link">
                            Login
                        </a>

                        <a href="/signup" className="signup-nav-btn">
                            Sign Up
                        </a>
                    </div>

                </div>
            </header>

            <main className="page-content">

                <div className="auth-container">

                    <div className="auth-header">
                        <div className="logo-circle">NH</div>

                        <h2>Login</h2>

                        <p className="subtitle">
                            Welcome back to Najah Housing
                        </p>
                    </div>

                    <div className="card login-card">

                        <form>

                            <div className="form-group">
                                <label>Email</label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>

                                <div className="password-wrapper">
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                    />

                                    <span className="eye-icon">👁️</span>
                                </div>
                            </div>

                            <div className="forgot-pass">
                                <a href="#">Forgot Password?</a>
                            </div>

                            <button
                                type="submit"
                                className="main-login-btn"
                            >
                                Login
                            </button>

                        </form>

                        <div className="divider">
                            <span>or continue with</span>
                        </div>

                        <div className="social-login">

                            <button className="social-btn facebook">
                                Facebook
                            </button>

                            <button className="social-btn twitter">
                                Google
                            </button>

                        </div>

                        <p className="switch-auth">
                            Don't have an account?
                            <a href="/signup"> Sign Up</a>
                        </p>

                    </div>

                </div>

            </main>
            <Footer />
        </>
    );
}

export default Login;
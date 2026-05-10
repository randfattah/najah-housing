import { useState } from "react";
import "../../styles/auth.css";
import "../../styles/footer.css";
import "../../styles/navbar.css";
import Navbar from "../../compenets/Navbar";
import Footer from "../../compenets/Footer";
import Forgot from "../../compenets/Forgot";


function Login() {
    const [accountType, setAccountType] = useState("seeker");
    const [showForgot, setShowForgot] = useState(false);

    return (
        <>
            <Navbar />

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

                        <form onSubmit={e => e.preventDefault()}>

                            <div className="form-group">
                                <label>Account Type</label>

                                <div className="account-type-toggle">
                                    <button
                                        type="button"
                                        className={accountType === "seeker" ? "active" : ""}
                                        onClick={() => setAccountType("seeker")}
                                    >
                                        Seeker
                                    </button>

                                    <button
                                        type="button"
                                        className={accountType === "owner" ? "active" : ""}
                                        onClick={() => setAccountType("owner")}
                                    >
                                        Property Owner
                                    </button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="you@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>

                                <div className="password-wrapper">
                                    <input type="password" placeholder="••••••••" />
                                    <span className="eye-icon">👁️</span>
                                </div>
                            </div>

                            <div className="forgot-pass">
                                <a
                                    href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        setShowForgot(true);
                                    }}
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            <button type="submit" className="main-login-btn">
                                Login
                            </button>

                        </form>

                        <div className="divider">
                            <span>or continue with</span>
                        </div>

                        <div className="social-login">
                            <button
                                className="social-btn facebook"
                                type="button"
                                onClick={() => window.open('https://www.facebook.com/', '_blank')}
                            >
                                Facebook
                            </button>

                            <button
                                className="social-btn twitter"
                                type="button"
                                onClick={() => window.open('https://accounts.google.com/', '_blank')}
                            >
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

            <Forgot
                open={showForgot}
                onClose={() => setShowForgot(false)}
            />

            <Footer />
        </>
    );
}

export default Login;
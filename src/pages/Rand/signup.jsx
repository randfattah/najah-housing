import { useState } from "react";
import "../../styles/auth.css";
import "../../styles/footer.css";
import "../../styles/navbar.css";
import Navbar from "../../compenets/Navbar";
import Footer from "../../compenets/Footer";

function Signup() {
    const [accountType, setAccountType] = useState("seeker");
    const [showForgot, setShowForgot] = useState(false);

    return (
        <>
            <Navbar />
            <main className="page-content">
                <div className="auth-container">
                    <div className="auth-header">
                        <div className="logo-circle">NH</div>

                        <h2>Sign Up</h2>

                        <p>Create your account</p>
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
                                <label>Full Name</label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>

                                <input
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                className="main-login-btn"
                            >
                                Create Account
                            </button>

                        </form>
                        <p className="switch-auth">
                            Already have an account?
                            <a href="/login"> Login</a>
                        </p>
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

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Signup;
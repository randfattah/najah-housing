import "../../styles/auth.css";
import "../../styles/footer.css";
import "../../styles/navbar.css";
import Navbar from "../../compenets/Navbar";
import Footer from "../../compenets/Footer";

function Signup() {
    return (
        <>
            <Navbar />
            <div className="signup-page-layout">
                <div className="auth-container">
                    <div className="auth-header">
                        <div className="logo-circle">NH</div>

                        <h2>Sign Up</h2>

                        <p>Create your account</p>
                    </div>

                    <div className="card login-card">

                        <form>

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

                            <button className="social-btn facebook">
                                Facebook
                            </button>

                            <button className="social-btn twitter">
                                Google
                            </button>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
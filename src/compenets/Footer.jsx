function Footer() {
    return (
        <footer className="main-footer">

            <hr className="footer-divider" />

            <div className="footer-grid">

                <div className="footer-col brand">

                    <div className="footer-logo">
                        <span className="logo-box small">NH</span>

                        <h3>Najah Housing</h3>
                    </div>

                    <p>
                        Smart housing platform for Nablus city,
                        connecting property seekers with owners.
                    </p>

                </div>

                <div className="footer-col">

                    <h4>Quick Links</h4>

                    <ul>
                        <li>Explore</li>
                        <li>Map View</li>
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>

                </div>

                <div className="footer-col">

                    <h4>Contact</h4>

                    <p>📍 Nablus, Palestine</p>
                    <p>📧 info@najahhousing.com</p>
                    <p>📞 +970 59 123 4567</p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
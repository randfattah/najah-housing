import { useState } from "react";

function Forgot({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch('http://localhost:3000/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message || 'Check your email for a reset link.');
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "40px 32px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          position: "relative",
          textAlign: "center",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "18px",
            background: "none",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            color: "#64748b",
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        <div className="logo-circle">NH</div>

        <h2>Reset Password</h2>

        <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
          Enter your email to receive a reset link
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ textAlign: "left" }}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="main-login-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        {message && <div style={{ marginTop: 16, color: '#16b3b3', fontWeight: 500 }}>{message}</div>}
      </div>
    </div>
  );
}

export default Forgot;

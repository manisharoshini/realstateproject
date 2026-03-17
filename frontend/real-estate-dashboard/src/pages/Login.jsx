import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Login() {
  const navigate = useNavigate();
  const { role } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Development bypass
    if (email === "admin@estateflow.com" && password === "12345678") {
      setLoading(false);
      navigate("/admin");
      return;
    }
    // only for development purpose !! 

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    const user = data.user;

    const { data: profile, error: profileError } = await supabase
      .from("user_profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      setError(profileError.message);
      setLoading(false);
      return;
    }

    if (!profile) {
      setError(`No profile found for user.`);
      setLoading(false);
      return;
    }

    const upperRole = (role || "AGENT").toUpperCase();
    if (profile.role !== upperRole) {
      setError(`This account does not have access for this role.`);
      setLoading(false);
      return;
    }

    if (upperRole === "ADMIN") navigate("/admin/AdminDashboard");
    else if (upperRole === "AGENT") navigate("/Agent/AgentDashboard");
    else if (upperRole === "BUILDER") navigate("/builder/BuilderDashboard");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .login-wrapper {
          min-height: 100vh;
          background-color: #f3f4f6;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          padding: 20px;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 24px;
        }

        .logo-box {
          width: 56px;
          height: 56px;
          background-color: #1d4ed8;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-shadow {
          width: 32px;
          height: 4px;
          background-color: #cbd5e1;
          border-radius: 4px;
          margin-top: 10px;
          opacity: 0.6;
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          overflow: hidden;
          margin-bottom: 24px;
        }

        .card-image {
          height: 140px;
          width: 100%;
          background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800');
          background-size: cover;
          background-position: center 30%;
          filter: grayscale(100%) contrast(1.1) brightness(0.85);
        }

        .card-content {
          padding: 32px;
        }

        .title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 6px;
          letter-spacing: -0.025em;
        }

        .subtitle {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .input-group label, .label-row label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0;
        }

        .forgot-password {
          font-size: 12px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          color: #9ca3af;
          display: flex;
        }

        .form-input {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          color: #111827;
          outline: none;
          transition: all 0.2s;
          background-color: #fafafa;
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .form-input:focus {
          border-color: #2563eb;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .eye-btn {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          display: flex;
          padding: 0;
        }
        .eye-btn:hover {
          color: #6b7280;
        }

        .checkbox-row {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .checkbox-row input[type="checkbox"] {
          width: 16px;
          height: 16px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          margin-right: 8px;
          accent-color: #2563eb;
          cursor: pointer;
        }

        .checkbox-row label {
          font-size: 13px;
          color: #4b5563;
          cursor: pointer;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .submit-btn:hover {
          background-color: #1d4ed8;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .divider {
          height: 1px;
          background-color: #f3f4f6;
          margin: 24px 0;
        }

        .back-btn {
          width: 100%;
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .back-btn:hover {
          color: #374151;
        }

        .footer {
          text-align: center;
          color: #9ca3af;
          font-size: 12px;
        }

        .footer-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 8px;
        }

        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #6b7280;
        }

        .error-message {
          background-color: #fef2f2;
          color: #b91c1c;
          padding: 10px;
          border-radius: 6px;
          font-size: 13px;
          margin-bottom: 16px;
          border: 1px solid #fecaca;
        }

        .spinner {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="login-wrapper">
        <div className="logo-container">
          <div className="logo-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="white" />
            </svg>
          </div>
          <div className="logo-shadow"></div>
        </div>

        <div className="login-card">
          <div className="card-image"></div>

          <div className="card-content">
            <h1 className="title">Welcome Back</h1>
            <p className="subtitle">Enter your credentials to access the property portal</p>

            <form onSubmit={login}>
              {error && <div className="error-message">{error}</div>}

              <div className="input-group">
                <div className="label-row">
                  <label>Email Address</label>
                </div>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="e.g. you@rajerealty.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="label-row">
                  <label>Password</label>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showPassword ? (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </>
                      ) : (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  id="keepLoggedIn"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                />
                <label htmlFor="keepLoggedIn">Keep me logged in</label>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? <span className="spinner"></span> : (
                  <>
                    Sign In to Portal
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="divider"></div>

            <button className="back-btn" onClick={() => navigate("/")} type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Role Selection
            </button>
          </div>
        </div>

        <div className="footer">
          <p>© {new Date().getFullYear()}Raje Realty CRM Inc. Secure Enterprise Access.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
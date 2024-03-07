import "../styles/LoginPage.css";
import { XSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SignUpPage() {
  const { errorMsg, loading, credentials, setCredentials, handleLogin } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-heading">
          <h1>Log In</h1>
          <p>Welcome back, sign in to view the latest swaps.</p>
        </div>
        <form onSubmit={(e) => handleLogin(e)} id="login-form">
          <div className="input-container">
            <input
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              disabled={loading}
            />
          </div>

          <div className="input-container">
            <input
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              disabled={loading}
            />
          </div>

          {errorMsg && (
            <div className="login-form-error">
              <XSquare />
              {errorMsg}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
          <div className="form-footer">
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

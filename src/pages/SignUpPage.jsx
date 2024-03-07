import "../styles/SignUpPage.css";
import { XSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SignUpPage() {
  const { errorMsg, loading, credentials, setCredentials, handleSignup } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="signup-container">
        <div className="signup-heading">
          <h1>Sign up</h1>
          <p>Join our community of swappers by creating an account.</p>
        </div>
        <form onSubmit={(e) => handleSignup(e)} id="signup-form">
          <div className="input-container">
            <input
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              disabled={loading}
            />
          </div>

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
            <div className="signup-form-error">
              <XSquare />
              {errorMsg}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
          <div className="form-footer">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import "../styles/SignUpPage.css";
import { useState } from "react";
import { XSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [errorMsg, setErrorMsg] = useState(false);

  return (
    <div className="container">
      <div className="signup-container">
        <div className="signup-heading">
          <h1>Sign up</h1>
          <p>Join our community of swappers by creating an account.</p>
        </div>
        <form id="signup-form">
          <div className="input-container">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>

          <div className="input-container">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className="input-container">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          {errorMsg && (
            <div className="signup-form-error">
              <XSquare />
              Username must be at least 3 characters.
            </div>
          )}

          <button type="submit">Create account</button>
          <div className="form-footer">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

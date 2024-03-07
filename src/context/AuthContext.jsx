import PropTypes from "prop-types";
import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // Global state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [credentials, setCredentials] = useState({});

  // Functions
  // ...

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, errorMsg, setErrorMsg, credentials, setCredentials }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ListingContext = createContext();

function ListingProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ListingContext.Provider value={{ errorMsg, setErrorMsg, loading, setLoading }}>{children}</ListingContext.Provider>
  );
}

export { ListingProvider, ListingContext };

ListingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { getListingById } from "../utils/listingFetch";
const ListingContext = createContext();

function ListingProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetSingleListing = async (listingId) => {
    const data = await getListingById(listingId);
  };

  const handleGetUsersListings = async (userId) => {};

  return (
    <ListingContext.Provider
      value={{ errorMsg, setErrorMsg, loading, setLoading, handleGetSingleListing, handleGetUsersListings }}
    >
      {children}
    </ListingContext.Provider>
  );
}

export { ListingProvider, ListingContext };

ListingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

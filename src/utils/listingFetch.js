const baseUrl = import.meta.env.PROD ? import.meta.env.VITE_APP_BASE_URL : "http://localhost:5001";

export const getAllListings = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/listings/get-all-listings`);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const getListingById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/api/listings/get-listing-by-id/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const createListing = async (listing) => {
  try {
    const response = await fetch(`${baseUrl}/api/listings/post-listing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

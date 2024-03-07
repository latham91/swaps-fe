import "../styles/CreateListingPage.css";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { Image } from "lucide-react";
import { createListing } from "../utils/listingFetch";
import { useNavigate } from "react-router-dom";

export default function CreateListingPage() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [listingBody, setListingBody] = useState({
    id: user.id,
    title: "",
    description: "",
    image: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        setListingBody({ ...listingBody, image: base64 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await createListing(listingBody);

    if (!data.success) {
      return console.log(data.message);
    }

    navigate("/");
  };

  return (
    <div className="container">
      <div className="create-listing-container">
        <div className="create-listing-heading">
          <h1>Create Listing</h1>
        </div>

        <div className="add-image-container">
          <label htmlFor="image" className="add-image-label">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <>
                <Image size={38} />
                <p className="image-text">Add Image</p>
              </>
            )}
          </label>
          {fileName ? <p>{fileName.substring(0, 40) + "..."}</p> : null}
          <input type="file" id="image" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
        </div>

        <form onSubmit={(e) => handleSubmit(e)} id="create-listing-form">
          <div className="input-container">
            <input
              onChange={(e) => setListingBody({ ...listingBody, title: e.target.value })}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
          </div>

          <div className="input-container">
            <input
              onChange={(e) => setListingBody({ ...listingBody, description: e.target.value })}
              type="text"
              name="description"
              id="description"
              placeholder="Description"
            />
          </div>

          <button className="secondary-btn" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

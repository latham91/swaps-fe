import { useState } from "react";
import { Image } from "lucide-react";
import "../styles/CreateListingPage.css";

export default function CreateListingPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
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
          <input type="file" id="image" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
        </div>

        <form id="create-listing-form">
          <div className="input-container">
            <input type="text" name="title" id="title" placeholder="Title" />
          </div>

          <div className="input-container">
            <input type="text" name="description" id="description" placeholder="Description" />
          </div>

          <button className="secondary-btn" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

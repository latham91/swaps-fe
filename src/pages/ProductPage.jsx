import "../styles/ProductPage.css";

export default function ProductPage() {
  return (
    <div className="product-page">
      <h1 className="product-title">Product Title</h1>
      <img
        className="product-image"
        src="https://images.pexels.com/photos/6572954/pexels-photo-6572954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Product Image"
      />
      <h2 className="product-username">@aaron</h2>
      <p className="product-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        omnis dolore corrupti quam harum neque a fugit numquam modi, impedit
        eveniet. Perspiciatis sint quidem optio corrupti neque quas voluptas
        necessitatibus!
      </p>
      <button>Swap</button>
    </div>
  );
}

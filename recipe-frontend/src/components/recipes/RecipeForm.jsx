import { useState } from "react";

export default function RecipeForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);

  // Convert uploaded image to Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, ingredients, image });
    setTitle("");
    setIngredients("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        className="form-control mb-2"
        onChange={handleImageUpload}
      />

      {image && (
        <img
          src={image}
          alt="preview"
          className="mb-2"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      )}

      <button className="btn btn-primary">Create</button>
    </form>
  );
}

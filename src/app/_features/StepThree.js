import { useState } from "react";
export default function StepThree({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [error, setError] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError("Image cannot be larger than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = () => {
    if (!formData.username || !formData.profileImage) {
      setError("Please fill in all fields.");
      return;
    }
    nextStep();
  };
  return (
    <div className="form-container">
      <h2>Profile Setup 😎</h2>
      <p>Please provide your profile information</p>
      <input
        type="text"
        placeholder="Profile name"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <div className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {formData.profileImage && (
          <img
            src={formData.profileImage}
            alt="Preview"
            className="preview-img"
          />
        )}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="buttons">
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={handleSubmit}>Submit 3/3</button>
      </div>
    </div>
  );
}

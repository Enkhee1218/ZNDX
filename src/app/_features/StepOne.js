import { useState } from "react";

export default function StepOne({ nextStep }) {
  const [form, setForm] = useState({ first: "", last: "", username: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.first.match(/^[A-Za-z]+$/)) {
      newErrors.first = "Name cannot contain special characters or numbers.";
    }
    if (!form.last.match(/^[A-Za-z]+$/)) {
      newErrors.last = "Name cannot contain special characters or numbers.";
    }
    if (form.username.toLowerCase() === "taken") {
      newErrors.username = "This username is already taken.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Us! 😎</h2>
      <p>Please provide all current information accurately.</p>

      <label>First name</label>
      <input
        type="text"
        placeholder="Placeholder"
        value={form.first}
        onChange={(e) => setForm({ ...form, first: e.target.value })}
        className={errors.first ? "error" : ""}
      />
      {errors.first && <span className="error-text">{errors.first}</span>}

      <label>Last name</label>
      <input
        type="text"
        placeholder="Placeholder"
        value={form.last}
        onChange={(e) => setForm({ ...form, last: e.target.value })}
        className={errors.last ? "error" : ""}
      />
      {errors.last && <span className="error-text">{errors.last}</span>}

      <label>Username</label>
      <input
        type="text"
        placeholder="Placeholder"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className={errors.username ? "error" : ""}
      />
      {errors.username && <span className="error-text">{errors.username}</span>}

      <button type="submit">Continue (1/3)</button>
    </form>
  );
}

import { useState } from "react";

export default function StepTwo({ nextStep, prevStep }) {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.email.includes("@")) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!form.phone.match(/^[0-9]+$/)) {
      newErrors.phone = "Please provide a valid phone number.";
    }
    if (!form.password.match(/^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$/)) {
      newErrors.password = "Password must include letters and numbers.";
    }
    if (form.password !== form.confirm) {
      newErrors.confirm = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Form submitted 🎉");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Us! 😎</h2>
      <p>Please provide all current information accurately.</p>

      <label>Email</label>
      <input
        type="email"
        placeholder="Placeholder"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={errors.email ? "error" : ""}
      />
      {errors.email && <span className="error-text">{errors.email}</span>}

      <label>Phone number</label>
      <input
        type="text"
        placeholder="Placeholder"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={errors.phone ? "error" : ""}
      />
      {errors.phone && <span className="error-text">{errors.phone}</span>}

      <label>Password</label>
      <input
        type="password"
        placeholder="Placeholder"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className={errors.password ? "error" : ""}
      />
      {errors.password && <span className="error-text">{errors.password}</span>}

      <label>Confirm password</label>
      <input
        type="password"
        placeholder="Placeholder"
        value={form.confirm}
        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
        className={errors.confirm ? "error" : ""}
      />
      {errors.confirm && <span className="error-text">{errors.confirm}</span>}

      <div className="button-group">
        <button type="button" onClick={prevStep} className="secondary">
          ← Back
        </button>
        <button type="submit">Continue (2/3) →</button>
      </div>
    </form>
  );
}

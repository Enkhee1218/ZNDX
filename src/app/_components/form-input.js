export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "Placeholder",
  error,
}) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "error" : ""}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

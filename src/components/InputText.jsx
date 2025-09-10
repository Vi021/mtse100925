

export default function InputText({
  value,
  onChange,
  placeholder = "Type something...",
  style = {},
}) {
  const baseStyle = {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ ...baseStyle, ...style }}
    />
  );
}

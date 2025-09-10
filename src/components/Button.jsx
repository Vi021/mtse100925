

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  style = {},
}) {
  const baseStyle = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
  };

  const variants = {
    primary: { backgroundColor: "#2563eb", color: "#fff" },
    secondary: { backgroundColor: "#e5e7eb", color: "#111" },
    danger: { backgroundColor: "#dc2626", color: "#fff" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}

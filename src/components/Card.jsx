

export default function Card({ children, style = {} }) {
  const baseStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    marginBottom: "12px",
    backgroundColor: "#fff",
  };

  return <div style={{ ...baseStyle, ...style }}>{children}</div>;
}

import React from "react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  const overlay = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modal = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    minWidth: "300px",
    maxWidth: "500px",
  };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        {title && <h2 style={{ marginBottom: "12px" }}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}

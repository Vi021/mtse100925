import { useState } from "react";
import { CartProvider, useCart } from "./CartProvider";
import { Button, InputText, Card, Modal } from "./index";

function CartDemo() {
  const { cart, addItem, removeItem, updateItem, clearCart, totalItems, totalPrice } = useCart();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleAdd = () => {
    if (!name || !price) return;
    addItem({ id: Date.now(), name, price: parseFloat(price), quantity: 1 });
    setName("");
    setPrice("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 My Cart</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
        <InputText value={name} onChange={setName} placeholder="Name" />
        <InputText value={price} onChange={setPrice} placeholder="Price" />
        <Button onClick={handleAdd}>Add</Button>
      </div>

      <div>
        {cart.map((item) => (
          <Card key={item.id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>{item.name}</strong> - {item.price}₫ x {item.quantity}
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <Button
                  variant="secondary"
                  onClick={() => updateItem(item.id, { quantity: item.quantity + 1 })}
                >
                  +
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    updateItem(item.id, { quantity: Math.max(1, item.quantity - 1) })
                  }
                >
                  -
                </Button>
                <Button variant="danger" onClick={() => removeItem(item.id)}>
                  ×
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h3>Item Count: {totalItems}</h3>
          <h3>Total: {totalPrice}₫</h3>
          <Button variant="danger" onClick={() => setOpenModal(true)}>
            Clear Cart
          </Button>
        </>
      )}

      <Modal open={openModal} onClose={() => setOpenModal(false)} title="Comfirm Action">
        <p>Your cart will be cleared, proceed?</p>
        <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <Button variant="danger" onClick={() => { clearCart(); setOpenModal(false); }}>
            Proceed
          </Button>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <CartDemo />
    </CartProvider>
  );
}
